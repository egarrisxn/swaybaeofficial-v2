import { userLogout } from "@/app/actions/auth";

export default function LogoutButton() {
  return (
    <form action={userLogout}>
      <button
        type='submit'
        className='rounded-md bg-red-600 px-4 py-2 text-white hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50'
      >
        Logout
      </button>
    </form>
  );
}
