import ClientView from "@/app/components/ClientView"
export default function FAQLayout({
    children,
  }: {
    children: React.ReactNode
  }){
    return (
        <ClientView>
            <main className='w-full h-full' >
                <section className="container mx-auto h-full px-2">
                    {children}
                </section>
            </main>
        </ClientView> 
    )
}