import DataTable from "./Table/ContactsTable.tsx"
import {columns} from "./Table/ColumnsTable.tsx";
import {useEffect, useState} from "react";
import {getAllContacts} from "../Services/Contact.service.ts";

function Contacts() {
    const [contacts, setContacts] = useState(null);

    useEffect(() => {
        getAllContacts()
            .then((data) => {
                setContacts(data);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <div className="container py-10">
            {contacts ?
                <DataTable columns={columns} data={contacts}/>
                : null}
        </div>
    );
}

export default Contacts;