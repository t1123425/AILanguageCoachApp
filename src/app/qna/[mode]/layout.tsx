export default function QNALayout({
    children,
  }: {
    children: React.ReactNode
  }){
    return (
        <main className='w-full h-full max-h-[calc(100%_-_80px)] lg:max-h-[calc(100%_-_112px)]' >
            <section className="container mx-auto h-full">
                {children}
            </section>
        </main>
        
    )
}