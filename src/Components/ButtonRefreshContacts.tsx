import {getContacts} from "@/redux/actions/contact.action.ts";
import {useAppDispatch} from "@/redux/hooks.ts";
import {LuRotateCw} from "react-icons/lu";
import {Button} from "@/components/ui/button.tsx";
import {isNotSearching} from "@/redux/isSearchingReducer.ts";

function ButtonRefreshContacts() {
    const dispatch = useAppDispatch()

    function refreshContacts() {
        dispatch(getContacts())
        dispatch(isNotSearching())
    }

    return (
        <Button className="w-fit" onClick={() => refreshContacts()}>
            <LuRotateCw className="mr-2 h-5 w-5" />Reset
        </Button>
    );
}

export default ButtonRefreshContacts;