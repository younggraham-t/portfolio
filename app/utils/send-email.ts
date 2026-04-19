import {Schema} from "../ui/contact/contact";


export async function sendEmail(data: Schema): Promise<{success: boolean}> {
    const apiEndpoint = "/api/contact";
	const honeypot = data.website_url;
	
	if (honeypot != undefined && honeypot != "") {
		return {success: true}
	}

    await fetch(apiEndpoint, {
        method: 'POST',
        body: JSON.stringify(data),

    })
    .then((res) => res.json())
    .then((response) =>{
		
		if (response.message == "true")
		return {success: true};
    })
    .catch((err) =>{
		console.log(err)
		return {success: false};
    })
	
	return {success: true}
}
