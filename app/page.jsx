import Image from 'next/image';
import Link from 'next/link';
import Updates from './components/Updates';

export default function Home() {
  return (
    <main>
      <section>
        <h2>Dashboard</h2>

        <p>Studie-Ledd is a platform to enable remote based students to connect with other students in their local area. Built using </p>

        <div className="flex justify-left my-8">
          <Link href="/login">
            <button className="btn-primary1">Login</button>
          </Link>
        </div>
      </section>
      <Updates />
    </main>
  );
}