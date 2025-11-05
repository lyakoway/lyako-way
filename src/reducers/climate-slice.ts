import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ClimateType, ForecastItem, Weather } from "src/common/types/climat";
import { getCities, getForecast, getWeather } from "src/routes/climate";
import { CallApiError } from "src/api";

interface IRejectedValue {
  error: {
    status: number;
    message: string;
  };
}

export const fetchWeather = createAsyncThunk<
  { weather: Weather | null; forecast: ForecastItem[] },
  { city: string },
  { rejectValue: IRejectedValue }
>("climate/fetchWeather", async (data, thunkAPI) => {
  const { city } = data;
  try {
    const weather = await getWeather({ city });
    const forecast = await getForecast({ city });

    return {
      weather: weather,
      forecast: forecast, // 5 дней
    };
  } catch (error) {
    const { message, status } = error as CallApiError;
    return thunkAPI.rejectWithValue({ error: { status, message } });
  }
});

export const fetchCities = createAsyncThunk<
  { cityAutofill: string[] | null },
  { city: string },
  { rejectValue: IRejectedValue }
>("climate/fetchCities", async (data, thunkAPI) => {
  const { city } = data;
  try {
    const cityRequest = await getCities({ city });

    if (!Array.isArray(cityRequest)) {
      return { cityAutofill: [] };
    }

    // Убираем дубликаты по (name + country)
    const uniqueCities = cityRequest.filter(
      (c: any, index: number, self: any[]) =>
        index ===
        self.findIndex(
          (x) =>
            x.name.trim().toLowerCase() === c.name.trim().toLowerCase() &&
            x.country.trim().toLowerCase() === c.country.trim().toLowerCase()
        )
    );

    // Формируем строку без "Moscow City" и дубликатов региона
    const cityAutofill = uniqueCities.map((c: any) => {
      const region =
        c.region &&
        c.region !== c.name &&
        !c.region.toLowerCase().includes("city") &&
        !c.region.toLowerCase().includes(c.name.toLowerCase())
          ? `, ${c.region}`
          : "";
      return `${c.name}${region}, ${c.country}`;
    });

    return { cityAutofill };
  } catch (error) {
    const { message, status } = error as CallApiError;
    return thunkAPI.rejectWithValue({ error: { status, message } });
  }
});

type IState = {
  climate: ClimateType;
  weather: Weather | null;
  forecast: ForecastItem[];
  cityAutofill: string[];
  selectedCity: string;
  loading: boolean;
  error: string | null;
  userSelectedClimate: boolean;
};

const savedCity =
  typeof window !== "undefined" ? localStorage.getItem("selectedCity") : null;

const initialState: IState = {
  climate: "sunnyMoon",
  weather: null,
  forecast: [],
  cityAutofill: [],
  selectedCity: savedCity || "Москва",
  loading: false,
  error: null,
  userSelectedClimate: false,
};

const climate = createSlice({
  name: "climate",
  initialState,
  reducers: {
    setClimateControl: (state, action: PayloadAction<ClimateType>) => {
      state.climate = action.payload;
      state.userSelectedClimate = true; //пользователь сделал выбор
      if (typeof window !== "undefined") {
        localStorage.setItem("userSelectedClimate", "true");
      }
    },
    setSelectedCity: (state, action) => {
      state.selectedCity = action.payload;
      if (typeof window !== "undefined") {
        localStorage.setItem("selectedCity", action.payload); //сохраняем
      }
    },
    resetUserSelectedClimate: (state) => {
      state.userSelectedClimate = false;
      if (typeof window !== "undefined") {
        localStorage.removeItem("userSelectedClimate");
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => ({
        ...state,
        loading: true,
        error: null,
      }))
      .addCase(fetchWeather.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        weather: action.payload.weather,
        forecast: action.payload.forecast,
      }))
      .addCase(fetchWeather.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.error.message || "Ошибка",
      }))
      .addCase(fetchCities.pending, (state) => ({
        ...state,
        loading: true,
        error: null,
      }))
      .addCase(fetchCities.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        cityAutofill: action.payload.cityAutofill || [],
      }))
      .addCase(fetchCities.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.error.message || "Ошибка",
      }));
  },
});

export const { setClimateControl, setSelectedCity, resetUserSelectedClimate } = climate.actions;

export const climateReducer = climate.reducer;
