import { getSession } from 'next-auth/react';

export default async (req:any, res:any) => {
  const session:any = await getSession({ req });

  if (!session) {
    res.status(401).json({ error: 'Unauthorized' });
    return;
  }

  // Use the session object to access user information
  const userEmail = session.user.email;

  // Implement your Gmail API logic here using the userEmail

  // Example: Send a response
  res.status(200).json({ message: 'Success', userEmail });
};
