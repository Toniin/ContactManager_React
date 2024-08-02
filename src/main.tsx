import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
    createBrowserRouter, redirect,
    RouterProvider,
} from "react-router-dom";
import App from "@/App.tsx";
import ContactsRoute from "@/routes/protected/ContactsRoute.tsx";
import AddContactRoute from "@/routes/protected/AddContactRoute.tsx";
import SignUpRoute from "@/routes/public/SignUpRoute.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                loader: async () => redirect('/contacts'),
            },
            {
                path: "/sign-up",
                element: <SignUpRoute />,
            },
            {
                path: "/contacts",
                element: <ContactsRoute />,
            },
            {
                path: "/contacts/add",
                element: <AddContactRoute />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
