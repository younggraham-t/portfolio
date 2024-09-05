"use client";
import {sendEmail} from "@/app/utils/send-email";
import { GradientBorder, GradientBorderHover } from "../gradient-border";
import { useForm } from "react-hook-form";

export type FormData = {
    name: string;
    email: string;
    message: string;
    
}

export default function Contact() {
    const { register, 
        handleSubmit,
        reset,
        formState: { errors },

        } = useForm<FormData>();

    function onSubmit(data : FormData) {
        sendEmail(data).then(res => {
            reset();
        });
        
        
    }
    return (
        <form className={`w-full`} onSubmit={handleSubmit(onSubmit)}>
            <div className={`mb-5`}>
                {/* <label htmlFor="name" className={`block`}>Name</label> */}
                <input type="text" placeholder="Name" className={`w-full bg-stone-700 p-1 rounded`} {...register('name')}/>
            </div>
            <div className={`mb-5`}>
                {/* <label htmlFor="email" className={`block`}>Email</label> */}
                <input type="email" id="email" placeholder="Email"  className={`w-full bg-stone-700 p-1 rounded`} {...register('email')}/>
            </div>
            <div className={`mb-5`}>
                {/* <label htmlFor="message" className={`block`}>Message</label> */}
                <textarea id="message" placeholder='Message' className={`h-24 w-full bg-stone-700 p-1 resize-none rounded`} {...register('message')}></textarea>
            </div>
            <div className={`w-full flex justify-end`}>
                <GradientBorderHover className={`w-16`}>
                    <button type="submit" className={`p-1`}>Submit</button>
                </GradientBorderHover>
            </div>
        </form>
    )
}
