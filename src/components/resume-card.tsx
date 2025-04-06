"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  description?: string;
  positionType?: string;
  isEducation?: boolean;
  subtabs?: readonly {
    title: string;
    subtitle?: string;
    logoUrl?: string;
    period: string;
    positionType?: string;
    description?: string;
  }[];
}

export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
  positionType,
  isEducation = false,
  subtabs,
}: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [expandedSubtabs, setExpandedSubtabs] = React.useState<{[key: number]: boolean}>({});
  const [mounted, setMounted] = React.useState(false);

  // Check if the card has subtabs but no description (like High School Internships)
  const hasSubtabsNoDescription = subtabs && subtabs.length > 0 && (!description || description === "");

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (!isEducation && (description || subtabs)) {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };

  const handleSubtabClick = (e: React.MouseEvent, index: number) => {
    e.preventDefault();
    e.stopPropagation();
    setExpandedSubtabs(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <Link
      href={href || "#"}
      className="block cursor-pointer"
      onClick={handleClick}
    >
      <motion.div
        whileHover={{ scale: isEducation ? 1 : 1.01 }}
        transition={{ duration: 0.2 }}
      >
        <Card className="flex">
          <div className="flex-none">
            <Avatar className="border size-12 m-auto bg-muted-background dark:bg-foreground">
              <AvatarImage
                src={logoUrl}
                alt={altText}
                className="object-contain"
              />
              <AvatarFallback>{altText[0]}</AvatarFallback>
            </Avatar>
          </div>
          <div className="flex-grow ml-4 items-center flex-col group">
            <CardHeader>
              <div className="flex flex-col gap-y-0">
                <div className="flex items-center justify-between">
                  <h3 className="inline-flex items-center justify-center font-bold leading-none text-sm sm:text-sm">
                    {title}
                    {badges && (
                      <span className="inline-flex gap-x-1">
                        {badges.map((badge, index) => (
                          <Badge
                            variant="secondary"
                            className="align-middle text-xs"
                            key={index}
                          >
                            {badge}
                          </Badge>
                        ))}
                      </span>
                    )}
                    {!isEducation && (
                      <motion.div
                        animate={{ rotate: isExpanded ? 90 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronRightIcon
                          className={cn(
                            "ml-1 size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100"
                          )}
                        />
                      </motion.div>
                    )}
                  </h3>
                  <div className="text-sm tabular-nums text-muted-foreground">
                    {period}
                  </div>
                </div>
                <div className="flex items-start justify-between">
                  {subtitle && <div className="font-sans text-sm whitespace-pre-line" dangerouslySetInnerHTML={{ __html: subtitle }} />}
                  {positionType && (
                    <div className="text-sm text-muted-foreground text-right">
                      {positionType}
                    </div>
                  )}
                </div>
              </div>
            </CardHeader>
            <AnimatePresence>
              {description && isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-2 text-sm sm:text-sm overflow-hidden"
                >
                  {description}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </Card>
      </motion.div>
      <AnimatePresence>
        {subtabs && subtabs.length > 0 && mounted && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className={cn(
              "pl-6 mt-1 relative border-l-2 border-muted ml-4",
              isEducation ? "space-y-2" : 
              hasSubtabsNoDescription && isExpanded ? "space-y-2" : 
              description ? "space-y-2" : 
              isExpanded ? "space-y-2" : 
              "hidden"
            )}
          >
            {subtabs.map((subtab, index) => (
              <motion.div 
                key={index} 
                className="pl-4 py-1 cursor-pointer" 
                onClick={(e) => handleSubtabClick(e, index)}
                initial={{ y: 5, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                whileHover={{ 
                  scale: 1.01
                }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
              >
                <div className="flex justify-between items-center gap-x-2">
                  <div className="flex items-center">
                    <Avatar className="border size-10 mr-3 bg-muted-background dark:bg-foreground">
                      <AvatarImage
                        src={subtab.logoUrl || logoUrl}
                        alt={subtab.title}
                        className="object-contain"
                      />
                      <AvatarFallback>{subtab.title[0]}</AvatarFallback>
                    </Avatar>
                    <div className="group">
                      <h3 className="inline-flex items-center font-bold leading-none text-sm sm:text-sm">
                        {subtab.title}
                        {!isEducation && (
                          <motion.div
                            animate={{ rotate: expandedSubtabs[index] ? 90 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ChevronRightIcon
                              className={cn(
                                "ml-1 size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100",
                              )}
                            />
                          </motion.div>
                        )}
                      </h3>
                      {subtab.subtitle && (
                        <div className={cn("font-sans text-sm", isEducation ? "-mt-1" : "")}>{subtab.subtitle}</div>
                      )}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm tabular-nums text-muted-foreground">
                      {subtab.period}
                    </div>
                    {subtab.positionType && (
                      <div className="text-sm text-muted-foreground">
                        {subtab.positionType}
                      </div>
                    )}
                  </div>
                </div>
                <AnimatePresence>
                  {subtab.description && (isEducation || expandedSubtabs[index]) && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-2 text-sm ml-[52px] overflow-hidden"
                    >
                      {subtab.description}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </Link>
  );
};