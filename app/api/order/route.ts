import { NextResponse } from "next/server";

// ✅ Environment variables
const AIRTABLE_TOKEN = process.env.AIRTABLE_TOKEN;
const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID;
const AIRTABLE_TABLE_NAME = process.env.AIRTABLE_TABLE_NAME || "Orders";

export async function POST(req: Request) {
  try {
    // ✅ Validate ENV vars
    if (!AIRTABLE_TOKEN || !AIRTABLE_BASE_ID || !AIRTABLE_TABLE_NAME) {
      console.error("❌ Missing Airtable configuration");
      return NextResponse.json(
        { success: false, error: "Server configuration error" },
        { status: 500 }
      );
    }

    // ✅ Parse request body
    const body = await req.json();
    console.log("📝 Received order data:", body);

    if (!body.name || !body.phone || !body.address || !body.mangoType || !body.quantity) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    // ✅ Map to Airtable field names exactly as per your table
    const orderData = {
      fields: {
        "Order Date": new Date().toISOString().split("T")[0],
        "Customer Name": body.name,
        "Customer Contact": body.phone,
        "Shipping Address": body.address,
        "Items Ordered": body.mangoType,
        "Quantity": parseInt(body.quantity),
        "Order Status": "Pending",
        "Payment Status": "Unconfirmed",
        "Total Amount": calculateAmount(body.mangoType, body.quantity)
      }
    };

    // ✅ Airtable API call
    const airtableUrl = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(AIRTABLE_TABLE_NAME)}`;
    const response = await fetch(airtableUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${AIRTABLE_TOKEN}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(orderData)
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("❌ Airtable API error:", data);
      return NextResponse.json(
        { success: false, error: "Failed to save order.", details: data },
        { status: 500 }
      );
    }

    console.log("✅ Order saved to Airtable:", data);
    return NextResponse.json({ success: true, id: data.id });
  } catch (error) {
    console.error("❌ Server error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error." },
      { status: 500 }
    );
  }
}

// ✅ Amount calculation based on variety
function calculateAmount(type: string, quantity: number): number {
  const rates: Record<string, number> = {
    himayath: 270,
    banginapalli: 170,
    rasalu: 180,
    assorted: 200
  };

  const normalizedType = type.toLowerCase().trim();
  const rate = rates[normalizedType] || 200;
  return rate * quantity;
}
