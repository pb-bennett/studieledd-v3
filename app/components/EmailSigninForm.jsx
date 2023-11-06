'use client';
import { NextResponse } from 'next/server';

import { useState } from 'react';
import toast from 'react-hot-toast';

// import User from '@/models/user';

import { useRouter, useSearchParams } from 'next/navigation';
import { signIn } from 'next-auth/react';

import TextField from './TextFields.jsx';
// import Button from '../components/Button';

export default function EmailSignInForm() {
  const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/';

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      setLoading(true);

      const formData = new FormData(e.target);
      const email = formData.get('email');
      const response = await fetch(`http://localhost/api/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
        }),
      });
      // signIn('email', { email });
    } catch (err) {
      console.error(err);
      setLoading(false);
      toast.error('An error occured, try again.');
    }
  };

  const handleSubmit_OLD = async e => {
    e.preventDefault();
    try {
      setLoading(true);
      const result = await signIn('credentials', { email, password, redirect: false });
      setLoading(false);
      if (result.error) {
        toast.error(result.error);
      } else {
        toast.success('Login successful.');
        router.push(callbackUrl);
      }
    } catch (err) {
      console.error(err);
      setLoading(false);
      toast.error('An error occured, try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-2">
        <TextField id="email" name="email" type="email" label="Sign in with your email" placeholder="hello@me.com" autoComplete="email" required />
      </div>
      <button type="submit" variant="outline" color="gray" className="mt-3 w-full">
        Continue with email
      </button>
    </form>
  );
}
