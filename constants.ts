import { load } from "https://deno.land/std@0.207.0/dotenv/mod.ts"

const localEnv = await load({ allowEmptyValues: true })

export const env = {
    API_AUTHORIZATION_KEY: localEnv.API_AUTHORIZATION_KEY || Deno.env.get('API_AUTHORIZATION_KEY'),
    SMTP_EMAIL_ADDRESS: localEnv.SMTP_EMAIL_ADDRESS || Deno.env.get('SMTP_EMAIL_ADDRESS'),
    SMTP_EMAIL_PASSWORD: localEnv.SMTP_EMAIL_PASSWORD || Deno.env.get('SMTP_EMAIL_PASSWORD'),
    SMTP: localEnv.SMTP || Deno.env.get('SMTP'),
    EMAIL_PORT: localEnv.EMAIL_PORT || Deno.env.get('EMAIL_PORT')
}
