export default function CommunityPage() {
  return (
    <section className='grid size-full place-items-center'>
      <h1 className='text-shadow pb-20 text-4xl font-black tracking-tighter text-wrap text-shadow-lg sm:text-6xl lg:text-7xl 2xl:text-9xl'>
        COMING SOON.
      </h1>
    </section>
  );
}

// import { Link } from "next-view-transitions";
// import { createClient } from "@/lib/supabase/server";
// import LogoutButton from "@/components/shared/logout-button";
// import UserAvatar from "@/components/shared/user-avatar";
// import SubmitCommentForm from "@/components/community/submit-comment-form";

// export default async function CommunityPage() {
//   const supabase = await createClient();

//   const {
//     data: { user },
//   } = await supabase.auth.getUser();

//   let suggestedName: string | null = null;

//   if (user && user.user_metadata) {
//     if (
//       user.app_metadata?.provider === "discord" &&
//       user.user_metadata?.preferred_username
//     ) {
//       // Specific handling for Discord's 'preferred_username'
//       suggestedName = user.user_metadata.preferred_username;
//     } else {
//       // Fallback for other providers (like Twitch, GitHub, Google, etc.)
//       suggestedName =
//         user.user_metadata.full_name || // Common for Google, sometimes Discord
//         user.user_metadata.user_name || // Common for Twitch, GitHub
//         user.user_metadata.name || // More generic fallback
//         null;
//     }
//     if (suggestedName) suggestedName = suggestedName.trim();
//   }

//   let commentsQuery = supabase
//     .from("community_comments")
//     .select("*")
//     .order("created_at", { ascending: false });

//   if (user) {
//     commentsQuery = commentsQuery.or(`approved.eq.true,user_id.eq.${user.id}`);
//   } else {
//     commentsQuery = commentsQuery.eq("approved", true);
//   }

//   const { data: comments, error: commentsError } = await commentsQuery;

//   if (commentsError) {
//     console.error("Error fetching comments:", commentsError.message);
//   }

//   return (
//     <div className='container mx-auto p-4'>
//       <div className='mb-6 flex items-center justify-between'>
//         <h1 className='text-3xl font-bold'>Community Page</h1>
//         {user ? (
//           <div className='flex items-center space-x-4'>
//             <UserAvatar />
//             <span className='text-sm text-gray-600'>
//               Welcome,{" "}
//               {suggestedName || user.email || user.id.substring(0, 8) + "..."}!
//             </span>
//             <LogoutButton />
//           </div>
//         ) : (
//           <Link
//             href='/auth'
//             className='rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700'
//           >
//             Login to Comment
//           </Link>
//         )}
//       </div>

//       <div className='comment-list mb-8'>
//         <h2 className='mb-4 text-2xl font-semibold'>Comments</h2>
//         {comments && comments.length > 0 ? (
//           comments.map((comment: any) => (
//             <div key={comment.id} className='mb-4 rounded-md bg-gray-100 p-4'>
//               <p className='text-gray-800'>{comment.message}</p>
//               <p className='mt-2 text-sm text-gray-600'>
//                 By {comment.name || "Anonymous"} at{" "}
//                 {new Date(comment.created_at).toLocaleString()}
//                 {!comment.approved && (
//                   <span className='ml-2 text-yellow-600'>
//                     (Pending Approval)
//                   </span>
//                 )}
//               </p>
//             </div>
//           ))
//         ) : (
//           <p>No comments yet. Be the first to leave one!</p>
//         )}
//       </div>

//       <div className='comment-form-section'>
//         <h2 className='mb-4 text-2xl font-semibold'>Leave a Comment</h2>
//         {user ? (
//           <SubmitCommentForm suggestedName={suggestedName} />
//         ) : (
//           <p className='text-gray-500'>
//             Please{" "}
//             <Link href='/auth' className='text-blue-600 hover:underline'>
//               log in
//             </Link>{" "}
//             to leave a comment.
//           </p>
//         )}
//       </div>
//     </div>
//   );
// }
