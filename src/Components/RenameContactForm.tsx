import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import {z} from "zod"
import {Button} from "@/components/ui/button"
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage,} from "@/components/ui/form"
import {Input} from "@/components/ui/input"
import {useAppDispatch} from "@/redux/hooks.ts";
import {renameContact} from "@/redux/actions/contact.action.ts";
import {LuLoader2} from "react-icons/lu";
import {toast} from "sonner";
import {isNotEditing} from "@/redux/isEditingReducer.ts";

const formSchema = z.object({
    name: z.string().min(1, {message: "Please enter name"}),
})

function RenameContactForm({contact}: { contact: { name: string, phoneNumber: number } }) {
    const dispatch = useAppDispatch()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: contact.name,
        },
    })

    function onSubmit(formData: z.infer<typeof formSchema>) {
        const renamedContact = {
            name: formData.name,
            phoneNumber: contact.phoneNumber,
        }

        if (formData.name !== contact.name) {
            toast.success("Contact renamed successfully", {
                description: `Contact with phone ${contact.phoneNumber} is renamed`,
                action: {
                    label: "X",
                    onClick: () => null,
                },
            })

            dispatch(renameContact(renamedContact))
            dispatch(isNotEditing())
        }

        dispatch(isNotEditing())
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex items-center gap-3">
                <FormField
                    control={form.control}
                    name="name"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel hidden={true}>Name</FormLabel>
                            <FormControl>
                                <Input placeholder="John Doe" {...field} autoFocus={true}/>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <Button type="submit" className="" disabled={form.formState.isSubmitting}>
                    {form.formState.isSubmitting &&
                        <LuLoader2 className="animate-spin h-5 w-5 mr-3"/>
                    }
                    Save
                </Button>
            </form>
        </Form>
    )
}

export default RenameContactForm;