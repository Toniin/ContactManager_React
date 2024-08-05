import ButtonSignOut from "@/components/ButtonSignOut.tsx";
import {useAppSelector} from "@/redux/hooks.ts";

function Header() {
    const user = useAppSelector(state => state.persistedReducer)
    const token = localStorage.getItem('Token');

    console.log(user.isAuthenticated)

    return (
        <header className="container flex justify-between items-center my-10">
            <h1 className="text-5xl">Contact manager</h1>
            {user.isAuthenticated && token ?
                <ButtonSignOut/>
                : null}
        </header>
    );
}

export default Header;