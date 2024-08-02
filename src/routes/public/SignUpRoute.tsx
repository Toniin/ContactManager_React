import SignUpForm from "@/components/SignUpForm.tsx";
import {Button} from "@/components/ui/button.tsx";

function SignUpRoute() {
    return (
        <div className="container flex flex-col items-center py-10">
            <div className="flex flex-col">
                <h2 className="pb-10 text-4xl">Sign up</h2>
                <SignUpForm/>
            </div>
            <div className="flex items-center pt-8">
                <p>Already have an account ?</p>
                <Button variant="link" className="text-blue-500">
                    Login
                </Button>
            </div>
        </div>
    );
}

export default SignUpRoute;