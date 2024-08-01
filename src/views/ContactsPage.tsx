import ContactsTable from "@/components/ContactsTable.tsx";
import {LuPlus} from "react-icons/lu";
import {Button} from "@/components/ui/button.tsx";
import {useNavigate} from "react-router-dom";

function ContactsPage() {
    const navigate = useNavigate();

    const goToAddContactPage = () => {
        navigate("/contacts/add")
    }

    return (
        <div className="container w-1/2 py-10">
            <ContactsTable/>
            <Button className="fixed bottom-5 right-1/4" size="icon" onClick={goToAddContactPage}>
                <LuPlus/>
            </Button>
        </div>
    );
}

export default ContactsPage;