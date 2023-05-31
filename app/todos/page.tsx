// import { useSession } from 'next-auth/react';
import Link from 'next/link';

export default function Todos() {
  // const { data } = useSession();

  return (
    <section>
      <h1>These are all of your to-dos:</h1>
      <Link href="/" className="btn-primary">
        Go home
      </Link>
    </section>
  );
}
