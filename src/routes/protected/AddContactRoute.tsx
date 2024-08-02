import AddContactForm from "@/components/AddContactForm.tsx";
import {LuArrowLeft} from "react-icons/lu";
import {Button} from "@/components/ui/button.tsx";
import {useNavigate} from "react-router-dom";

function AddContactRoute() {
    const navigate = useNavigate();

    const goToBack = () => {
        navigate(-1)
    }

    return (
        <div className="container w-1/2 py-10">
            <Button onClick={goToBack}>
                <LuArrowLeft className="mr-2 h-4 w-4"/> Return
            </Button>
            <div className="flex flex-col items-center">
                <h2 className="pt-5 pb-10 text-4xl">Add new conact</h2>
                <AddContactForm/>
            </div>
        </div>
    );
}

export default AddContactRoute;