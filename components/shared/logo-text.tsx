import { Link } from "next-view-transitions";

export function LogoText() {
  return (
    <Link
      href='/'
      className='--tracking-widest text-3xl font-black text-primary text-shadow-black text-shadow-sm'
    >
      Sway Bae
    </Link>
  );
}
