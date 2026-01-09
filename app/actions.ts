'use server';

export async function submitInquiry(_prevState: any, formData: FormData) {
  // Extract data
  const data = {
    name: formData.get('name') as string,
    email: formData.get('email') as string,
    phone: formData.get('phone') as string,
    service: formData.get('service') as string,
    budget: formData.get('budget') as string,
    message: formData.get('message') as string,
  };

  // Simulate delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Simulate sending email (Log to console)
  console.log('--- EMAIL SIMULATION ---');
  console.log('To: simon@caspite.com');
  console.log('Subject: New Website Inquiry');
  console.log('From:', data.email);
  console.log('Body:');
  console.log(JSON.stringify(data, null, 2));
  console.log('------------------------');

  // Return success state
  return {
    success: true,
    message: 'Inquiry sent successfully!'
  };
}
