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

export const fetchLikes = createAsyncThunk<
  { likes: number },
  { idLikes: string }, //это уникальный идентификатор того, что ты лайкаешь сердечки или еще что-то и храним этого количество
  { rejectValue: IRejectedValue }
>("climate/fetchWeather", async (data, thunkAPI) => {
  const { idLikes } = data;
  try {
    const res = (await getLikes({ id: idLikes })) as { likes: number };

    return { likes: res.likes };
  } catch (error) {
    const { message, status } = error as CallApiError;
    return thunkAPI.rejectWithValue({ error: { status, message } });
  }
});

export const fetchSendLike = createAsyncThunk<
  void,
  { idLikes: string; likes: number },
  { rejectValue: IRejectedValue }
>("climate/fetchCities", async (data, thunkAPI) => {
  const { idLikes, likes } = data;
  try {
    await sendLike({ id: idLikes, value: likes });
  } catch (error) {
    const { message, status } = error as CallApiError;
    return thunkAPI.rejectWithValue({ error: { status, message } });
  }
});

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

const likes = createSlice({
  name: "likes",
  initialState,
  reducers: {
    setLikes: (state, action: PayloadAction<number>) => {
      state.likes = action.payload;
      if (typeof window !== "undefined") {
        localStorage.setItem("likes", String(action.payload)); //сохраняем
      }
    },
    setIdLikes: (state, action: PayloadAction<string>) => {
      state.idLikes = action.payload;
      if (typeof window !== "undefined") {
        localStorage.setItem("idLikes", String(action.payload)); //сохраняем
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLikes.pending, (state) => ({
        ...state,
        loading: true,
        status: null,
      }))
      .addCase(fetchLikes.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        likes: action.payload.likes,
      }))
      .addCase(fetchLikes.rejected, (state, action) => ({
        ...state,
        loading: false,
        status: RequestLikes.ERROR_LIKES,
      }))
      .addCase(fetchSendLike.pending, (state) => ({
        ...state,
        loading: true,
        status: null,
      }))
      .addCase(fetchSendLike.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        status: RequestLikes.SUCCESS_LIKES,
      }))
      .addCase(fetchSendLike.rejected, (state, action) => ({
        ...state,
        loading: false,
        status: RequestLikes.ERROR_LIKES,
      }));
  },
});

export const { setLikes, setIdLikes } = likes.actions;

export const likesReducer = likes.reducer;
