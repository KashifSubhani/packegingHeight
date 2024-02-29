import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export default NextAuth({
providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID ?? '',
        clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
        authorization: // Replace 'authorizationUrl' with 'authorization'
            'https://accounts.google.com/o/oauth2/auth?prompt=consent&access_type=offline&response_type=code',
        scope: [
            'https://www.googleapis.com/auth/gmail.readonly',
            // Add other required scopes as needed
        ],
    } as any), // Add 'as any' to bypass type checking
    // Add other providers if needed
],
  // Add custom configurations if needed
});
