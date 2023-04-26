import StyledComponentsRegistry from "@/app/styleRegistry";
import Header from "../Header";
// import getCurrentUser from "@/app/actions/getCurrentUser";
// import { store } from "@/store";
// import { setUser } from "@/store/userSlice";
interface Props{
    children:React.ReactNode
}
const ClientView = async ({children}:Props) => {
    // const userdata = await getCurrentUser();
    // if(userdata){
    //     console.log('run redux');
    //     store.dispatch(setUser(userdata));
    // }

    return (
        <StyledComponentsRegistry>
            <Header />
            {children}
        </StyledComponentsRegistry>
    )
}

export default ClientView as unknown as ({children}:Props) => JSX.Element;