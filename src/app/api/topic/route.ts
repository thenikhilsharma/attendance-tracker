import dbConnect from "@/lib/dbConnect";
import Topic from "@/model/topic";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { title, description } = await request.json();
  await dbConnect();
  await Topic.create({ title, description });
  return NextResponse.json({ message: "Topic Created" }, { status: 201 });
}

export async function GET() {
  await dbConnect();
  const topics = await Topic.find();
  return NextResponse.json({ topics });
}