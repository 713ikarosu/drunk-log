import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-6xl font-bold">Hello, world!</h1>
      <Link href="/map">
        <button type="button" className="btn btn-neutral">
          to Map
        </button>
      </Link>
      <Image src="/vercel.svg" alt="Vercel Logo" width={283} height={64} />
    </main>
  );
}
