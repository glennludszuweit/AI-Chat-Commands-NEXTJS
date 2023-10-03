import Prompt from '@models/prompt';
import { connectToDB } from '@utils/database';

export const POST = async (req, res) => {
  const { prompt, tag, userID } = await req.json();

  try {
    await connectToDB();
    const newPrompt = new Prompt({
      creator: userID,
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
