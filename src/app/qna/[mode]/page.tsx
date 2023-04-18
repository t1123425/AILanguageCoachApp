import QnAContent from "@/app/components/QnAContent"
import InfoModal from "@/app/components/InfoModal";
export default function QnaPage({
    params,
    searchParams,
  }: {
    params: { mode: string };
    searchParams: { [key: string]: string | string[] | undefined };
  }) {

    return (
        <>
            {/* <h1>This is {params.mode} page</h1> */}
            <InfoModal title="welcome to AI Language Coach Demo">
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                Here we will show the use of chatGPT to generate 5 English fill-in-the-blank questions. 
              </p>
            </InfoModal>
            <QnAContent questionCounts={5} />
        </>
        
    )
}