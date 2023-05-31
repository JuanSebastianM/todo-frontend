import HomeCtaButton from '@/app/components/HomeCtaButton';

export default function Home() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center">
      <header className="text-center">
        <h1 className="font-bold text-5xl">
          Organize your life in a matter of seconds!
        </h1>
      </header>
      <div className="my-12">
        <HomeCtaButton />
      </div>
    </section>
  );
}
