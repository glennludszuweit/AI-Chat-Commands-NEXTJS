'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Profile from '@components/Profile';

const ProfilePage = () => {
  const { data: session } = useSession();
  const [posts, setPosts] = useState([]);

  const handleEdit = () => {};

  const handleDelete = () => {};

  useEffect(() => {
    const fetchPrompts = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/posts`);
      /**/
      const data = await response.json();
      if (session?.user.id) setPosts(data);
    };

    fetchPrompts();
  }, []);

  return (
    <Profile
      name='My'
      desc='Welcome to your profile page'
      posts={posts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default ProfilePage;
