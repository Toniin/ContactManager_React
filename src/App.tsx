import './App.css'
import Header from "@/components/Header.tsx";
import {Toaster} from "@/components/ui/sonner"
import {Provider} from 'react-redux'
import {store} from "@/redux/store.ts";
import {Outlet} from "react-router-dom";

function App() {
    return (
        <Provider store={store}>
            <Header/>
            <Outlet/>
            <Toaster/>
        </Provider>

    )
}

export default App
