import { LinksData } from "@/global"
import NavBar from "../Navbar"
import Link from "next/link"

const Header = () => {
    const navLinks:LinksData[] = [
        {
            text:'Changelle',
            url:'/changelle'
        },
        {
            text:'Practices',
            url:'/practices'
        }
    ]
    return (
        <header className="w-full flex justify-center">
            <div className="flex bg-slate-50 justify-between max-w-screen-xl mt-2 mx-4 w-full p-3 shadow-md rounded-md">
                <Link href={'/'} className="font-bold">
                    Language Coach
                </Link>
                <NavBar links={navLinks} />
            </div>
        </header>
    )
}

export default Header;