"use server";

import EmailNotification from "@/components/email-notification";
import { resend } from "@/lib/resend";
import { inputSchema } from "@/lib/schemas";

export interface FormState {
  success: boolean;
  message: string;
  error?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
}

export async function submitContactForm(
  prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  const values = Object.fromEntries(formData);

  const result = inputSchema.safeParse(values);

  if (!result.success) {
    return {
      success: false,
      error: result.error.flatten((e) => e.message).fieldErrors,
      message: "Please fix the errors before sending!",
    };
  }

  const { name, email, message } = result.data;

  const fromEmail = process.env.EMAIL_FROM;
  const contactEmail = process.env.CONTACT_EMAIL;

  if (!resend) {
    return {
      success: false,
      message: "Server misconfiguration. Please try again later",
    };
  }

  if (!fromEmail || !contactEmail) {
    return {
      success: false,
      message: "Server misconfiguration. Please try again later",
    };
  }

  try {
    const { error } = await resend.emails.send({
      from: fromEmail!,
      to: [contactEmail!],
      subject: `New contact form submission from ${name}`,
      react: EmailNotification({
        name,
        email,
        message,
        submittedAt: new Date().toLocaleString("en-US", {
          dateStyle: "long",
          timeStyle: "short",
        }),
      }),
    });

    if (error) {
      console.error("Resend batch error", error);

      return {
        success: false,
        message: error.message,
      };
    }

    return {
      success: true,
      message: "Email sent successfully!",
    };
  } catch (err) {
    console.error(err);

    return {
      success: false,
      message:
        "We're having trouble sending your email. Please try again later.",
    };
  }
}
