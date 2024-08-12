import {ColumnDef} from "@tanstack/react-table"
import {Contact} from "@/models/contact.model.ts";
import ButtonDeleteContact from "@/components/buttons/ButtonDeleteContact.tsx";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar.tsx";
import ButtonUpdateContact from "@/components/buttons/ButtonUpdateContact.tsx";

export const columns: ColumnDef<Contact>[] = [
    {
        id: "contactIcon",
        cell: ({row}) => {
            const sliceNameUppercase: string = row.getValue<string>("name").slice(0, 2).toUpperCase()
            const imageURL = `https://api.dicebear.com/9.x/personas/svg?seed=${row.getValue<number>("phoneNumber")}`
            return (
                <Avatar className="w-16 h-16">
                    <AvatarImage src={imageURL} alt="icon of contact"/>
                    <AvatarFallback>{sliceNameUppercase}</AvatarFallback>
                </Avatar>
            )
        }
    },
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
        cell: ({row}) => {
            const phoneNumber: number = row.getValue<number>("phoneNumber")

            return (
                <div className="flex justify-end gap-3">
                    <ButtonUpdateContact phoneNumber={phoneNumber}/>
                    <ButtonDeleteContact phoneNumber={phoneNumber}/>
                </div>)

        }
    }
]
