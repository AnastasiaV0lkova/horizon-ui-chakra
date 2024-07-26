import { configureStore } from '@reduxjs/toolkit';
import thumbnailsReducer from './thumbnailsSlice';
import authReducer from './authSlice';

export default function createStore() {

    return configureStore({
      reducer: {
        thumbnails: thumbnailsReducer,
        auth: authReducer,
      },
    });
}