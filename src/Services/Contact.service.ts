export const getAllContacts = () => {
    const options = {
        method: "GET",
        headers: {
            "Access-Control-Allow-Origin": "*",
        },
    };

    return fetch("http://localhost:8080/api/contacts", options)
        .then((response) => response.json())
}