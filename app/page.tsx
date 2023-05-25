import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>Hello World from homepage</h1>
      <Link
        href="/todo"
        className="inline-block bg-black text-white py-2 px-8 my-8 rounded-full"
      >
        See all to-dos
      </Link>
    </main>
  );
}
