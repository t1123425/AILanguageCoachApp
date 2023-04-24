import QnAContent from "@/app/components/QnAContent"
import InfoModal from "@/app/components/InfoModal";
export default function QnaPage({
    params,
    searchParams,
  }: {
    params: { mode: string };
    searchParams: { [key: string]: string | undefined };
  }) {
    return (
        <>
            {/* <h1>This is {params.mode} page</h1> */}
            <InfoModal title="Welcome to Daily 5 Questions Practice Mode">
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Next, AI coach will generate 5 fill-in-the-blank questions, please complete it.
              </p>
            </InfoModal>
            <QnAContent questionCounts={10} 
              level={searchParams.level}
              nLang={searchParams.nlang} />
        </>
        
    )
}