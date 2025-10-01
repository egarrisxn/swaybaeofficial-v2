"use client";

import { useActionState, useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";
import { toast } from "sonner";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MockModeBanner } from "@/components/shared/mock-mode-banner";

import { sendContactMessage } from "@/app/actions/resend";

import type { ActionState } from "@/types";

function FieldError({ id, errors }: { id: string; errors?: string[] }) {
  if (!errors?.length) return null;
  return (
    <p id={`${id}-error`} className='mt-1 text-xs text-red-500'>
      {errors.join(", ")}
    </p>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      type='submit'
      variant='contrast'
      size='dynamic'
      className='w-full'
      disabled={pending}
    >
      {pending ? "Submitting…" : "Send Message"}
    </Button>
  );
}

export function UserContactForm() {
  const initialState: ActionState = { message: "", success: false };
  const [state, formAction] = useActionState(sendContactMessage, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast.success(state.message);
        formRef.current?.reset();
      } else {
        toast.error(state.message);
      }
    }
  }, [state]);

  return (
    <>
      <Card>
        <CardHeader className='px-7'>
          <CardTitle className='text-2xl font-bold tracking-tight lg:text-3xl'>
            Contact me
          </CardTitle>
          <CardDescription className='tracking-wide text-wrap'>
            {`Fill out the form below and I'll be in touch.`}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form
            ref={formRef}
            action={formAction}
            className='w-full space-y-4 sm:space-y-6'
          >
            {/* toggle: "error" for testing */}
            <input type='hidden' name='_mock' value='' />

            <div className='flex flex-col gap-4 sm:flex-row sm:gap-6'>
              <div className='w-full'>
                <Label
                  htmlFor='name'
                  className='mb-1.5 pl-2'
                  aria-invalid={!!state.errors?.name}
                  aria-describedby='name-error'
                >
                  Name
                </Label>
                <Input
                  id='name'
                  name='name'
                  type='text'
                  placeholder='Name'
                  className='rounded-[0.9rem]'
                  aria-invalid={!!state.errors?.name}
                  aria-describedby='name-error'
                />
                <FieldError id='name' errors={state.errors?.name} />
              </div>

              <div className='w-full'>
                <Label
                  htmlFor='email'
                  className='mb-1.5 ml-2'
                  aria-invalid={!!state.errors?.email}
                  aria-describedby='email-error'
                >
                  Email
                </Label>
                <Input
                  id='email'
                  name='email'
                  type='email'
                  placeholder='Email'
                  className='rounded-[0.9rem]'
                  aria-invalid={!!state.errors?.email}
                  aria-describedby='email-error'
                />
                <FieldError id='email' errors={state.errors?.email} />
              </div>
            </div>

            <div>
              <Label
                htmlFor='message'
                className='mb-1.5 ml-2'
                aria-invalid={!!state.errors?.message}
                aria-describedby='message-error'
              >
                Message
              </Label>
              <Textarea
                id='message'
                name='message'
                placeholder='Message'
                required
                className='min-h-40 rounded-[0.9rem]'
                aria-invalid={!!state.errors?.message}
                aria-describedby='message-error'
              />
              <FieldError id='message' errors={state.errors?.message} />
            </div>

            <CardFooter className='x'>
              <SubmitButton />
            </CardFooter>
          </form>
        </CardContent>
      </Card>
      <div className='flex items-end justify-end pt-2 pr-2'>
        <MockModeBanner />
      </div>
    </>
  );
}
