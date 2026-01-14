// import Link from "next/link";
// import { Badge } from "@/components/ui/badge";
// import type { Tag } from "@/types";

// interface TagBadgeProps {
//   tag: Tag;
//   clickable?: boolean;
//   noColor?: boolean;
// }

// export default function TagBadge({
//   tag,
//   clickable = true,
//   noColor = false,
// }: TagBadgeProps) {
//   const { title, color, tagSlug } = tag;

//   const tagContent = (
//     <Badge
//       variant='outline'
//       style={{
//         backgroundColor: noColor ? "transparent" : color,
//       }}
//     >
//       {title}
//     </Badge>
//   );

//   return clickable ? (
//     <Link href={`/blog/tag/${tagSlug}`}>{tagContent}</Link>
//   ) : (
//     tagContent
//   );
// }
