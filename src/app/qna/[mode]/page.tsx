import QnAContent from "@/app/components/QnAContent"
import InfoModal from "@/app/components/InfoModal";
import getCurrentUser from "@/app/actions/getCurrentUser";
import { redirect } from "next/navigation"
import ClientView from "@/app/components/ClientView";
export default async function QnaPage({
    params,
    searchParams,
  }: {
    params: { mode: string };
    searchParams: { [key: string]: string | undefined };
  }) {
    const userdata = await getCurrentUser();
    if(!userdata){
      redirect('/')
    }
    return (
      <ClientView userData={userdata}>
          <main className='w-full h-full max-h-[calc(100%_-_80px)] lg:max-h-[calc(100%_-_112px)]' >
            <section className="container mx-auto h-full">
            <InfoModal title="Welcome to practice area">
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                Hi, I am your AI language coach.Next, I will generate fill-in-the-blank language exercises according to your settings. I will help you answer and explain each question, so let’s start when you are ready.
              </p>
            </InfoModal>
            <QnAContent 
              level={searchParams.level}
              nLang={searchParams.nlang} />
            </section>
        </main>
      </ClientView> 
    )
}