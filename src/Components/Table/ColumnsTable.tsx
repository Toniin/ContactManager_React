import {ColumnDef} from "@tanstack/react-table"
import {Contact} from "@/Models/contact.model.ts";
import ButtonDeleteContact from "@/Components/ButtonDeleteContact.tsx";

export const columns: ColumnDef<Contact>[] = [
    {
        id: "phoneNumber",
        accessorKey: "phoneNumber",
        header: "Phone Number",
    },
    {
        id: "name",
        accessorKey: "name",
        header: "Name",
    },
    {
        id: "actions",
        header: () => <div className="text-right">Actions</div>,
        cell: ({row}) => {
            const phoneNumber: number = row.getValue("phoneNumber")

            return <ButtonDeleteContact phoneNumber={phoneNumber}/>
        }
    }
]
