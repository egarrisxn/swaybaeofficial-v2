// import type { PortableTextBlock } from "next-sanity";
// import type { Heading, SanityBlock } from "@/types";

// export function mapBlocksToHeadings(blocks: SanityBlock[]): Heading[] {
//   return blocks
//     .filter((block) => ["h1", "h2", "h3"].includes(block.style))
//     .map((block) => ({
//       id: block._key,
//       text: block.children.map((c) => c.text).join(""),
//       level: block.style as Heading["level"],
//       top: 0,
//     }));
// }

// export function blocksToSanityBlocks(
//   blocks: PortableTextBlock[]
// ): SanityBlock[] {
//   return blocks
//     .filter(
//       (b): b is PortableTextBlock & { _key: string; style: string } =>
//         b._key !== undefined && b.style !== undefined
//     )
//     .map((b) => ({
//       _key: b._key,
//       style: b.style,
//       children: b.children
//         .filter((c: any) => typeof c.text === "string")
//         .map((c: any) => ({ text: c.text })),
//     }));
// }
