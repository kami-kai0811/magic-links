import { signIn } from '@/configuration/auth';

export default function SingIn() {
  return (
    <form
      action={async (formData: FormData) => {
        'use server';
        await signIn('resend', formData);
      }}
      className="flex flex-col items-center gap-5"
    >
      <input
        name="email"
        placeholder="...@example.com"
        type="text"
        className="border-2 w-2xs"
      />
      <button type="submit" className="cursor-pointer border bg-amber-300">
        Sign in with Resend
      </button>
    </form>
  );
}
