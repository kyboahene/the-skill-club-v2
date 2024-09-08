import { env } from "@/env"
import nodemailer from "nodemailer"
import SMPTransport from 'nodemailer/lib/smtp-transport'

type SendEmailDto = {
    subject: string,
    message: string,
    sender: string,
    recipients: string[],
}

const transport = nodemailer.createTransport({
    host: env.MAIL_HOST,
    port: Number(env.MAIL_PORT),
    secure: true,
    auth: {
        user: env.MAIL_USER,
        pass: env.MAIL_PASSWORD
    }
} as SMPTransport.Options)

export const sendEmail = async (sendEmailDto: SendEmailDto) => {
    return await transport.sendMail({
        from: sendEmailDto.sender,
        to: sendEmailDto.recipients,
        subject: sendEmailDto.subject,
        html: sendEmailDto.message,
        text: sendEmailDto.message
    })
}