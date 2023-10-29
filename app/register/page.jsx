'use client';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useRouter } from 'next/router';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async e => {
    //
  };

  return <div></div>;
}
