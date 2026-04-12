import {FormData} from "../ui/contact/contact";


export async function sendEmail(data: FormData) {
    const apiEndpoint = "/api/contact";
	const honeypot = data.website_url;
	if (honeypot != undefined) {
		return {success: true}
	}

    fetch(apiEndpoint, {
        method: 'POST',
        body: JSON.stringify(data),

    })
    .then((res) => res.json())
    .then((response) =>{
		
		if (response == "Email sent")
		return {success: true};
    })
    .catch((err) =>{
		return {success: false};
    })
}
