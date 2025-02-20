import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const users = [
  { id: 1, name: "KK", password: "Kavin@2025" },
  { id: 2, name: "Tusshar", password: "Teexmoni248" },
]

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) return null

        const user = users.find(
          (user) =>
            user.name.toLowerCase() === credentials.username.toLowerCase() && user.password === credentials.password,
        )

        if (user) {
          return { id: user.id.toString(), name: user.name }
        }
        return null
      },
    }),
  ],
  pages: {
    signIn: "/signin",
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }

