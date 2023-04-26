import QnAContent from "@/app/components/QnAContent"
import InfoModal from "@/app/components/InfoModal";
import { store } from "@/store"
import { redirect } from "next/navigation"
export default function QnaPage({
    params,
    searchParams,
  }: {
    params: { mode: string };
    searchParams: { [key: string]: string | undefined };
  }) {
    if(!store.getState().user.currentUser && !searchParams){
      redirect('/')
    }
    return (
        
        <>
            <InfoModal title="Welcome to the AI Langage Coach Demo">
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Hi, I am your AI language coach. Next, you will complete 5 fill-in-the-blank multiple-choice questions. 
              I will answer each question for you. Are you ready? Press the start button.
              </p>
            </InfoModal>
            <QnAContent questionCounts={10} 
              level={searchParams.level}
              nLang={searchParams.nlang} />
        </>
        
    )
}