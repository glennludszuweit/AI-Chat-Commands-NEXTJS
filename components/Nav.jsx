'use client';

import React, { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';
import Link from 'next/link';
import Image from 'next/image';

const Nav = () => {
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);
  const [toggleDropDownMenu, setToggleDropDownMenu] = useState(false);

  const showSignIn = () => {
    return (
      <React.Fragment>
        {providers &&
          Object.values(providers).map((provider) => (
            <button
              type='button'
              className='black_btn'
              key={provider.name}
              onClick={() => signIn(provider.id)}
            >
              Sign In with Google
            </button>
          ))}
      </React.Fragment>
    );
  };

  const showDesktopMenu = () => {
    return (
      <div className='flex gap-3 md:gap-5'>
        <Link href='/create-prompt' className='black_btn'>
          Create Prompt
        </Link>
        <button type='button' onClick={signOut} className='outline_btn'>
          Sign out
        </button>
        <Link href='/profile'>
          <Image
            src={session?.user.image}
            className='rounded-full'
            alt='Promptopia logo'
            width={37}
            height={37}
          />
        </Link>
      </div>
    );
  };

  const showMobileMenu = () => {
    return (
      <div className='dropdown'>
        <Link
          href='/profile'
          className='dropdown_link'
          onClick={() => setToggleDropDownMenu(false)}
        >
          My Profile
        </Link>
        <Link
          href='/create-prompt'
          className='dropdown_link'
          onClick={() => setToggleDropDownMenu(false)}
        >
          Create Prompt
        </Link>
        <button
          type='button'
          className='mt-5 w-full black_btn'
          onClick={() => {
            setToggleDropDownMenu(false);
            signOut();
          }}
        >
          Sign out
        </button>
      </div>
    );
  };

  useEffect(() => {
    const setSocialProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };
    setSocialProviders();
  }, []);

  return (
    <nav className='flex-between w-full mb-16 pt-3'>
      <Link href='/' className='flex gap-2 flex-center'>
        <Image
          src='/assets/images/logo.svg'
          alt='Promptopia logo'
          width={30}
          height={30}
          className='object-contain'
        />
        <p className='logo_text'>Promptopia</p>
      </Link>

      {/* Desktop Navigation */}
      <div className='sm:flex hidden'>
        {session?.user ? showDesktopMenu() : showSignIn()}
      </div>

      {/* Mobile Navigation */}
      <div className='sm:hidden flex relative'>
        {session?.user ? (
          <div className='flex'>
            <Image
              src={session?.user.image}
              className='rounded-full'
              alt='Promptopia logo'
              width={37}
              height={37}
              onClick={() => setToggleDropDownMenu((prev) => !prev)}
            />
            {toggleDropDownMenu && showMobileMenu()}
          </div>
        ) : (
          showSignIn()
        )}
      </div>
    </nav>
  );
};

export default Nav;
