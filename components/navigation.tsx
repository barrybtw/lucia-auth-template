import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';

import UserIcon from '@/components/icons/user-icon';

export default function Navigation({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const isLoggedIn = Math.random() > 0.5;
  return (
    <nav
      className={cn(
        className,
        'flex items-center justify-between mx-auto max-w-screen-2xl w-11/12 md:w-9/12',
        'pb-8',
      )}
    >
      <section
        className='flex items-center h-16 space-x-4 lg:space-x-6'
        aria-label='navigation menu'
      >
        <Link
          href='/'
          className='text-sm font-medium transition-colors hover:text-zinc-50 text-zinc-200'
        >
          Just
        </Link>
        <Link
          href='/'
          className='text-sm font-medium transition-colors hover:text-zinc-50 text-zinc-200'
        >
          An
        </Link>
        <Link
          href='/'
          className='text-sm font-medium transition-colors hover:text-zinc-50 text-zinc-200'
        >
          Example
        </Link>
      </section>
      <section
        aria-label='login & logout'
        className={cn(
          'space-x-1 lg:space-x-2',
          isLoggedIn && 'flex flex-row items-center',
        )}
      >
        <Button
          variant='outline'
          className={cn(isLoggedIn && 'hidden')}
          asChild
        >
          <Link href='/login'>Login</Link>
        </Button>
        <Button className={cn(!isLoggedIn && 'hidden')} variant='ghost'>
          <UserIcon />
        </Button>
        <Button
          variant='outline'
          className={cn(!isLoggedIn && 'hidden')}
          asChild
        >
          <Link href='/api/logout'>Logout</Link>
        </Button>
      </section>
    </nav>
  );
}
