import {configureStore} from '@reduxjs/toolkit';

import userReducer from './userSlice';
import qnaReducer from './qnaSlice';

export const store = configureStore({
    reducer:{
        user:userReducer,
        qna:qnaReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;