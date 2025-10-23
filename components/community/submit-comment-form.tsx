// "use client";

// import { useActionState } from "react";
// import { userSubmitComment } from "@/app/actions/user";
// import type { ActionState } from "@/types";

// const initialState: ActionState = {
//   success: undefined,
//   message: "",
// };

// interface SubmitCommentFormProps {
//   suggestedName: string | null;
// }

// export default function SubmitCommentForm({
//   suggestedName,
// }: SubmitCommentFormProps) {
//   const [state, formAction, pending] = useActionState(
//     userSubmitComment,
//     initialState
//   );

//   return (
//     <form action={formAction}>
//       {suggestedName && (
//         <p className='mb-2 text-sm text-gray-700'>
//           Commenting as: <span className='font-medium'>{suggestedName}</span>
//         </p>
//       )}
//       {!suggestedName && (
//         <p className='mb-2 text-sm text-gray-700'>
//           You will comment as: <span className='font-medium'>Anonymous</span>{" "}
//           (Your username is not available from your login method)
//         </p>
//       )}

//       <textarea
//         id='message'
//         name='message'
//         placeholder='Leave a nice message!'
//         className='w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none'
//         rows={3}
//         required
//       ></textarea>

//       {state.message && (
//         <p
//           className={`${state.success ? "text-green-600" : "text-red-600"} mt-1 text-sm`}
//           aria-live='polite'
//         >
//           {state.message}
//         </p>
//       )}

//       <button
//         type='submit'
//         disabled={pending}
//         className='mt-2 rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50'
//       >
//         {pending ? "Submitting..." : "Submit Comment"}
//       </button>
//     </form>
//   );
// }
