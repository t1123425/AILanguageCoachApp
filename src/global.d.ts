import { User } from "@prisma/client"

export interface LinksData{
    text:string,
    url:string
}
export interface QnaRequestData{
    gptDatas:GPTData[]
}
export interface GPTData{
    /**
     * role: 
     * first submit role will be 'system'
     * then ai role will be 'assistant'
     * user role will be 'user'
     */
    role:string,
    content:string
}

export type SafeUser = Omit<
    User,
    "createdAt" | "updatedAt" | "emailVerified"
    > & {
        createdAt: string;
        updatedAt: string;
        emailVerified:string | null
    };