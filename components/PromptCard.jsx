'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';

const PromptCard = ({ post, handleTagClick, handleEdit, handleDelete }) => {
  const router = useRouter();
  const pathName = usePathname();
  const { data: session } = useSession();
  const [copied, setCopied] = useState('');

  const handleCopy = () => {
    setCopied(post.prompt);
    navigator.clipboard.writeText(post.prompt);
    setTimeout(() => {
      setCopied('');
    }, 5000);
  };

  return (
    <div className='prompt_card'>
      <div className='flex justify-between items-start gap-5'>
        <div className='flex flex-1 justify-start items-center cursor-pointer gap-3'>
          <Image
            src={post.creator?.image}
            alt='user_image'
            width={40}
            height={40}
            className='rounded-full object-contain'
          />

          <div className='flex flex-col'>
            <h3 className='font-satoshi font-semibold text-gray-900'>
              {post.creator?.username}
            </h3>
            <p className='font-inter text-sm text-gray-500'>
              {post.creator?.email}
            </p>
          </div>
        </div>

        <div className='copy_btn' onClick={handleCopy}>
          <Image
            src={
              copied === post.prompt
                ? '/assets/icons/tick.svg'
                : '/assets/icons/copy.svg'
            }
            alt='copy_button'
            width={12}
            height={12}
          />
        </div>
      </div>

      <p className='my-4 font-satoshi text-sm text-gray-700'>{post.prompt}</p>
      <p
        className='font-inter text-sm cursor-pointer blue_gradient'
        onClick={() => handleTagClick && handleTagClick(post.tag)}
      >
        {post.tag}
      </p>
      {session?.user.id === post.creator?._id && pathName === '/profile' && (
        <div className='m-5 flex-center border-t gap-10 border-gray-200'>
          <p
            className='mt-3 font-inter text-sm cursor-pointer green_gradient'
            onClick={handleEdit}
          >
            Edit
          </p>

          <p
            className='mt-3 font-inter text-sm cursor-pointer orange_gradient'
            onClick={handleDelete}
          >
            Delete
          </p>
        </div>
      )}
    </div>
  );
};

export default PromptCard;
