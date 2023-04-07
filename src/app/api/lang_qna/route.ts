import { OpenAIApi,Configuration} from "openai";
import { NextResponse } from "next/server";
import { MsgData } from "@/global";

const apiConfirm = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(apiConfirm);


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
        console.log('backend response',res);
        const chatResponse = await openai.createChatCompletion({
            model:'gpt-3.5-turbo',
            messages:res.qna
        })
        // console.log('chatResponse',chatResponse);
        return NextResponse.json({
            result:'success',
            data:chatResponse.data
        },{status:200})
    } catch (error) {
        return NextResponse.json({
            error:{
                message: error,
            }
        },{
            status:500
        })
    }
}