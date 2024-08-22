"use client";
import { useState } from "react";

import { Input } from "@/components/ui/input";
import { CopyButton } from "./copy-button";
import { Button } from "@/components/ui/button";

interface KeyCardProps {
  value: string | null;
}

export function KeyCardProps({ value }: KeyCardProps) {
  const [show, setShow] = useState(false);

  return (
    <div className="rounded-xl bg-muted p-6">
      <div className="flex items-start gap-x-10">
        <p className="font-semibold shrink-0">Stream Key</p>
        <div className="space-y-2 w-full">
          <div className="w-full flex items-center gap-x-2">
            <Input
              value={value || ""}
              type="password"
              disabled
              placeholder="Streamkey"
            />
            <CopyButton value={value || ""} />
          </div>
          <Button size="sm" variant="link">
            Show
          </Button>
        </div>
      </div>
    </div>
  );
}
