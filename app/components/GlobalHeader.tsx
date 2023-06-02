import LogOut from '@/app/components/LogOut';
import Link from 'next/link';

const GlobalHeader = () => {
  return (
    <header className="fixed bg-white py-4 px-8 w-full flex justify-between items-center">
      <h1>
        <Link
          href="/"
          className="font-bold text-xl"
        >
          To-do List App
        </Link>
      </h1>
      <LogOut />
    </header>
  );
};

export default GlobalHeader;
