import { Button, buttonVariants } from './ui/button';
import { cn } from '@/lib/utils';
import { authAction } from '@/lib/auth-action';

export default function SingIn() {
  return (
    <div className="flex flex-col gap-8 text-center">
      <h2 className="text-5xl">sign In</h2>
      <form action={authAction} className="flex flex-col items-center gap-5">
        <input
          name="name"
          placeholder="name"
          type="text"
          className="border-2 w-2xs"
          required
        />
        <input
          name="email"
          placeholder="user@example.com"
          type="email"
          className="border-2 w-2xs"
          required
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
