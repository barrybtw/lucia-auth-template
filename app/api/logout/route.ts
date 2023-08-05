import { type NextApiRequest } from 'next';

export const GET = async (_req: NextApiRequest) => {
  return new Response(null, {
    status: 302,
    headers: {
      Location: '/',
    },
  });
};
