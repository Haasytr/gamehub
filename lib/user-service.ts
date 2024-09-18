import { db } from "./db";

export async function getUserByUsername(username: string) {
  const user = await db.user.findUnique({
    where: {
      username,
    },
    include: {
      Stream: true,
    },
  });

  return user;
}

export async function getUserById(id: string) {
  const user = await db.user.findUnique({
    where: {
      id,
    },
    include: {
      Stream: true,
    },
  });

  return user;
}
