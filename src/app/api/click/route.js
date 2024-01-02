import { Event } from "@/models/Event";
import mongoose from "mongoose";


export async function POST(req) {

    mongoose.connect(process.env.MONGO_URI);
    // traigo de la request la ingo de la url que toco el usuario 
    const url = new URL(req.url);
    const clickedLink = atob(url.searchParams.get('url'));
    // necestiamos encodear la page tambien. 
    const page = url.searchParams.get('page');
    await Event.create({type:'click', uri: clickedLink, page});
    return Response.json(true);
  }
