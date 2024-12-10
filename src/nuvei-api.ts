const { merchantId, merchantSiteId, merchantSecretKey } = JSON.parse(import.meta.env.VITE_NUVEI_CONFIG);

function dateToTimestamp(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); 
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  return `${year}${month}${day}${hours}${minutes}${seconds}`;
}

async function generateSignature(payload: { merchantId: string, merchantSiteId: string, clientRequestId: string, amount: string, currency: string, timeStamp: string }) {
  const data = `${payload.merchantId}${payload.merchantSiteId}${payload.clientRequestId}${payload.amount}${payload.currency}${payload.timeStamp}${merchantSecretKey}`;

  const encoder = new TextEncoder();
  const dataBuffer = encoder.encode(data);

  const hashBuffer = await crypto.subtle.digest('SHA-256', dataBuffer);

  return Array.from(new Uint8Array(hashBuffer))
    .map(byte => byte.toString(16).padStart(2, '0'))
    .join('');
}

/*
async function getPaymentStatus(sessionToken: string): Promise<string> {
  const payload = {
    sessionToken
  };

  try {
    const response = await fetch('https://ppp-test.nuvei.com/ppp/api/v1/getPaymentStatus.do', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload), 
    });

    return response.json();
  } catch (error) {
    console.error(error);
    throw new Error("Error initializing session");
  }
}
*/

export async function initializeSession(amount: string) {
  const payload = {
    merchantId,
    merchantSiteId,
    amount,
    currency: 'USD',
    timeStamp: dateToTimestamp(new Date()),
    clientRequestId: 'nicola@fyclabs.com',
    billingAddress: {
      country: "US",
      email: 'nicola@fyclabs.com',
      firstName: 'nicola',
      lastName: 'luongo',
    },
    checksum: '',
  };

  payload.checksum = await generateSignature(payload);

  try {
    const response = await fetch('https://ppp-test.nuvei.com/ppp/api/v1/openOrder.do', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    const { sessionToken } = await response.json(); 
    return sessionToken;
  } catch (error) {
    console.error(error);
    throw new Error("Error initializing session");
  }
}
