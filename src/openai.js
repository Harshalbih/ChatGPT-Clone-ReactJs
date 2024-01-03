// eslint-disable-next-line

import OpenAI from 'openai';


const openai = new OpenAI({
  apiKey: "sk-ok1Lfc5Lp8d4J12TpQCnT3B1bkFJCY10BRPEKFUuLv13acpw", dangerouslyAllowBrowser: true
});

export async function sendMsgToOpenAI(message) {
  const res = await openai.chat.completions.create({
    model: 'text-davinci-003',
    prompt: message,
    temperature: 0.7,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });

  return res.choices[0].text;
}
