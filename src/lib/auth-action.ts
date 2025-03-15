import { signIn } from '@/configuration/auth';
import { z } from 'zod';

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
});

export const authAction = async (formData: FormData) => {
  'use server';
  // FormData をオブジェクトに変換してから parse する
  const data = Object.fromEntries(formData.entries());
  const parsedForm = formSchema.parse(data);

  await signIn('resend', { email: parsedForm.email });
};
