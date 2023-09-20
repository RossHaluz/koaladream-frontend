import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/slice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { categoriesReducer } from './categories/slice';
import { itemReducer } from './items/slice';
import { blogReducer } from './blog/slice';
import { mobileMenuReducer } from './mobileMenu/slice';
import { filterRuducer } from './filter/slice';
import { optionsReduser } from './options/slice';
import { filterAdminReducer } from './filtersAdmin/slice';

const persistConfig = {
  key: 'token',
  whitelist: ['token'],
  storage,
};

const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistedReducer,
    category: categoriesReducer,
    item: itemReducer,
    blog: blogReducer,
    menu: mobileMenuReducer,
    filter: filterRuducer,
    option: optionsReduser,
    filterAdmin: filterAdminReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
