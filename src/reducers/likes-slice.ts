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

// --- Лайки проектов (счётчик на каждый проект отдельно) ---

// Ключ лайков проекта в бэкенде: likes:p:<slug>
export const likeIdOf = (slug: string) => `p:${slug}`;

export const fetchProjectLikes = createAsyncThunk<
  { id: string; likes: number },
  { id: string },
  { rejectValue: IRejectedValue }
>("likes/fetchProjectLikes", async ({ id }, thunkAPI) => {
  try {
    const res = (await getLikes({ id })) as { likes?: number };
    // Нет ключа в Redis — у проекта ещё нет лайков, это честный ноль
    return { id, likes: res.likes ?? 0 };
  } catch (error) {
    const { message, status } = error as CallApiError;
    return thunkAPI.rejectWithValue({ error: { status, message } });
  }
}, {
  // Дедуп по проекту: карточка в списке и страница проекта дергают один id
  condition: ({ id }, { getState }) => {
    const { likes } = getState() as { likes: IState };
    return !likes.projectLoading[id] && !likes.projectLoaded[id];
  },
});

export const sendProjectLike = createAsyncThunk<
  { id: string; likes: number | null },
  { id: string },
  { rejectValue: IRejectedValue }
>("likes/sendProjectLike", async ({ id }, thunkAPI) => {
  try {
    const res = (await sendLike({ id, value: 1 })) as { likes?: number };
    return { id, likes: res.likes ?? null };
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
  // Лайки проектов: id (см. likeIdOf) → счётчик с бэкенда
  projectLikes: Record<string, number>;
  // загружен / загружается ли конкретный проект (дедуп в condition)
  projectLoaded: Record<string, boolean>;
  projectLoading: Record<string, boolean>;
  // Общий «удар пульса» для всех кнопок-сердец: инкремент при клике по любой —
  // все экземпляры ButtonHeart (сайдбар × 2 + настройки) анимируются синхронно.
  beat: number;
  // Идёт отправка лайка на бэкенд: сердца непрерывно бьются, пока запрос
  // в полёте; по успеху — «празднование» (конфетти, сердца, тост).
  sending: boolean;
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
  projectLikes: {},
  projectLoaded: {},
  projectLoading: {},
  beat: 0,
  sending: false,
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
    // «Удар пульса»: клик по любой кнопке-сердцу анимирует все экземпляры
    beatHeart: (state) => {
      state.beat += 1;
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
        state.sending = true;
        state.status = null;
      })
      .addCase(fetchSendLike.fulfilled, (state, action) => {
        state.loading = false;
        state.sending = false;
        state.status = RequestLikes.SUCCESS_LIKES;
        // Сверяемся с бэкендом: он вернул авторитетное значение счётчика
        if (action.payload.likes !== null) {
          state.likes = action.payload.likes;
        }
      })
      .addCase(fetchSendLike.rejected, (state, action) => {
        state.loading = false;
        state.sending = false;
        state.status = RequestLikes.ERROR_LIKES;
      })
      .addCase(fetchProjectLikes.pending, (state, action) => {
        state.projectLoading[action.meta.arg.id] = true;
      })
      .addCase(fetchProjectLikes.fulfilled, (state, action) => {
        state.projectLoading[action.meta.arg.id] = false;
        state.projectLoaded[action.meta.arg.id] = true;
        state.projectLikes[action.meta.arg.id] = action.payload.likes;
      })
      .addCase(fetchProjectLikes.rejected, (state, action) => {
        state.projectLoading[action.meta.arg.id] = false;
        // loaded не ставим — следующее монтирование попробует снова
      })
      .addCase(sendProjectLike.fulfilled, (state, action) => {
        if (action.payload.likes !== null) {
          state.projectLikes[action.payload.id] = action.payload.likes;
        }
      });
  },
});

export const { setLikes, setIdLikes, clearStatus, beatHeart } = likes.actions;
export const likesReducer = likes.reducer;
