'use server';

import { client } from '@/lib/sanity';
import { sendContactEmail } from '@/lib/sendEmail';
import { revalidatePath } from 'next/cache'; // Optional

export async function sendContact(formData) {
  const { name, email, phoneNumber, subject, message } = formData;

  if (!name || name.trim().length < 3) throw new Error("Name must be at least 3 characters.");
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw new Error("Invalid email.");
  if (!subject || subject.trim().length < 3 || subject.trim().length > 100)
    throw new Error("Subject must be 3–100 characters.");
  if (!message || message.trim().length < 10 || message.trim().length > 1000)
    throw new Error("Message must be 20–1000 characters.");
  if (!phoneNumber || !/^\+?[0-9\s\-]{7,15}$/.test(phoneNumber))
    throw new Error("Invalid phone number.");

  try {
    await client.create({
      _type: 'contact',
      name: name.trim(),
      email: email.trim(),
      phoneNumber: phoneNumber.trim(),
      subject: subject.trim(),
      message: message.trim(),
      createdAt: new Date().toISOString(),
    });

    await sendContactEmail({ name, email, phoneNumber, subject, message });
    return { success: true };
  } catch (error) {
    console.error("Server Action Error:", error);
    return { success: false, message: "Internal server error." };
  }
}
