import type * as React from "react";
import { Icon } from "./Icon";

export function TextLink({
  children,
  onClick,
  light = false,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  light?: boolean;
}) {
  return (
    <button
      className={`text-link ${light ? "text-link--light" : ""}`}
      onClick={onClick}
    >
      <span>{children}</span>
      <Icon name="arrow" size={18} />
    </button>
  );
}
