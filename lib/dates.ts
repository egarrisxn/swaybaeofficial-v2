export async function LocaleString() {
  "use cache";
  return new Date().toLocaleString();
}

export async function FullYear() {
  "use cache";
  return new Date().getFullYear();
}

export async function NewDate() {
  "use cache";
  return new Date();
}
