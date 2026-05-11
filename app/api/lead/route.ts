import { NextRequest, NextResponse } from "next/server"

interface LeadData {
  salonName: string
  ownerName: string
  phone: string
  email: string
  city: string
  businessType: string
  numberOfStaff: string
  numberOfServices: string
  currentBookingSystem: string
  useOnlineBooking: string
  needOnlinePayments: boolean
  needFinancialReports: boolean
  preferredContact: string
  additionalComments: string
}

export async function POST(request: NextRequest) {
  try {
    const data: LeadData = await request.json()

    // Validate required fields
    const requiredFields: (keyof LeadData)[] = [
      "salonName",
      "ownerName",
      "phone",
      "email",
      "city",
      "businessType",
      "numberOfStaff",
      "numberOfServices",
      "preferredContact",
    ]

    for (const field of requiredFields) {
      if (!data[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        )
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      )
    }

    // Log the lead data (in production, this would be saved to a database)
    console.log("=== New Lead Submission ===")
    console.log("Timestamp:", new Date().toISOString())
    console.log("Salon Name:", data.salonName)
    console.log("Owner Name:", data.ownerName)
    console.log("Phone:", data.phone)
    console.log("Email:", data.email)
    console.log("City:", data.city)
    console.log("Business Type:", data.businessType)
    console.log("Number of Staff:", data.numberOfStaff)
    console.log("Number of Services:", data.numberOfServices)
    console.log("Current Booking System:", data.currentBookingSystem || "Not specified")
    console.log("Uses Online Booking:", data.useOnlineBooking || "Not specified")
    console.log("Needs Online Payments:", data.needOnlinePayments)
    console.log("Needs Financial Reports:", data.needFinancialReports)
    console.log("Preferred Contact:", data.preferredContact)
    console.log("Additional Comments:", data.additionalComments || "None")
    console.log("===========================")

    // TODO: Integration points for production:
    // 1. Save to database (Supabase, PostgreSQL, etc.)
    // 2. Send notification via Telegram bot
    // 3. Send confirmation email to the salon owner
    // 4. Add to CRM system
    // 5. Trigger onboarding workflow

    // Placeholder for Telegram bot integration
    // const telegramBotToken = process.env.TELEGRAM_BOT_TOKEN
    // const telegramChatId = process.env.TELEGRAM_ADMIN_CHAT_ID
    // if (telegramBotToken && telegramChatId) {
    //   await fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({
    //       chat_id: telegramChatId,
    //       text: `New Lead: ${data.salonName}\nOwner: ${data.ownerName}\nCity: ${data.city}\nContact: ${data.preferredContact}`,
    //     }),
    //   })
    // }

    return NextResponse.json(
      { 
        success: true, 
        message: "Lead submitted successfully",
        leadId: `lead_${Date.now()}` // Mock lead ID
      },
      { status: 200 }
    )
  } catch (error) {
    console.error("Error processing lead submission:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}

// Health check endpoint
export async function GET() {
  return NextResponse.json(
    { 
      status: "ok", 
      endpoint: "/api/lead",
      methods: ["POST"],
      description: "Salon lead submission endpoint"
    },
    { status: 200 }
  )
}
