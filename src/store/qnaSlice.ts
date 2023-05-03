import { createSlice } from "@reduxjs/toolkit";
import  type {PayloadAction} from "@reduxjs/toolkit";

export interface QuizType{
    question?:string,
    options?:option
}
export interface option{
    [key:string]:string
     A:string,
     B:string,
     C:string,
     D:string
}
interface quizData{
    isCorrect?:boolean | null
    explain?:string,
    questions:QuizType | string
}
interface quizState{
    quizs:quizData[]
}
const initialState:quizState = {
    quizs:[],
};

export const qnaSlice = createSlice({
    name:'QnaSlice',
    initialState,
    reducers:{
        initQuiz:(state,action:PayloadAction) => {
            state.quizs = [];
        },
        addQuiz:(state,action:PayloadAction<quizData>) => {
            state.quizs = [...state.quizs,action.payload];
        }
    }
})

export const {addQuiz,initQuiz} = qnaSlice.actions;
export default qnaSlice.reducer;   