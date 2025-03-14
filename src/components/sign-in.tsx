import { signIn } from '@/configuration/auth';
import { Button, buttonVariants } from './ui/button';
import { cn } from '@/lib/utils';

export default function SingIn() {
  return (
    <div className="flex flex-col gap-8 text-center">
      <h2 className="text-5xl">sign In</h2>
      <form
        action={async (formData: FormData) => {
          'use server';
          await signIn('resend', formData);
        }}
        className="flex flex-col items-center gap-5"
      >
        <input
          name="email"
          placeholder="user@example.com"
          type="text"
          className="border-2 w-2xs"
        />
        <Button
          className={cn(
            buttonVariants({ variant: 'default' }),
            'cursor-pointer'
          )}
        >
          sign In
        </Button>
      </form>
    </div>
  );
}
