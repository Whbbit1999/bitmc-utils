import crypto from 'node:crypto';

export default defineEventHandler(async (event) => {
  // ... Do whatever you want here
  const query = getQuery(event);
  const length = Number.parseInt(query?.length as string) || 64;

  const string = crypto.randomBytes(length / 2).toString('hex');
  return {
    randomString: string,
  };
});
