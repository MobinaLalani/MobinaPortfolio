import React from "react";

type Props = {
  href?: string;
  label: "facebook" | "instagram" | "twitter" | "discord";
};

export default function ConnectionCard({ href = "#", label }: Props) {
  const icons = {
    facebook: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M22 12a10 10 0 1 0-11.6 9.9v-7h-2.4V12h2.4V9.8c0-2.4 1.4-3.7 3.6-3.7 1 0 2 .2 2 .2v2.3h-1.1c-1.1 0-1.4.7-1.4 1.4V12h2.5l-.4 2.9h-2.1v7A10 10 0 0 0 22 12Z" />
      </svg>
    ),

    instagram: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7Zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10Zm-5 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10Z" />
      </svg>
    ),

    twitter: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M22 5.9c-.8.4-1.6.6-2.5.8a4.2 4.2 0 0 0 1.8-2.3 8.4 8.4 0 0 1-2.7 1A4.2 4.2 0 0 0 12 8.3c0 .3 0 .6.1.9A11.9 11.9 0 0 1 3.1 4.9a4.2 4.2 0 0 0 1.3 5.6c-.6 0-1.2-.2-1.7-.4v.1a4.2 4.2 0 0 0 3.4 4.1c-.4.1-.8.2-1.2.2-.3 0-.6 0-.8-.1a4.2 4.2 0 0 0 3.9 2.9A8.5 8.5 0 0 1 2 19.5a12 12 0 0 0 6.5 1.9c7.8 0 12.1-6.5 12.1-12.1v-.6c.8-.6 1.5-1.3 2.1-2.1Z" />
      </svg>
    ),

    discord: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M20.3 4.5A19.7 19.7 0 0 0 15.6 3l-.2.4a13.7 13.7 0 0 1 4.1 2.1 16 16 0 0 0-15 0 13.7 13.7 0 0 1 4.1-2.1L8.4 3a19.7 19.7 0 0 0-4.7 1.5C1.5 7.7.8 11 .9 14.2a19.9 19.9 0 0 0 6.1 3.1l.7-1.1a12.7 12.7 0 0 1-2.1-1 9.3 9.3 0 0 0 .7-.6 13.4 13.4 0 0 0 11.4 0c.2.2.5.4.7.6-.7.4-1.4.7-2.1 1l.7 1.1a19.9 19.9 0 0 0 6.1-3.1c.1-3.2-.6-6.5-2.8-9.7Z" />
      </svg>
    ),
  };

  return (
    <a
      href={href}
      target="_blank"
      className="w-12 h-12 border-2 border-black flex items-center justify-center rounded-md
                 text-foreground hover:text-primary hover:border-primary transition"
    >
      {icons[label]}
    </a>
  );
}
