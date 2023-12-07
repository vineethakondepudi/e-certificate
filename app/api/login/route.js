import connectMongoDB from "@/libs/mongodb";
import Login from "@/model/login"
import { NextResponse } from "next/server";

export async function POST(request) {
  const { email, password } = await request.json();
  await connectMongoDB();
  await Login.create({ email, password });
  return NextResponse.json({ message: "Topic Created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const login = await Login.find();
  return NextResponse.json({ login });
}

