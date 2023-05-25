import Link from 'next/link';

export default function Todo() {
  return (
    <main>
      <h1>Todo page</h1>
      <Link
        href="/"
        className="inline-block bg-black text-white py-2 px-8 my-8 rounded-full"
      >
        Go home
      </Link>
    </main>
  );
}
