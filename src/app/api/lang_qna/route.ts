import { OpenAIApi,Configuration} from "openai";
import { NextResponse } from "next/server";
import { GPTData } from "@/global";
const apiConfirm = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(apiConfirm);

const handleUserReply = (qnaArray:GPTData[],nLang:string,ansCount:number,questionCount:number) => {
    const callbackQna = qnaArray.map((e) => {
        if(e.role === 'user'){
            let userReply = {role:'user',content:e.content+`${process.env.NEXT_REPLY}(use ${nLang} to reply) ${process.env.GET_NEXT_QUESTION}`}
            if(ansCount === questionCount){
                userReply = {role:'user',content:e.content+`${process.env.NEXT_REPLY}(use ${nLang} to reply) and stop generate question.`}
            }
            return userReply
        }else{
            return e;
        }
    })
    return callbackQna;
}

export async function POST(request: Request){
    if (!apiConfirm.apiKey){
        return NextResponse.json({
            error:{
                message: "OpenAI API key not configured, please follow instructions in README.md",
            }
        },{
            status:500
        })
    }
    try {
        
        const res = await request.json();
        const question_lang = 'English';
        const questionCount = 5;
        if(!res.level){
            return NextResponse.json({
                error:{
                    message: 'Question Level Error',
                    callback:'close'
                }
            },{
                status:500
            })
        }
        const choiceLevel = res.level;
        const nativeLangs = res.nLang;
        const ansCount = res.ansCount;
        const qt = process.env.QUESTION_TEMPLATE?.split('@');
        const generateQuiz = `${qt?qt[0]:'' }${choiceLevel} ${question_lang} ${qt?qt[1]:'' } ${process.env.QUESTION_TYPE_1}`

        const initQuestion:GPTData = {role:'system',content:generateQuiz}
        const responseQna = handleUserReply(res.qna,nativeLangs,ansCount,questionCount); 
        const qnaMsg:any[] = [initQuestion,...responseQna];
        const chatResponse = await openai.createChatCompletion({
            model:'gpt-3.5-turbo',
            messages:qnaMsg
        })
        return NextResponse.json({
            result:'success',
            data:chatResponse.data
        },{status:200})
    } catch (error) {
        return NextResponse.json({
            error:{
                message: error,
                callback:'re-call'
            }
        },{
            status:500
        })
    }
}