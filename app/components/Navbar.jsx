import Link from 'next/link';
import Image from 'next/image';
import { useSession, signOut } from 'next-auth/react';

import Logo from './sl-logo.svg';

export default function Navbar() {
  const { data, status } = useSession();
  console.log('data:', data, 'status:', status);
  return (
    <div className="px-8">
      <nav>
        <Image src={Logo} alt="StudieLedd logo" height={60} quality={100} />
        <h1>StudieLedd</h1>
        <Link href="/">Home</Link>
        {status === 'authenticated' ? (
          <div className="flex gap-1">
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/">Logout</Link>
          </div>
        ) : (
          <div className="flex gap-1">
            <Link href="/login">Login</Link>
            <Link href="/register">Register</Link>
          </div>
        )}
      </nav>
    </div>
  );
}
