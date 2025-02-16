import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { firstname, lastname, email, phone, service, message } = req.body;

    if (!email || !message) {
      return res.status(400).json({ error: "Email and message are required" });
    }

    try {
      const response = await axios.post('https://api.resend.com/emails', {
        from: email,
        to: 'isuru.rodrigo1243@gmail.com',
        subject: `New Contact Request from ${firstname} ${lastname}`,
        text: `Name: ${firstname} ${lastname}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\n\nMessage:\n${message}`,
      }, {
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        res.status(200).json({ message: 'Email sent successfully' });
      } else {
        res.status(response.status).json({ error: 'Error sending email' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error sending email' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}