import { Badge } from "@/components/ui/badge";
import React, { useState } from "react";

interface Award {
  title: string;
  date: string;
  tag?: string;
  category: string;
  description?: string;
}

interface AwardsTabsProps {
  awards: readonly Award[];
}

// Custom tabs implementation instead of using @radix-ui/react-tabs
export const AwardsTabs = ({ awards }: AwardsTabsProps) => {
  const categories = ["Startup", "Research", "Olympiad"];
  const [activeTab, setActiveTab] = useState(categories[0]);

  const filteredAwards = (category: string) => {
    return awards.filter(award => award.category === category);
  };

  return (
    <div className="mb-8">
      <div className="flex justify-end mb-10">
        <div className="flex gap-2">
          {categories.map(category => (
            <button
              key={category} 
              onClick={() => setActiveTab(category)}
              className={`rounded-md text-sm px-4 py-2 ${activeTab === category ? "bg-foreground text-background" : "bg-muted text-foreground"}`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      
      <div>
        {categories.map(category => (
          <div key={category} className={activeTab === category ? "block" : "hidden"}>
            <ul>
              {filteredAwards(category).map((award, index) => (
                <li 
                  key={award.title} 
                  className={`py-4 ${index < filteredAwards(category).length - 1 ? "border-b border-border" : ""}`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-x-2">
                      <span className="font-medium">{award.title}</span>
                      {award.tag && (
                        <Badge variant="outline" className="text-xs font-normal">
                          {award.tag}
                        </Badge>
                      )}
                    </div>
                    <div className="text-sm tabular-nums text-muted-foreground">{award.date}</div>
                  </div>
                  {award.description && (
                    <p className="mt-1 text-sm text-muted-foreground">{award.description}</p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}; 