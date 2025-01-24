const MAILCHIMP_URL = "YOUR_MAILCHIMP_SERVER_PREFIX.api.mailchimp.com/3.0/lists/YOUR_LIST_ID/members";
const MAILCHIMP_API_KEY = "YOUR_API_KEY";

export interface SubscriptionData {
  name: string;
  email: string;
  country: string;
}

export const submitToMailchimp = async (data: SubscriptionData): Promise<Response> => {
  if (!MAILCHIMP_URL || MAILCHIMP_URL.includes("YOUR_LIST_ID")) {
    throw new Error("Mailchimp não está configurado corretamente");
  }

  const response = await fetch(MAILCHIMP_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `apikey ${MAILCHIMP_API_KEY}`,
    },
    body: JSON.stringify({
      email_address: data.email,
      status: "subscribed",
      merge_fields: {
        FNAME: data.name,
        COUNTRY: data.country
      }
    }),
  });

  if (!response.ok) {
    throw new Error('Falha ao enviar para Mailchimp');
  }

  return response;
};