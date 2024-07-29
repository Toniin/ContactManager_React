import { ColumnDef } from "@tanstack/react-table"
import {Contact} from "../../Models/Contact.model.ts";

export const columns: ColumnDef<Contact>[] = [
    {
        accessorKey: "phoneNumber",
        header: "Phone Number",
    },
    {
        accessorKey: "name",
        header: "Name",
    },
]
