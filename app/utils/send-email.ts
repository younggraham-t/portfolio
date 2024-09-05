import {FormData} from "../ui/contact/contact";


export async function sendEmail(data: FormData) {
    const apiEndpoint = "/api/contact";

    fetch(apiEndpoint, {
        method: 'POST',
        body: JSON.stringify(data),

    })
    .then((res) => res.json())
    .then((response) =>{
        alert(response.message);
    })
    .catch((err) =>{
        alert(err);
    })
}
