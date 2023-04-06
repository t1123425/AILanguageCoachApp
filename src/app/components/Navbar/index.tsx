import { LinksData } from "@/global"
import Link from "next/link"
interface Props{
    links:LinksData[],
    className?:string
}
const NavBar = ({links,className}:Props) => {
    return (
        <nav className={className}>
            <ul className="flex">
                {
                    links.map((e,i)=> {
                        return (
                            <li key={i}>
                                <Link href={e.url} className="p-3 font-bold">
                                    {e.text}
                                </Link> 
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}

export default NavBar