"use client";

import { useViewerToken } from "@/hooks/use-viewer-token";
import { Stream, User } from "@prisma/client";

interface StreamPlayerProps {
  user: User & { Stream: Stream | null };
  stream: Stream;
  isFollowing: boolean;
}

export const StreamPlayer = ({
  isFollowing,
  stream,
  user,
}: StreamPlayerProps) => {
  const { token, name, identity } = useViewerToken(user.id);

  console.log({ token, name, identity });

  if (!token || !name || !identity) {
    return <div>Cannot watch the stream</div>;
  }

  return <div>Allowed to watch the stream</div>;
};
