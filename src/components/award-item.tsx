import { Badge } from "@/components/ui/badge";
import React from "react";

interface AwardItemProps {
  title: string;
  date: string;
  tag?: string;
  description?: string;
  isLast?: boolean;
}

export const AwardItem = ({ title, date, tag, description, isLast = false }: AwardItemProps) => {
  return (
    <li className={`py-4 ${!isLast ? "border-b border-border" : ""}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-2">
          <span className="font-medium">{title}</span>
          {tag && (
            <Badge variant="outline" className="text-xs font-normal">
              {tag}
            </Badge>
          )}
        </div>
        <div className="text-sm tabular-nums text-muted-foreground">{date}</div>
      </div>
      {description && (
        <p className="mt-1 text-sm text-muted-foreground">{description}</p>
      )}
    </li>
  );
}; 