"use client";

import Link from "next/link";
import { track } from "@vercel/analytics";
import type { ComponentProps, MouseEvent } from "react";

type LinkProps = ComponentProps<typeof Link>;

type TrackedLinkProps = LinkProps & {
  eventName: string;
  eventData?: Record<string, string | number | boolean>;
};

export default function TrackedLink({
  eventName,
  eventData,
  onClick,
  ...props
}: TrackedLinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    track(eventName, eventData);
    onClick?.(event);
  }

  return <Link {...props} onClick={handleClick} />;
}