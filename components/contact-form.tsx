"use client";

import { errorMessage, getInputClass, labelClass } from "./ui/form-helpers";
import Image from "next/image";
import { useActionState, useEffect, useRef } from "react";
import { submitContactForm } from "@/app/actions";
import { cn } from "@/lib/utils";
import toast from "react-hot-toast";

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const initialState = {
    success: true,
    error: {},
    message: "",
  };

  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialState,
  );

  useEffect(() => {
    if (!state.message) return;

    if (state.success) {
      toast.success(state.message);
      formRef.current?.reset();
    } else {
      toast.error(state.message);
    }
  }, [state]);

  return (
    <div className="my-16 space-y-5 border-t px-5 py-5">
      <h2>You can manually input your message here.</h2>

      <form ref={formRef} action={formAction} noValidate className="space-y-3">
        <div className="flex flex-col">
          <label htmlFor="name" className={labelClass}>
            Name
          </label>
          <input
            name="name"
            type="text"
            id="name"
            placeholder="Your name"
            autoComplete="name"
            disabled={isPending}
            className={getInputClass(state.error?.name, false)}
          />
          {errorMessage(state.error?.name?.[0])}
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            name="email"
            type="email"
            id="email"
            placeholder="Your email address"
            autoComplete="email"
            disabled={isPending}
            className={getInputClass(state.error?.email, false)}
          />
          {errorMessage(state.error?.email?.[0])}
        </div>

        <div className="flex flex-col">
          <label htmlFor="message" className={labelClass}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            cols={50}
            placeholder="Write your message here"
            disabled={isPending}
            className={cn(
              "placeholder:text-muted-foreground/50 focus-visible:border-muted-foreground/50 border-border resize-none rounded-xl border py-3 ps-4 transition",
              state.error?.message ? "border-error/40" : "",
            )}
          />
          {errorMessage(state.error?.message?.[0])}
        </div>

        <div className="w-full">
          <button
            disabled={isPending}
            className="bg-primary text-background ml-auto flex items-center gap-2 rounded-xl px-4 py-2 font-medium uppercase"
          >
            {isPending ? "Submitting..." : "Submit"}
            {!isPending && (
              <Image
                src="/icons/form-icon/send.svg"
                alt="send icon"
                width="15"
                height="15"
              />
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
