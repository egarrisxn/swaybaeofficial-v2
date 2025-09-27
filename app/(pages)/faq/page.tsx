export default function FAQPage() {
  return (
    <section className='grid size-full place-items-center'>
      <h1 className='text-shadow pb-20 text-4xl font-black tracking-tighter text-wrap text-shadow-lg sm:text-6xl lg:text-7xl 2xl:text-9xl'>
        COMING SOON.
      </h1>
    </section>
  );
}

// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";
// import LastUpdated from "@/components/shared/last-updated";
// import ContactMeSnippet from "@/components/shared/contact-me-snippet";
// import { faqList } from "@/data/public";

// export default function FAQPage() {
//   return (
//     <div className='min-h-screen w-full'>
//       <div className='container mx-auto my-24 max-w-2xl px-4 lg:max-w-7xl xl:px-0'>
//         <section className='mx-auto grid max-w-[65ch] grid-cols-1 items-center xl:max-w-[80ch]'>
//           <header className='mb-10 flex w-full flex-col md:mx-auto md:items-center md:justify-center md:text-center'>
//             <h1 className='mb-2 text-4xl font-extrabold tracking-tight text-foreground md:mb-4 xl:text-5xl'>
//               FAQs
//             </h1>
//             <div className='text-xs text-muted-foreground md:text-sm'>
//               <LastUpdated />
//             </div>
//           </header>

//           <article className='mb-10'>
//             <h3 className='mb-4 text-2xl font-semibold'>
//               Frequently Asked Questions
//             </h3>
//             <p className='mb-6 text-muted-foreground'>
//               Here you&apos;ll find answers to some of the most common questions
//               I get. If you don&apos;t see your question answered below, feel
//               free to reach out for further assistance. I am here to help! Text
//               text text we need more text here.
//             </p>

//             <div>
//               <Accordion
//                 defaultValue='item-0'
//                 type='single'
//                 collapsible
//                 className='w-full space-y-2'
//               >
//                 {faqList.map(({ title, description }, index) => (
//                   <AccordionItem
//                     key={index}
//                     value={`item-${index}`}
//                     className='p-1'
//                   >
//                     <AccordionTrigger className='text-base font-semibold'>
//                       {title}
//                     </AccordionTrigger>
//                     <AccordionContent className='font-medium text-primary'>
//                       {description}
//                     </AccordionContent>
//                   </AccordionItem>
//                 ))}
//               </Accordion>
//             </div>
//           </article>

//           <hr className='mb-6' />

//           <ContactMeSnippet />
//         </section>
//       </div>
//     </div>
//   );
// }
