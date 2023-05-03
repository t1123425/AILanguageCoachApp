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
    quizs:quizData[],
    explainPopupToggle:boolean
}
const initialState:quizState = {
    quizs:[],
    explainPopupToggle:false
};

export const qnaSlice = createSlice({
    name:'QnaSlice',
    initialState,
    reducers:{
        // updateQuizs:(state,action:PayloadAction<quizData>) => {
        //     state.quizs = state.quizs.map(e => {
        //         if(action.payload.id === e.id){
        //             return {...e,isCorrect:action.payload.isCorrect,explain:action.payload.explain}
        //         }else{
        //             return e
        //         }
        //     });
        // },
        addQuiz:(state,action:PayloadAction<quizData>) => {
            state.quizs = [...state.quizs,action.payload];
        },
        popUpToggle:(state) => {
            state.explainPopupToggle = !state.explainPopupToggle;
        }
    }
})

export const {addQuiz,popUpToggle} = qnaSlice.actions;
export default qnaSlice.reducer;   