import { transporter, mailOptions } from "@/libs/mailService";
import { Message } from "@/models/Message";
import mongoose from "mongoose";
import { NextResponse } from "next/server";


export async function POST(req) {

    try {
        const {fullName, senderEmail, comment} = await req.json();
        
        //  CONEXION A LA BASE DE DATOS MONGO 
        mongoose.connect(process.env.MONGO_URI);
        await Message.create({fullName, senderEmail, comment});

        await transporter.sendMail({
            ...mailOptions,
            to: senderEmail,
            subject: `Link-tree-app contact us `,
            html: `

            <h2> Hello ${fullName}!</h2>
            <p> Your message was good received: </p>
            <hr style="width:30%;text-align:left;margin-left:0" >
            <p> ${comment} </p>
            <hr style="width:30%;text-align:left;margin-left:0" >
            <p> Thank you for trust in us </p>
            `
        })
        return NextResponse.json({message:'Email sent correctly'}, {status: 200});
    } catch (error) {
        console.log(error);
        return NextResponse.json({message:'Fail to send'}, {status:500});
    }

    
  }