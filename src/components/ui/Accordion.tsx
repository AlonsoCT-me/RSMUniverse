import type * as React from "react";
import { Icon } from "./Icon";
import { useState } from "react";

export function Accordion({
  title,
  children,
  dark = false,
  open = false,
}: {
  title: string;
  children: React.ReactNode;
  dark?: boolean;
  open?: boolean;
}) {
  const [expanded, setExpanded] = useState(open);
  return (
    <div className={`accordion ${dark ? "accordion--dark" : ""}`}>
      <button onClick={() => setExpanded(!expanded)} aria-expanded={expanded}>
        <span>{title}</span>
        <Icon name={expanded ? "minus" : "plus"} size={17} />
      </button>
      {expanded && <div className="accordion__content">{children}</div>}
    </div>
  );
}
