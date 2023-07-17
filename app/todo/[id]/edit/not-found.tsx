import Link from "next/link";

const NotFound = () => {
  return (
    <section className="min-h-screen px-8 flex flex-col justify-center items-center">
      <h2 className="text-2xl font-bold">Not Found</h2>
      <p className="mb-4">Could not find requested to-do item 🫤</p>
      <Link href="/todos" className="btn-primary">See all to-dos</Link>
    </section>
  );
};

export default NotFound;
