"use client";

import { useActionState, useEffect, useRef } from "react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { AnimatedSendIcon } from "@/components/icons";
import { MockModeBanner } from "@/components/shared/mock-mode-banner";

import { subscribeToNewsletter } from "@/app/actions/resend";

import type { ActionState } from "@/types";

function FieldMessage({ id, errors }: { id: string; errors?: string[] }) {
  if (!errors?.length) return null;
  return (
    <p
      id={`${id}-error`}
      className='mt-1.5 text-xs leading-tight text-destructive'
    >
      {errors.join(", ")}
    </p>
  );
}

export function UserNewsletterForm() {
  const initialState: ActionState = { message: "", success: false };
  const [state, formAction] = useActionState(
    subscribeToNewsletter,
    initialState
  );
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
    <div className='w-full max-w-md'>
      <form
        ref={formRef}
        action={formAction}
        className='relative flex items-center rounded-full'
      >
        {/* toggle: "error" for testing */}
        <input type='hidden' name='_mock' value='' />
        <label htmlFor='newsletter-email' className='sr-only'>
          Email address
        </label>
        <Input
          id='newsletter-email'
          type='email'
          name='email'
          placeholder='email@example.com'
          aria-invalid={!!state.errors?.email}
          aria-describedby='newsletter-email-error'
          className='h-11 rounded-full border-2 border-shaded-foreground/70 bg-foreground/30 pr-16 pl-4 placeholder:text-shaded-foreground/60 dark:bg-transparent'
        />
        <button
          type='submit'
          className='absolute top-1/2 right-0 -translate-y-1/2 px-4'
          aria-label='Subscribe to newsletter'
          disabled={state.success === false && !!state.errors}
        >
          <AnimatedSendIcon
            animateOnHover
            className='size-5 text-shaded-foreground hover:text-primary'
          />
        </button>
      </form>
      <FieldMessage id='newsletter-email' errors={state.errors?.email} />
      <div className='flex justify-end pt-0.5 pr-1'>
        <MockModeBanner />
      </div>
    </div>
  );
}
