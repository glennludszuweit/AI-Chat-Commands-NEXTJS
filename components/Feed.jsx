'use client';

import { useState, useEffect } from 'react';
import PromptCard from './PromptCard';

const Feed = () => {
  const [searchText, setSearchText] = useState('');
  const [prompts, setPrompts] = useState([]);

  const handleSearchChange = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
  };

  useEffect(() => {
    const fetchPrompts = async () => {
      const response = await fetch('/api/prompt');
      const data = await response.json();
      setPrompts(data);
    };

    fetchPrompts();
  }, []);

  return (
    <section className='feed'>
      <form className='relative w-full flex-center'>
        <input
          type='text'
          value={searchText}
          onChange={handleSearchChange}
          placeholder='Search #tag or Username ...'
          className='search_input peer'
          required
        />
      </form>

      <div className='mt-5 prompt_layout'>
        {prompts.map((prompt) => (
          <PromptCard
            key={prompt._id}
            post={prompt}
            handleTagClick={() => {}}
          />
        ))}
      </div>
    </section>
  );
};

export default Feed;
