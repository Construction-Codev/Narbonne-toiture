"use client";

import { track } from "@vercel/analytics";
import type {
  AnchorHTMLAttributes,
  MouseEvent,
} from "react";

type TrackedAnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  eventName: string;
  eventData?: Record<string, string | number | boolean>;
};

export default function TrackedAnchor({
  eventName,
  eventData,
  onClick,
  ...props
}: TrackedAnchorProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    track(eventName, eventData);
    onClick?.(event);
  }

  return <a {...props} onClick={handleClick} />;
}