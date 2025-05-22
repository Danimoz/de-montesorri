'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;

  if (!name || !email || !message) {
    return { error: 'Missing required fields' };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'School Website <onboarding@resend.dev>', // Replace with your "from" email address
      to: ['demontessorischool@gmail.com'], // Replace with your "to" email address
      subject: `New message from ${name}`,
      html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
    });

    if (error) {
      console.error({ error });
      return { error: 'Error sending email' };
    }

    return { success: true, data };
  } catch (error) {
    console.error(error);
    return { error: 'Error sending email' };
  }
}