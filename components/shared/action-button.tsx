"use client";

import { useActionState, startTransition } from "react";
import type { ActionState } from "@/types";

const initialState: ActionState = {
  success: undefined,
  message: "",
};

interface ActionButtonProps<T> {
  action: (state: ActionState, payload: T) => Promise<ActionState>;
  id: T;
  label: string;
  className?: string;
  confirm?: boolean;
}

export function ActionButton<T>({
  action,
  id,
  label,
  className,
  confirm = false,
}: ActionButtonProps<T>) {
  const [, actionHandler, pending] = useActionState(action, initialState);

  const handleClick = () => {
    const executeAction = () => {
      startTransition(() => {
        actionHandler(id);
      });
    };

    if (confirm) {
      if (window.confirm("Are you sure?")) {
        executeAction();
      }
    } else {
      executeAction();
    }
  };

  return (
    <button className={className} onClick={handleClick} disabled={pending}>
      {pending ? "..." : label}
    </button>
  );
}
