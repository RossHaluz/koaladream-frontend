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
import { orderReducer } from './order/slice';
import { reviewReducer } from './reviews/slice';

const persistConfig = {
  key: 'userDetails',
  whitelist: ['token', 'userContactDetails'],
  storage,
};

const persistOrder = {
  key: 'orderItems',
  whitelist: ['orderItems'],
  storage
}


export const store = configureStore({
  reducer: {
    auth: persistReducer(persistConfig, authReducer),
    category: categoriesReducer,
    item: itemReducer,
    blog: blogReducer,
    menu: mobileMenuReducer,
    filter: filterRuducer,
    option: optionsReduser,
    filterAdmin: filterAdminReducer,
    order: persistReducer(persistOrder, orderReducer),
    review: reviewReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
