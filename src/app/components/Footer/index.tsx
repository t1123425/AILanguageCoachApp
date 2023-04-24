import Link from "next/link";
const Footer = () => {
    return (
        <footer className="w-full flex justify-center p-2 bg-slate-600">
            <p className="text-white">Copyright ©
            <Link href={'https://t1123425.github.io/my-portfolio/'} target="_blank" className="mx-2 font-bold underline underline-offset-2">
                Tom Yuan
            </Link>  
            2023</p>
        </footer>
    )
}

export default Footer;