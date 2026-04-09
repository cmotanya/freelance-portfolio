"use client";

import { useSyncExternalStore } from "react";

function subscribe(callback: () => void) {
  const intervalId = setInterval(callback, 1000);
  return () => clearInterval(intervalId);
}

function getSnapshot() {
  return new Intl.DateTimeFormat("en-KE", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZone: "Africa/Nairobi",
  }).format(new Date());
}

const getServerSnapshot = () => "--:--";

export default function CurrentTime() {
  const time = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return <span className="text-primary font-bold underline">{time}</span>;
}
