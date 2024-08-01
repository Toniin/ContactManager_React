import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import {z} from "zod"
import {Button} from "@/components/ui/button"
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage,} from "@/components/ui/form"
import {Input} from "@/components/ui/input"
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "@/redux/hooks.ts";
import {addContact} from "@/redux/actions/contact.action.ts";
import {toast} from "sonner";
import {LuLoader2} from "react-icons/lu";

const formSchema = z.object({
    name: z.string().min(1, {message: "Please enter name"}),
    phoneNumber: z.coerce.number().min(1, {message: "Please enter phone number"}),
})

function AddContactForm() {
    const navigate = useNavigate();
    const dispatch = useAppDispatch()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            phoneNumber: 0,
        },
    })

    function onSubmit(newContact: z.infer<typeof formSchema>) {
        dispatch(addContact(newContact))

        toast.success("Contact added successfully", {
            description: `Contact with phone ${newContact.phoneNumber} is added`,
            action: {
                label: "X",
                onClick: () => null,
            },
        })

        navigate("/contacts")
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="name"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input placeholder="John Doe" {...field} autoFocus={true}/>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="phoneNumber"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Phone number</FormLabel>
                            <FormControl>
                                <Input type="number" placeholder="1234567890" {...field} />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <Button type="submit" className="" disabled={form.formState.isSubmitting}>
                    {form.formState.isSubmitting &&
                        <LuLoader2 className="animate-spin h-5 w-5 mr-3"/>
                    }
                    Add contact
                </Button>
            </form>
        </Form>
    )
}

export default AddContactForm;

//     {/*<p-button label="Add contact" [raised]= "true" aria - label = "Submit"(onClick) = "onSubmit()" [disabled] = "isSubmitting"*/}
//     {/*    [loading] = "isSubmitting" / >*/}
// </form>