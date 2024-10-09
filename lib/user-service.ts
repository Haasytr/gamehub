import { db } from "./db";

export async function getUserByUsername(username: string) {
  const user = await db.user.findUnique({
    where: {
      username,
    },
    select: {
      id: true,
      username: true,
      bio: true,
      imageUrl: true,
      externalUserId: true,
      Stream: {
        select: {
          id: true,
          isLive: true,
          isChatDelayed: true,
          isChatEnabled: true,
          isChatFollowersOnly: true,
          thumbnailUrl: true,
          name: true,
        },
      },
      _count: {
        select: {
          followedBy: true,
        },
      },
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
