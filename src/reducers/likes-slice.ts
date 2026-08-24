import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CallApiError } from "src/api";
import { getLikes, sendLike } from "src/routes/likes";
import { RequestLikes } from "src/common/enums/Likes/RequestLikes";

interface IRejectedValue {
  error: {
    status: number;
    message: string;
  };
}

// --- Thunks ---
export const fetchLikes = createAsyncThunk<
  { likes: number | null },
  { idLikes: string },
  { rejectValue: IRejectedValue }
>(
  "likes/fetchLikes",
  async ({ idLikes }, thunkAPI) => {
    try {
      const res = (await getLikes({ id: idLikes })) as { likes?: number };
      // Если API вернул пустой объект, возвращаем null
      return { likes: res.likes ?? null };
    } catch (error) {
      const { message, status } = error as CallApiError;
      return thunkAPI.rejectWithValue({ error: { status, message } });
    }
  },
  {
    // Дедуп: не запускаем повторно, если запрос уже идёт (loading) или лайки
    // уже загружены в этой сессии (loaded). Иначе несколько <ButtonHeart>
    // (сайдбар × 2 + настройки) плодят дублирующие запросы heart_button.
    condition: (_arg, { getState }) => {
      const { likes } = getState() as { likes: IState };
      return !likes.loading && !likes.loaded;
    },
  }
);

export const fetchSendLike = createAsyncThunk<
  { likes: number | null },
  { idLikes: string; value: number },
  { rejectValue: IRejectedValue }
>("likes/fetchSendLike", async ({ idLikes, value }, thunkAPI) => {
  try {
    const res = (await sendLike({ id: idLikes, value })) as {
      likes?: number;
    };
    // Бэкенд инкрементирует и возвращает авторитетное значение счётчика
    return { likes: res.likes ?? null };
  } catch (error) {
    const { message, status } = error as CallApiError;
    return thunkAPI.rejectWithValue({ error: { status, message } });
  }
});

// --- State ---
type IState = {
  likes: number;
  idLikes: string;
  loading: boolean;
  // true после первой успешной загрузки лайков — чтобы не грузить повторно
  // (дедуп нескольких <ButtonHeart>). См. condition в fetchLikes.
  loaded: boolean;
  error: string | null;
  status: RequestLikes | null;
};

// Счётчик лайков НЕ храним в localStorage: он привязан к устройству и
// рассинхронялся с бэкендом (на новом устройстве — ноль, и отправка
// затирала накопленное). Единственный источник истины — бэкенд: GET при
// загрузке, инкремент в POST. Старый ключ от прошлых версий вычищаем,
// чтобы не путал при отладке.
if (typeof window !== "undefined") {
  localStorage.removeItem("likes");
}

const savedIdLikes =
  typeof window !== "undefined" ? localStorage.getItem("idLikes") : "";

const initialState: IState = {
  likes: 0,
  idLikes: savedIdLikes || "heart_button",
  loading: false,
  loaded: false,
  error: null,
  status: null,
};

// --- Slice ---
const likes = createSlice({
  name: "likes",
  initialState,
  reducers: {
    setLikes: (state, action: PayloadAction<number>) => {
      state.likes = action.payload;
    },
    setIdLikes: (state, action: PayloadAction<string>) => {
      state.idLikes = action.payload;
      if (typeof window !== "undefined") {
        localStorage.setItem("idLikes", action.payload);
      }
    },
    clearStatus: (state, action: PayloadAction<string>) => {
      state.status = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLikes.pending, (state) => {
        state.loading = true;
        state.status = null;
      })
      .addCase(fetchLikes.fulfilled, (state, action) => {
        state.loading = false;
        state.loaded = true;
        // Если likes === null, оставляем старое значение
        if (action.payload.likes !== null) {
          state.likes = action.payload.likes;
        }
      })
      .addCase(fetchLikes.rejected, (state, action) => {
        state.loading = false;
        state.status = RequestLikes.ERROR_LIKES;
        // не обнуляем likes
      })
      .addCase(fetchSendLike.pending, (state) => {
        state.loading = true;
        state.status = null;
      })
      .addCase(fetchSendLike.fulfilled, (state, action) => {
        state.loading = false;
        state.status = RequestLikes.SUCCESS_LIKES;
        // Сверяемся с бэкендом: он вернул авторитетное значение счётчика
        if (action.payload.likes !== null) {
          state.likes = action.payload.likes;
        }
      })
      .addCase(fetchSendLike.rejected, (state, action) => {
        state.loading = false;
        state.status = RequestLikes.ERROR_LIKES;
      });
  },
});

export const { setLikes, setIdLikes, clearStatus } = likes.actions;
export const likesReducer = likes.reducer;
