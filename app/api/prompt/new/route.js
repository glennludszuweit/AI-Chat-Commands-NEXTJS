import Prompt from '@models/prompt';
import { connectToDB } from '@utils/database';

export const POST = async (req) => {
  const { userID, prompt, tag } = await req.json();

  try {
    await connectToDB();
    const newPrompt = new Prompt({
      userID,
      prompt,
      tag,
    });
    await newPrompt.save();
    console.log('Prompt saved');
    return new Response(JSON.stringify(newPrompt), { status: 201 });
  } catch (error) {
    return new Response('Failed to create new prompt.', {
      status: 201,
      error: error,
    });
  }
};
