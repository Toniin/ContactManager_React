import DataTable from "@/components/table/ContactsTable.tsx"
import {columns} from "@/components/table/ColumnsTable.tsx";
import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from '@/redux/hooks.ts'
import {getContacts} from "@/redux/actions/contact.action.ts";

function ContactsTable() {
    const contacts = useAppSelector(state => state.contacts)
    const dispatch = useAppDispatch()

    useEffect(() => {
            dispatch(getContacts())
    }, [dispatch]);

    return (
        <>
            {contacts ?
                <DataTable columns={columns} data={contacts}/>
                : null}
        </>
    );
}

export default ContactsTable;