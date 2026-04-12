"use client";
import { sendEmail } from "@/app/utils/send-email";
import { GradientBorder, GradientBorderHover } from "../gradient-border";
import { useForm } from "react-hook-form";
import { useState } from "react";

export type FormData = {
	name: string;
	email: string;
	message: string;
	website_url: string | undefined;

}

export default function Contact() {
	const { register,
		handleSubmit,
		reset,
		formState: { errors },

	} = useForm<FormData>();

	const [formSuccess, setFormSuccess] = useState(false);
	const [formFail, setFormFail] = useState(false);

	function onSubmit(data: FormData) {
		sendEmail(data).then(res => {
			reset();
			if (res?.success == true) {
				setFormSuccess(true);
			}
			else {
				setFormFail(true);
			}


		});


	}
	return (
		<div className={`w-full`} >
		{formSuccess && <p className="text-green-400 text-center"> Email Sent Successfully </p>}
		{formFail && <p className="text-red-600 text-center"> Something went wrong. Please try again later. </p>}
		{!formSuccess && 	<form className={`w-full p-2 flex flex-col gap-2`} onSubmit={handleSubmit(onSubmit)}>
				<input
					type="text"
					style={{ display: 'none' }}
					tabIndex={-1}
					autoComplete="off"
					{...register('website_url')} />
				<div className={`w-3/4 m-auto`}>
					<div className={`mb-5`}>
						{/* <label htmlFor="name" className={`block`}>Name</label> */}
						<input type="text" placeholder="Name" className={`w-full bg-secondary/75 p-1 rounded`} {...register('name')} />
					</div>
					<div className={`mb-5`}>
						{/* <label htmlFor="email" className={`block`}>Email</label> */}
						<input type="email" id="email" placeholder="Email" className={`w-full bg-secondary/75 p-1 rounded`} {...register('email')} />
					</div>
					<div className={`mb-5`}>
						{/* <label htmlFor="message" className={`block`}>Message</label> */}
						<textarea id="message" placeholder='Message' className={`h-24 w-full bg-secondary/75 p-1 resize-none rounded`} {...register('message')}></textarea>
					</div>
				</div>
				<div className={`w-3/4 m-auto`}>
					<button type="submit" className={`p-1 m-auto w-1/4  rounded bg-secondary hover:text-accent`}>Submit</button>
				</div>
			</form>
		}
		</div>
	)
}
