import QnAcontent from "@/app/components/QnAContent"
export default function QnaPage({
    params,
    searchParams,
  }: {
    params: { mode: string };
    searchParams: { [key: string]: string | string[] | undefined };
  }) {
    return (
        <section className="container mt-2 mx-auto h-screen bg-white">
            <h1>This is {params.mode} page</h1>
            <QnAcontent />
        </section>
        
    )
}