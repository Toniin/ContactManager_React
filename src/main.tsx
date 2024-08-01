import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
    createBrowserRouter, redirect,
    RouterProvider,
} from "react-router-dom";
import ContactsPage from "@/views/ContactsPage.tsx";
import AddContactPage from "@/views/AddContactPage.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                index: true,
                loader: async () => redirect('/contacts'),
            },
            {
                path: "/contacts",
                element: <ContactsPage />,
            },
            {
                path: "/contacts/add",
                element: <AddContactPage />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
