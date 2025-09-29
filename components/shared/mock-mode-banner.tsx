import { Badge } from "@/components/ui/badge";

export function MockModeBanner() {
  if (process.env.NEXT_PUBLIC_USE_MOCK_ACTIONS !== "true") return null;
  return <Badge variant='mock'>MOCK MODE ENABLED</Badge>;
}
