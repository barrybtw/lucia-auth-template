export const GET = async (_req: Request) => {
  return new Response(null, {
    status: 302,
    headers: {
      Location: '/',
    },
  });
};
