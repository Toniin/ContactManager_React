import './App.css'
import Header from "@/components/Header.tsx";
import {Toaster} from "@/components/ui/sonner"
import {Provider} from 'react-redux'
import {store} from "@/redux/store.ts";
import ContactsPage from "@/views/ContactsPage.tsx";

function App() {

    return (
        <Provider store={store}>
            <Header/>
            <ContactsPage/>
            <Toaster/>
        </Provider>

    )
}

export default App
