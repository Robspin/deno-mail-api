import { Application, Router } from "https://deno.land/x/oak/mod.ts"
import {
  errorResponse,
  isAuthorized, Mail, sendMail,
  setHeaders
} from './helpers.ts'

const port = 8000
const app = new Application()
const router = new Router()

router.get('/', async (ctx) => {
  ctx.response.body = 'deno mail api running... 🦕'
})

router.post('/', async (ctx) => {
  if (!isAuthorized(ctx)) return

  try {
    const body = ctx.request.body({ type: 'json' });
    const mail = await body.value as Mail

    const result = await sendMail(mail)


    if (result.accepted.length < 1) {
      errorResponse(ctx, result.response)
    } else {
      setHeaders(ctx)
      ctx.response.body = 'email sent'
    }

  } catch (e) {
    errorResponse(ctx, e)
  }
})

app.use(router.routes())
app.use(router.allowedMethods())

console.log('Running on port: ', port)
await app.listen({ port })
