import {Button} from '@/Components/ui/button'
import { LuTrash2 } from "react-icons/lu";
import {deleteContact} from "@/redux/actions/contact.action.ts";
import {useAppDispatch} from "@/redux/hooks.ts";

function ButtonDeleteContact({phoneNumber}:{phoneNumber: number}) {
    const dispatch = useAppDispatch()

    const onDeleteContact = () => {
        dispatch(deleteContact(phoneNumber))
    }

    return (
        <Button className="absolute top-1.5 right-2" variant="outline" size="icon" onClick={onDeleteContact}>
            <LuTrash2 className="stroke-red-500" />
        </Button>
    );
}

export default ButtonDeleteContact;