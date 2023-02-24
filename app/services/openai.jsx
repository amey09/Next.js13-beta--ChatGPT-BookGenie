import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export const suggestBook = async (personality) => {
  const prompt = `This is an outline of the personality of a person:
    ${personality}
      
      A good book recommendation with an explanation for the above person to read would be:`;

  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: prompt,
    max_tokens: 256,
  });
  return completion.data.choices[0].text;
};