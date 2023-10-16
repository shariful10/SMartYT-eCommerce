import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

export const options:  NextAuthOptions = {
   providers: [
      GithubProvider({
         clientId: "",
         clientSecret: "",
      })
   ]
}
