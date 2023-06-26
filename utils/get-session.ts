import { authOptions } from "@/authOptions";
import { getServerSession } from "next-auth";

export const getSession = async () => {
  try {
    const session = await getServerSession(authOptions);

    return session;
  } catch {
    return null;
  }
}