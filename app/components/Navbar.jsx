import Link from 'next/link';
import Image from 'next/image';

import Logo from './sl-logo.svg';

const Navbar = () => {
  return (
    <div className="px-8">
      <nav>
        <Image src={Logo} alt="StudieLedd logo" height={60} quality={100} />
        <h1>StudieLedd</h1>
        <Link href="/">Home</Link>
        <Link href="/login">Login</Link>
      </nav>
    </div>
  );
};

export default Navbar;
