import { getPageSession } from '@/lib/lucia';
import { redirect } from 'next/navigation';

export default async function SignupPage() {
  const session = await getPageSession();
  if (session) redirect('/');

  return <div>hello world</div>;
}
