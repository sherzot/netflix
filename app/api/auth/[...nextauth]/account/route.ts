
import { connectDatabase } from "@/lib/mongoose";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";


export async function POST(req: Request){
    try{
        await connectDatabase();

        return NextResponse.json({message:"Hello World"})
    }
    catch(e){
        return NextResponse.json({succes: false, message: "Something went wrong"})
    }
}