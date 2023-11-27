import { env } from './constants.ts'
import nodemailer from 'npm:nodemailer@6.9.7'

const authorization = env.API_AUTHORIZATION_KEY

export const isAuthorized = (ctx: any) => {
    const requestToken = ctx.request.headers.get('Authorization')
    if (requestToken === authorization) return true
    ctx.response.status = 401
    ctx.response.body = 'unauthorized'
    return false
}

export const setHeaders = (ctx: any) => {
    ctx.response.headers.set("Access-Control-Allow-Origin", "*")
    ctx.response.headers.set("Cache-Control", "no-cache")
    ctx.response.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
    ctx.response.headers.set("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization")
}

export const errorResponse = (ctx: any, e: any) => {
    console.error(e)
    ctx.response.status = 500
    ctx.response.body = 'something went wrong'
}

export const transporter = nodemailer.createTransport({
    host: env.SMTP,
    port: env.EMAIL_PORT,
    secure: false,
    auth: {
        user: env.SOLUTION1_EMAIL_ADDRESS,
        pass: env.SOLUTION1_EMAIL_PASSWORD
    }
})

export type Mail = {
    text: string
    subject: string
    to: string[]
}

export const sendMail = async ({ to, text, subject }: Mail) => {
    const email = {
        from: env.SOLUTION1_EMAIL_ADDRESS,
        to,
        subject,
        text
    }

    return await transporter.sendMail(email)
}