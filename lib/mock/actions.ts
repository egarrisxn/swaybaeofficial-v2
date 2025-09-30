export type MockResult = {
  message: string;
  success: boolean;
  errors?: Record<string, string[]>;
};

const wait = (ms = 700) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Simulate form action for development/testing.
 * Only supports validation errors triggered by "_mock"="error"
 * or typing "error" in email, name, or message.
 */
export async function simulateMockAction(
  form: FormData,
  opts?: { delay?: number }
): Promise<MockResult> {
  await wait(opts?.delay ?? 700);

  const email = String(form.get("email") ?? "").toLowerCase();
  const name = String(form.get("name") ?? "").toLowerCase();
  const message = String(form.get("message") ?? "").toLowerCase();
  const mockControl = String(form.get("_mock") ?? "").toLowerCase();

  // Validation error
  if (
    mockControl === "error" ||
    email.includes("error") ||
    name.includes("error") ||
    message.includes("error")
  ) {
    return {
      message: "Validation failed. See field errors.",
      success: false,
      errors: {
        ...(email.includes("error") && {
          email: ["Email looks invalid (mock)"],
        }),
        ...(name.includes("error") && {
          name: ["Name contains invalid text (mock)"],
        }),
        ...(message.includes("error") && {
          message: ["Message contains invalid text (mock)"],
        }),
      },
    };
  }

  // Success
  return { message: "Mock: action processed successfully.", success: true };
}
