import connectToDB from '@/lib/MongoDb';
import Book from '@/models/booking';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  await connectToDB();
  const { name, email, phone, time } = await request.json();

  try {
    const createBooking = await Book.create({
      name,
      email,
      phone,
      time,
    });
    return NextResponse.json(
      { message: 'Created', createBooking },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
  }
}

export async function GET() {
  await connectToDB();
  const res = await Book.find();
  return NextResponse.json(res);
}
