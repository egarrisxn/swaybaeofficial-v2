import Link from "next/link";

export function LogoText() {
  return (
    <Link
      href='/'
      className='text-3xl font-black tracking-[-0.1em] text-primary text-shadow-black text-shadow-sm'
    >
      Sway Bae
    </Link>
  );
}
