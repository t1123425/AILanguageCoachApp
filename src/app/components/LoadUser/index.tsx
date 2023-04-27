import getCurrentUser from "@/app/actions/getCurrentUser";
import { store } from "@/store";
import { setUser } from "@/store/userSlice";

const LoadUser = async () => {
    const userdata = await getCurrentUser();
    if(userdata){
        //console.log('run redux',userdata);
        store.dispatch(setUser(userdata));
    }
    return null;
}

export default LoadUser as unknown as () => JSX.Element;