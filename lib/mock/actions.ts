export type MockResult = {
  message: string;
  success: boolean;
  errors?: Record<string, string[]>;
};

const wait = (ms = 700) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Decide result based on form values or hidden "_mock" field:
 * - "_mock" = "error" -> field validation errors
 * - "_mock" = "fail"  -> server failure
 * - otherwise success
 */
export async function simulateMockAction(
  form: FormData,
  opts?: { delay?: number; forceError?: boolean }
): Promise<MockResult> {
  await wait(opts?.delay ?? 700);

  const email = String(form.get("email") ?? "").toLowerCase();
  const name = String(form.get("name") ?? "").toLowerCase();
  const message = String(form.get("message") ?? "").toLowerCase();
  const mockControl = String(form.get("_mock") ?? "").toLowerCase();

  // Forced server error
  if (opts?.forceError || mockControl === "fail") {
    return { message: "Simulated server error.", success: false };
  }

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

  return { message: "Mock: action processed successfully.", success: true };
}
