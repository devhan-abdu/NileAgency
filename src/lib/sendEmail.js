import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail({ name, email, phoneNumber, subject, message }) {
  try {
    await resend.emails.send({
      from: 'NileAgency <noreply@youragency.com>',
      to: ['hanabduman@gmail.com'], 
      subject: `New Contact: ${subject}`,
      html: `
        <h2>New Contact Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phoneNumber}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong><br/> ${message}</p>
      `
    });
    return true;
  } catch (error) {
    console.error('Email sending failed:', error);
    return false;
  }
}
