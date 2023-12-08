import NextAuth from "next-auth/next";
import githubAuth from "next-auth/providers/github"

 export const authOptions = {
  providers: [
    githubAuth({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET
    })
  ],
  secret: process.env.NEXTAUTH_SECRET
}

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST}
