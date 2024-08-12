import ContactsTable from "@/components/ContactsTable.tsx";
import {LuPlus} from "react-icons/lu";
import {Button} from "@/components/ui/button.tsx";
import {useNavigate} from "react-router-dom";
import SearchBar from "@/components/SearchBar.tsx";
import {useAppSelector} from "@/redux/hooks.ts";
import ButtonRefreshContacts from "@/components/buttons/ButtonRefreshContacts.tsx";

function ContactsRoute() {
    const isOnSearch = useAppSelector(state => state.isSearching)
    const navigate = useNavigate();

    const goToAddContactPage = () => {
        navigate("/contacts/add")
    }

    return (
        <div className="container w-1/2 py-10">
            <div className="mb-6">
                {isOnSearch.value ?
                    <ButtonRefreshContacts/>
                    : <SearchBar/>
                }
            </div>
            <ContactsTable />
            <Button className="fixed bottom-5 right-1/4" size="icon" onClick={goToAddContactPage}>
                <LuPlus/>
            </Button>
        </div>
    );
}

export default ContactsRoute;