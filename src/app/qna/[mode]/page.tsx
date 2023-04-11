import QnAContent from "@/app/components/QnAContent"
export default function QnaPage({
    params,
    searchParams,
  }: {
    params: { mode: string };
    searchParams: { [key: string]: string | string[] | undefined };
  }) {
    let question = 'Hi my English teacher'
    if(process.env.QUESTION_TEMPLATE){
      question = process.env.QUESTION_TEMPLATE;
    }
 
    return (
        <section className="container mt-2 mx-auto h-screen bg-white">
            {/* <h1>This is {params.mode} page</h1> */}
            <QnAContent questionTemplate={question}/>
        </section>
        
    )
}