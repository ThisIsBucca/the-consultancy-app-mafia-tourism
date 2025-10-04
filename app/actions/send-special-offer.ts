'use client';

import emailjs from 'emailjs-com';

/** ✅ Define a clear TypeScript type for the form */
interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  interest?: string;
  numberOfPeople?: number;
  preferredDates?: string;
  budget?: string;
  additionalRequests?: string;
}

/** ✅ Validate environment variables once, outside the handler */
const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
  console.warn(
    '⚠️ Missing EmailJS environment variables. Emails cannot be sent until they are set.'
  );
}

/** ✅ Improved async handler */
export const sendSpecialOfferEmail = async (formData: ContactFormData) => {
  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    throw new Error('EmailJS configuration is incomplete.');
  }

  // Optional: basic client-side validation
  if (!formData.name || !formData.email) {
    console.error('❌ Name and email are required.');
    return;
  }

  try {
    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || 'N/A',
        interest: formData.interest || 'N/A',
        number_of_people: formData.numberOfPeople ?? 'N/A',
        preferred_dates: formData.preferredDates || 'N/A',
        budget: formData.budget || 'N/A',
        additional_requests: formData.additionalRequests || 'N/A',
      },
      PUBLIC_KEY
    );

    console.info('✅ Email sent successfully:', response.text || response.status);
    return { success: true, response };
  } catch (err) {
    console.error('❌ Failed to send email:', err);
    return { success: false, error: err };
  }
};
