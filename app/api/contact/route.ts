import {NextRequest, NextResponse} from "next/server";
import nodemailer from 'nodemailer';
import Mail from "nodemailer/lib/mailer";



export async function POST(req: NextRequest) {
    const {name, email, message} = await req.json();

    const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.NEXT_PUBLIC_EMAIL,
            pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD,
        }
    })

    const mailOptions: Mail.Options = {
        from: process.env.MY_EMAIL,
        to: process.env.MY_EMAIL,
        subject: `Message from ${name} (${email})`,
        text: message,

    };

    const sendMailPromise = () =>
        new Promise<string>((resolve, reject) => {
        transport.sendMail(mailOptions, function(err) {
            if(!err) {
                resolve("Email sent");
            }
            else {
                reject(err.message);
            }
        });
    });

    try {
        await sendMailPromise();
        return NextResponse.json({message: "Email sent"});

    } catch (err) {
        return NextResponse.json({error: err}, {status: 500})
    }
    
} 
