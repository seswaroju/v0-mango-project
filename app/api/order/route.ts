// app/api/order/route.ts

import { NextResponse } from "next/server"

const AIRTABLE_TOKEN = process.env.AIRTABLE_TOKEN as string
const BASE_ID = process.env.AIRTABLE_BASE_ID as string
const TABLE_NAME = process.env.AIRTABLE_TABLE_NAME as string

export async function POST(req: Request) {
  try {
    const body = await req.json()
    console.log("Received order data:", body)

    const response = await fetch(`https://api.airtable.com/v0/${BASE_ID}/${encodeURIComponent(TABLE_NAME)}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${AIRTABLE_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fields: {
          "Order Date": new Date().toISOString(),
          "Customer Name": body.name,
          "Customer Contact": body.phone,
          "Shipping Address": body.address,
          "Items Ordered": body.mangoType,
          "Quantity": body.quantity,
          "Order Status": "Pending",
          "Payment Status": "Unconfirmed",
          "Total Amount": calculateAmount(body.mangoType, body.quantity),
        },
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      console.error("❌ Airtable error:", data)
      return NextResponse.json({ success: false, error: data }, { status: 500 })
    }

    console.log("✅ Order saved to Airtable:", data)
    return NextResponse.json({ success: true, id: data.id })
  } catch (error) {
    console.error("❌ Internal server error:", error)
    return NextResponse.json({ success: false, error }, { status: 500 })
  }
}

function calculateAmount(type: string, quantity: number): number {
  const rates: Record<string, number> = {
    himayath: 270,
    banginapalli: 170,
    rasalu: 180,
    assorted: 200,
  }
  return (rates[type.toLowerCase()] || 200) * quantity
}
