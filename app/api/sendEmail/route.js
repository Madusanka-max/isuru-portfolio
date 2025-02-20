import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { firstname, lastname, email, phone, service, message } = await req.json();

    if (!email || !message) {
      return NextResponse.json({ error: 'Email and message are required' }, { status: 400 });
    }

    console.log('Sending email with the following details:', {
      firstname,
      lastname,
      email,
      phone,
      service,
      message,
    });

    const response = await resend.emails.send({
      from: 'isuru.rodrigo1243@isurumadusanka.live',
      to: 'isuru.rodrigo1243@gmail.com',
      subject: `New Contact Request from ${firstname} ${lastname}`,
      text: `Name: ${firstname} ${lastname}
Email: ${email}
Phone: ${phone}
Service: ${service}

Message:
${message}`,
    });

    if (response.error) {
      console.error('Error response from Resend API:', response.error);
      return NextResponse.json({ error: response.error }, { status: 500 });
    }

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json({ error: 'Error sending email', details: error.message }, { status: 500 });
  }
}