import { NextResponse } from 'next/server'
import { sendEmail } from '@/lib/utils/send-emails'

export async function POST(request: Request) {
    const data = await request.json()

    await sendEmail({
        sender: "tools@theskill.club",
        message: data.message,
        recipients: data.recipients,
        subject: data.subject
    })

    return NextResponse.json({
        statusbar: "OK"
    })
}