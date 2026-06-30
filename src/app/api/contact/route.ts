import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

const GMAIL_USER = process.env.GMAIL_USER
const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const nombre = formData.get("nombre") as string
    const email = formData.get("email") as string
    const mensaje = formData.get("mensaje") as string
    const asunto = formData.get("asunto") as string || "Consulta desde Meccaninfos"

    if (!nombre || !email || !mensaje) {
      return NextResponse.json(
        { error: "Todos los campos requeridos deben completarse" },
        { status: 400 },
      )
    }

    if (!GMAIL_USER || !GMAIL_APP_PASSWORD) {
      return NextResponse.redirect(new URL("/gracias", request.url))
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: GMAIL_USER,
        pass: GMAIL_APP_PASSWORD,
      },
    })

    const html = `
      <h2>Nuevo mensaje desde Meccaninfos</h2>
      <p><strong>Nombre:</strong> ${nombre}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Asunto:</strong> ${asunto}</p>
      <p><strong>Mensaje:</strong></p>
      <p>${mensaje.replace(/\n/g, "<br>")}</p>
    `

    await transporter.sendMail({
      from: GMAIL_USER,
      to: "piezasuelta@gmail.com",
      subject: asunto,
      html,
    })

    return NextResponse.redirect(new URL("/gracias", request.url))
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.redirect(new URL("/gracias", request.url))
  }
}
