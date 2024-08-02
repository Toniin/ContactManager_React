import {LuLoader2, LuSearch} from "react-icons/lu";
import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import {z} from "zod"
import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label.tsx";
import {getContact} from "@/redux/actions/contact.action.ts";
import {useAppDispatch} from "@/redux/hooks.ts";
import {useState} from "react";
import {isSearching} from "@/redux/isSearchingReducer.ts";

const formSchema = z.object({
    phoneNumber: z.coerce.number().min(1),
})

function SearchBar() {
    const dispatch = useAppDispatch()
    const [error, setError] = useState({
        isError: false,
        message: ""
    });

    const {
        register,
        handleSubmit,
        reset,
        formState: {isSubmitting, isValid},
    } = useForm<z.infer<typeof formSchema>>(
        {
            resolver: zodResolver(formSchema),
        }
    )

    function onSubmit(formData: z.infer<typeof formSchema>) {
        // Promise of 1s to show the loading button when form is submitting
        return new Promise((resolve) => {
            return setTimeout(() => {
                resolve(true)
            }, 1000)
        })
            .then(() => {
                dispatch(getContact(formData.phoneNumber))
                    .then(() => {
                        reset()
                        dispatch(isSearching())
                        setError({
                            isError: false,
                            message: ""
                        })
                    })
                    .catch(() => {
                        setError({
                            isError: true,
                            message: "Contact not found",
                        })
                    })
            })
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full gap-3">
            <Label className="text-xl" htmlFor="phoneNumber">Search contact</Label>
            <div className="flex items-center">
                <Input className="rounded-tr-none rounded-br-none max-w-sm" id="phoneNumber" type="number"
                       placeholder="Phone number" {...register("phoneNumber")}/>
                <Button className="rounded-tl-n one rounded-bl-none" type="submit" size="icon" disabled={!isValid}>
                    {isSubmitting ?
                        <LuLoader2 className="animate-spin h-5 w-5"/> :
                        <LuSearch className="h-5 w-5"/>
                    }
                </Button>
                {error.isError && <p className="text-xl text-red-500 ml-3">{error.message}</p>}
            </div>
        </form>

    );
}

export default SearchBar;