import ButtonSignOut from "@/components/ButtonSignOut.tsx";
import {useAppSelector} from "@/redux/hooks.ts";

function Header() {
    const user = useAppSelector(state => state.persistedReducer.user)
    const token = localStorage.getItem('token');

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