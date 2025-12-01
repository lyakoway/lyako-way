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
>("likes/fetchLikes", async ({ idLikes }, thunkAPI) => {
  try {
    const res = (await getLikes({ id: idLikes })) as { likes?: number };
    // Если API вернул пустой объект, возвращаем null
    return { likes: res.likes ?? null };
  } catch (error) {
    const { message, status } = error as CallApiError;
    return thunkAPI.rejectWithValue({ error: { status, message } });
  }
});

export const fetchSendLike = createAsyncThunk<
  void,
  { idLikes: string; likes: number },
  { rejectValue: IRejectedValue }
>("likes/fetchSendLike", async ({ idLikes, likes }, thunkAPI) => {
  try {
    await sendLike({ id: idLikes, value: likes });
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
  error: string | null;
  status: RequestLikes | null;
};

const savedLikes =
  typeof window !== "undefined" ? Number(localStorage.getItem("likes")) : 0;
const savedIdLikes =
  typeof window !== "undefined" ? localStorage.getItem("idLikes") : "";

const initialState: IState = {
  likes: savedLikes || 0,
  idLikes: savedIdLikes || "heart_button",
  loading: false,
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
      if (typeof window !== "undefined") {
        localStorage.setItem("likes", String(action.payload));
      }
    },
    setIdLikes: (state, action: PayloadAction<string>) => {
      state.idLikes = action.payload;
      if (typeof window !== "undefined") {
        localStorage.setItem("idLikes", action.payload);
      }
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
        // Если likes === null, оставляем старое значение
        if (action.payload.likes !== null) {
          state.likes = action.payload.likes;
          if (typeof window !== "undefined") {
            localStorage.setItem("likes", String(action.payload.likes));
          }
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
      .addCase(fetchSendLike.fulfilled, (state) => {
        state.loading = false;
        state.status = RequestLikes.SUCCESS_LIKES;
      })
      .addCase(fetchSendLike.rejected, (state) => {
        state.loading = false;
        state.status = RequestLikes.ERROR_LIKES;
      });
  },
});

export const { setLikes, setIdLikes } = likes.actions;
export const likesReducer = likes.reducer;
