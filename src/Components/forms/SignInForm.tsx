import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import {Button} from "@/components/ui/button.tsx"
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage,} from "@/components/ui/form.tsx"
import {Input} from "@/components/ui/input.tsx"
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "@/redux/hooks.ts";
import {LuLoader2} from "react-icons/lu";
import {SignInFormUser, signInSchema} from "@/models/user.model.ts";
import {useState} from "react";
import {signIn} from "@/redux/actions/user.action.ts";

function SignInForm() {
    const [errorSubmit, setErrorSubmit] = useState({
        isError: false,
        message: ""
    });
    const navigate = useNavigate();
    const dispatch = useAppDispatch()

    const form = useForm<SignInFormUser>({
        resolver: zodResolver(signInSchema),
        defaultValues: {
            username: "",
            password: "",
        },
    })

    const {isSubmitting} = form.formState

    const onSubmit = async (newUser: SignInFormUser) => {

        // Promise of 1s to show the loading button when form is submitting
        await new Promise((resolve) => {
            return setTimeout(() => {
                resolve(true)
            }, 1000)
        })

        dispatch(signIn(newUser))
            .then((data) => {
                    const token = data.payload.token
                    localStorage.setItem("Token", token);

                    setErrorSubmit({
                        isError: false,
                        message: ""
                    })
                    navigate("/contacts")
                }
            ).catch(error => {
            setErrorSubmit({
                isError: true,
                message: error.message
            })
        })
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="username"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                                <Input placeholder="John Doe" {...field} autoFocus={true}/>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input type="password" placeholder="****" {...field} />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />

                {errorSubmit && <p className="text-red-500">{errorSubmit.message}</p>}

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting &&
                        <LuLoader2 className="animate-spin h-5 w-5 mr-3"/>
                    }
                    Sign in
                </Button>
            </form>
        </Form>
    )
}

export default SignInForm;