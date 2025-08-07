import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ClimateType, ForecastItem, Weather } from "src/common/types/climat";
import {getForecast, getWeather} from "src/routes/climate";
import {CallApiError} from "src/api";

interface IRejectedValue {
  error: {
    status: number;
    message: string;
  };
}

export const fetchWeather = createAsyncThunk<
    { weather: Weather | null, forecast: ForecastItem[] },
    { city: string },
    { rejectValue: IRejectedValue }
>('climate/fetchWeather', async (data, thunkAPI) => {
  const {city} = data;
  try {
    const weather = await getWeather(city);
    const forecast = await getForecast(city);

    return {
      weather: weather,
      forecast: forecast, // 5 дней
    };
  } catch (error) {
    const {message, status} = error as CallApiError;
    return thunkAPI.rejectWithValue({ error: { status, message } });
  }
});

type IState = {
  climate: ClimateType;
  weather: Weather | null;
  forecast: ForecastItem[];
  loading: boolean;
  error: string | null;
};

const initialState: IState = {
  climate: "sunnyMoon",
  weather: null,
  forecast: [],
  loading: false,
  error: null,
};

const climate = createSlice({
  name: "climate",
  initialState,
  reducers: {
    setClimateControl: (state, action: PayloadAction<ClimateType>) => ({
      ...state,
      climate: action.payload
    })
  },
  extraReducers: (builder) => {
    builder
        .addCase(fetchWeather.pending, (state) => ({
          ...state,
          loading: true,
          error: null
        }))
        .addCase(fetchWeather.fulfilled, (state, action) => ({
          ...state,
          loading: false,
          weather: action.payload.weather,
          forecast: action.payload.forecast
        }))
        .addCase(fetchWeather.rejected, (state, action) => ({
          ...state,
          loading: false,
          error: action.error.message || 'Ошибка'
        }));
  },
});

export const { setClimateControl } = climate.actions;

export const climateReducer = climate.reducer;
