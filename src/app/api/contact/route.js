import { NextResponse } from 'next/server';
import { client } from '@/lib/sanity';
import { sendContactEmail } from '@/lib/sendEmail';

export async function POST(req) {
  const body = await req.json();

  const name = body.name?.trim();
  const email = body.email?.trim();
  const phoneNumber = body.phoneNumber?.trim();
  const subject = body.subject?.trim();
  const message = body.message?.trim();

  if (!name) {
    return NextResponse.json({ error: 'Name is required.' }, { status: 400 });
  }
  if (name.length < 3) {
    return NextResponse.json({ error: 'Name must be at least 3 characters long.' }, { status: 400 });
  }

  if (!email) {
    return NextResponse.json({ error: 'Email is required.' }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
  }

  if (!subject) {
    return NextResponse.json({ error: 'Subject is required.' }, { status: 400 });
  }
  if (subject.length < 5 || subject.length > 100) {
    return NextResponse.json({ error: 'Subject must be between 5 and 100 characters.' }, { status: 400 });
  }

  if (!message) {
    return NextResponse.json({ error: 'Message is required.' }, { status: 400 });
  }
  if (message.length < 20 || message.length > 1000) {
    return NextResponse.json({ error: 'Message must be between 20 and 1000 characters.' }, { status: 400 });
  }

  if (!phoneNumber) {
    return NextResponse.json({ error: 'Phone number is required.' }, { status: 400 });
  }
  if (!/^\+?[0-9\s\-]{7,15}$/.test(phoneNumber)) {
    return NextResponse.json({ error: 'Invalid phone number.' }, { status: 400 });
  }

  try {
    await client.create({
      _type: 'contact',
      name,
      email,
      phoneNumber,
      subject,
      message,
      createdAt: new Date().toISOString(),
    });
    await sendContactEmail({ name, email, phoneNumber, subject, message });
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error saving contact:', error);
    return NextResponse.json({ error: 'Failed to save contact.' }, { status: 500 });
  }
}
