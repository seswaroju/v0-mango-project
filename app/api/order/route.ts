import { NextResponse } from "next/server"

// Environment variables with validation
const AIRTABLE_TOKEN = process.env.AIRTABLE_TOKEN
const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID
const AIRTABLE_TABLE_NAME = process.env.AIRTABLE_TABLE_NAME || "Orders"

export async function POST(req: Request) {
  try {
    // Validate environment variables
    if (!AIRTABLE_TOKEN || !AIRTABLE_BASE_ID) {
      console.error("❌ Missing Airtable configuration")
      return NextResponse.json(
        {
          success: false,
          error: "Server configuration error",
        },
        { status: 500 },
      )
    }

    const body = await req.json()
    console.log("📝 Received order data:", body)

    // Validate required fields
    if (!body.name || !body.phone || !body.address || !body.mangoType || !body.quantity) {
      return NextResponse.json(
        {
          success: false,
          error: "Missing required fields",
        },
        { status: 400 },
      )
    }

    // Prepare the data for Airtable
    const orderData = {
      fields: {
        Name: body.name,
        Phone: body.phone,
        Address: body.address,
        "Mango Type": body.mangoType,
        Quantity: Number.parseInt(body.quantity),
        "Order Date": new Date().toISOString().split("T")[0], // YYYY-MM-DD format
        Status: "Pending",
        "Total Amount": calculateAmount(body.mangoType, body.quantity),
      },
    }

    console.log("📤 Sending to Airtable:", orderData)

    const airtableUrl = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(AIRTABLE_TABLE_NAME)}`
    console.log("🔗 Airtable URL:", airtableUrl)

    const response = await fetch(airtableUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${AIRTABLE_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    })

    const data = await response.json()

    if (!response.ok) {
      console.error("❌ Airtable API error:", {
        status: response.status,
        statusText: response.statusText,
        data: data,
      })

      // Return a user-friendly error message
      return NextResponse.json(
        {
          success: false,
          error: "Failed to save order. Please try again or contact support.",
          details: data,
        },
        { status: 500 },
      )
    }

    console.log("✅ Order saved successfully:", data)
    return NextResponse.json({
      success: true,
      id: data.id,
      message: "Order placed successfully!",
    })
  } catch (error) {
    console.error("❌ Server error:", error)
    return NextResponse.json(
      {
        success: false,
        error: "Internal server error. Please try again.",
      },
      { status: 500 },
    )
  }
}

function calculateAmount(type: string, quantity: number): number {
  const rates: Record<string, number> = {
    himayath: 270,
    banginapalli: 170,
    rasalu: 180,
    assorted: 200,
  }

  const normalizedType = type.toLowerCase().trim()
  const rate = rates[normalizedType] || 200
  const amount = rate * quantity

  console.log(`💰 Calculating: ${type} (${normalizedType}) x ${quantity} = ₹${amount}`)
  return amount
}
