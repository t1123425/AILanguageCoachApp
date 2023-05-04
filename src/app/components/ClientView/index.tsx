import StyledComponentsRegistry from "@/app/styleRegistry";
import Header from "../Header";
import { SafeUser } from "@/global";
import { store } from "@/store";
import { setUser } from "@/store/userSlice";
import Providers from "../Provider";
interface Props{
    children:React.ReactNode,
    userData?:SafeUser | null
}
const ClientView = ({children, userData}:Props) => {
    if(userData){
        store.dispatch(setUser(userData))
    }
    return (
        <Providers>
             <StyledComponentsRegistry>
                <Header />
                {children}
            </StyledComponentsRegistry>
        </Providers>
       
    )
}

// export default ClientView as unknown as ({children}:Props) => JSX.Element;
export default ClientView;