import ClientView from "@/app/components/ClientView"
export default function SetupLayout({
    children,
  }: {
    children: React.ReactNode
  }){
    return (
        <ClientView>
            <main className='w-full h-full' >
                <section className="container mx-auto h-full">
                    {children}
                </section>
            </main>
        </ClientView> 
    )
}