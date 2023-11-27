import { load } from "https://deno.land/std@0.207.0/dotenv/mod.ts"

const localEnv = await load()

export const env = {
    API_AUTHORIZATION_KEY: localEnv.API_AUTHORIZATION_KEY || Deno.env.get('API_AUTHORIZATION_KEY'),
    EVENT_API_AUTHORIZATION_KEY: localEnv.EVENT_API_AUTHORIZATION_KEY || Deno.env.get('EVENT_API_AUTHORIZATION_KEY'),
    SOLUTION1_EMAIL_ADDRESS: localEnv.SOLUTION1_EMAIL_ADDRESS || Deno.env.get('SOLUTION1_EMAIL_ADDRESS'),
    SOLUTION1_EMAIL_PASSWORD: localEnv.SOLUTION1_EMAIL_PASSWORD || Deno.env.get('SOLUTION1_EMAIL_PASSWORD'),
    SMTP: localEnv.SMTP || Deno.env.get('SMTP'),
    EMAIL_PORT: localEnv.EMAIL_PORT || Deno.env.get('EMAIL_PORT')
}
