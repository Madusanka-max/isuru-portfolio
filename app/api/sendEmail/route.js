import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(req) {
  try {
    const { firstname, lastname, email, phone, service, message } = await req.json();

    if (!email || !message) {
      return NextResponse.json({ error: 'Email and message are required' }, { status: 400 });
    }

    const response = await axios.post(
      'https://api.resend.com/v1/emails',
      {
        from: 'no-reply@yourdomain.com', // Must be a verified sender in Resend
        to: 'isuru.rodrigo1243@gmail.com',
        subject: `New Contact Request from ${firstname} ${lastname}`,
        text: `Name: ${firstname} ${lastname}
Email: ${email}
Phone: ${phone}
Service: ${service}

Message:
${message}`,
      },
      {
        headers: {
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
            'Content-Type': 'application/json',
        },
      }
    );

    if (response.status === 200) {
      return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    } else {
      return NextResponse.json({ error: 'Error sending email' }, { status: response.status });
    }
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json({ error: 'Error sending email', details: error.response?.data }, { status: 500 });
  }
}