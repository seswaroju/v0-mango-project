import Airtable from 'airtable';

const base = new Airtable({
  apiKey: process.env.AIRTABLE_TOKEN,
}).base('your_base_id'); // Replace this with actual Base ID

export const addOrder = async (data: {
  name: string;
  phone: string;
  address: string;
  mangoType: string;
  quantity: number;
  paymentStatus?: boolean;
}) => {
  return base('Orders').create([
    {
      fields: {
        Name: data.name,
        Phone: data.phone,
        Address: data.address,
        'Mango Type': data.mangoType,
        Quantity: data.quantity,
        'Payment Status': data.paymentStatus || false,
      },
    },
  ]);
};