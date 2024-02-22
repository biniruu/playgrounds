/* eslint-disable new-cap */
import NextAuth from 'next-auth/next'
import GithubProvider from 'next-auth/providers/github'

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
  ],
})

export { handler as GET, handler as POST }
