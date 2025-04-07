"use client";

import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import { useState, useEffect, useCallback, useRef } from "react";
import { MenuIcon, X } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  const [selectedCategory, setSelectedCategory] = useState("Olympiad");
  const [isMobile, setIsMobile] = useState(false);
  const [visibleSections, setVisibleSections] = useState<{
    work: boolean;
    education: boolean;
    awards: boolean;
  } | null>(null);
  
  const initializedRef = useRef(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      
      if (!initializedRef.current || (mobile !== isMobile)) {
        setVisibleSections({
          work: !mobile,
          education: !mobile,
          awards: !mobile
        });
        initializedRef.current = true;
      }
    };
    
    handleResize();
    
    let resizeTimer: NodeJS.Timeout;
    const debouncedResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(handleResize, 100);
    };
    
    window.addEventListener("resize", debouncedResize);
    
    return () => {
      window.removeEventListener("resize", debouncedResize);
      clearTimeout(resizeTimer);
    };
  }, [isMobile]);

  const toggleSection = useCallback((section: 'work' | 'education' | 'awards') => {
    setVisibleSections(prev => prev ? {
      ...prev,
      [section]: !prev[section]
    } : null);
  }, []);

  if (visibleSections === null) {
    return null;
  }

  return (
    <main className="flex flex-col min-h-[100dvh] space-y-4">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={`hi, i'm ${DATA.name.split(" ")[0]} 👋`}
              />
              <BlurFadeText
                className="max-w-[600px] md:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">about</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-base text-muted-foreground dark:prose-invert">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">work experience</h2>
              <button 
                onClick={() => toggleSection('work')} 
                className="p-1 rounded-md hover:bg-muted"
              >
                {visibleSections.work ? <X size={20} /> : <MenuIcon size={20} />}
              </button>
            </div>
          </BlurFade>
          
          {visibleSections.work && DATA.work.map((work, id) => {
            let mobileTitle = work.company;
            if (work.company === "Stanford Artificial Intelligence Laboratory") {
              mobileTitle = "Stanford AI Lab";
            } else if (work.company === "Mu Manor (Hacker House)") {
              mobileTitle = "Mu Manor";
            }
            
            return (
              <BlurFade
                key={work.company}
                delay={BLUR_FADE_DELAY * 6 + id * 0.05}
              >
                <ResumeCard
                  key={work.company}
                  logoUrl={work.logoUrl}
                  altText={work.company}
                  title={isMobile ? mobileTitle : work.company}
                  subtitle={work.title}
                  href={work.href}
                  badges={work.badges}
                  period={`${work.start} - ${work.end ?? "Present"}`}
                  description={work.description}
                  positionType={work.positionType}
                  subtabs={work.subtabs ? work.subtabs.map(subtab => {
                    let mobileSubtabTitle = subtab.title;
                    let mobileSubtabSubtitle = subtab.subtitle;
                    
                    if (subtab.title === "Ubicloud (YC W24)") {
                      mobileSubtabTitle = "Ubicloud";
                    } else if (subtab.title === "Stanford Institute for Economic Policy Research") {
                      mobileSubtabTitle = "SIEPR";
                    } else if (subtab.title === "Zage Lab, UC San Diego") {
                      mobileSubtabTitle = "UC San Diego";
                    } else if (subtab.title === "Burton Lab, Scripps Research Institute") {
                      mobileSubtabTitle = "Scripps Research";
                    } else if (subtab.title === "San Diego Supercomputer Center") {
                      mobileSubtabTitle = "SDSC";
                    }
                    
                    if (isMobile && subtab.subtitle) {
                      if (subtab.subtitle === "Product Manager, Growth") {
                        mobileSubtabSubtitle = "Product Manager";
                      }
                    }
                    
                    return {
                      ...subtab,
                      title: isMobile ? mobileSubtabTitle : subtab.title,
                      subtitle: isMobile ? mobileSubtabSubtitle : subtab.subtitle
                    };
                  }) : undefined}
                  isMobile={isMobile}
                />
              </BlurFade>
            );
          })}
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">education</h2>
              <button 
                onClick={() => toggleSection('education')} 
                className="p-1 rounded-md hover:bg-muted"
              >
                {visibleSections.education ? <X size={20} /> : <MenuIcon size={20} />}
              </button>
            </div>
          </BlurFade>
          
          {visibleSections.education && DATA.education.map((education, id) => {
            let mobilePeriod = education.end ? `${education.start} - ${education.end}` : education.start;
            if (education.school === "Stanford University" && isMobile) {
              mobilePeriod = "Sep 2023 - On Leave";
            }
            
            return (
              <BlurFade
                key={education.school}
                delay={BLUR_FADE_DELAY * 8 + id * 0.05}
              >
                <ResumeCard
                  key={education.school}
                  href={education.href}
                  logoUrl={education.logoUrl}
                  altText={education.school}
                  title={education.school}
                  subtitle={education.degree}
                  period={isMobile ? mobilePeriod : (education.end ? `${education.start} - ${education.end}` : education.start)}
                  isEducation={true}
                  subtabs={education.subtabs ? education.subtabs.map(subtab => {
                    let mobileSubtabTitle = subtab.title;
                    let mobileSubtabSubtitle = subtab.subtitle;
                    
                    if (subtab.title === "San Diego State University") {
                      mobileSubtabTitle = "SDSU";
                    }
                    
                    if (isMobile && subtab.subtitle) {
                      if (subtab.subtitle === "Dual Enrollment, Mathematics") {
                        mobileSubtabSubtitle = "Dual Enrollment";
                      }
                    }
                    
                    return {
                      ...subtab,
                      title: isMobile ? mobileSubtabTitle : subtab.title,
                      subtitle: isMobile ? mobileSubtabSubtitle : subtab.subtitle
                    };
                  }) : undefined}
                  isMobile={isMobile}
                />
              </BlurFade>
            );
          })}
        </div>
      </section>
      <section id="awards">
        <div className="flex flex-col gap-4">
          {isMobile ? (
            /* Mobile layout - stacked vertically */
            <>
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold">awards</h2>
                <button 
                  onClick={() => toggleSection('awards')} 
                  className="p-1 flex items-center justify-center h-8 w-8 rounded-md hover:bg-muted"
                  aria-label={visibleSections.awards ? "Collapse awards" : "Expand awards"}
                >
                  {visibleSections.awards ? <X size={20} /> : <MenuIcon size={20} />}
                </button>
              </div>
              
              {visibleSections.awards && (
                <div className="flex gap-2 overflow-x-auto py-1 -mt-1">
                  {["Olympiad", "Research", "Other"].map((tab) => (
                    <div 
                      key={tab} 
                      className={`px-3 py-1 rounded-md text-center cursor-pointer text-sm ${tab === selectedCategory ? "bg-foreground text-background" : "bg-muted text-foreground"}`}
                      onClick={() => setSelectedCategory(tab === "Other" && selectedCategory === "Startup" ? "Other" : tab)}
                    >
                      {tab}
                    </div>
                  ))}
                </div>
              )}
            </>
          ) : (
            /* Desktop layout - side by side */
            <div className="flex items-center">
              <h2 className="text-xl font-bold mr-auto">awards</h2>
              
              {visibleSections.awards && (
                <div className="flex gap-2 mr-3">
                  {["Olympiad", "Research", "Other"].map((tab) => (
                    <div 
                      key={tab} 
                      className={`px-3 py-1 rounded-md text-center cursor-pointer text-sm ${tab === selectedCategory ? "bg-foreground text-background" : "bg-muted text-foreground"}`}
                      onClick={() => setSelectedCategory(tab === "Other" && selectedCategory === "Startup" ? "Other" : tab)}
                    >
                      {tab}
                    </div>
                  ))}
                </div>
              )}
              
              <button 
                onClick={() => toggleSection('awards')} 
                className="p-1 flex items-center justify-center h-8 w-8 rounded-md hover:bg-muted"
                aria-label={visibleSections.awards ? "Collapse awards" : "Expand awards"}
              >
                {visibleSections.awards ? <X size={20} /> : <MenuIcon size={20} />}
              </button>
            </div>
          )}
          
          {visibleSections.awards && (
            <ul>
              {DATA.awards
                .filter(award => {
                  const displayCategory = award.category === "Startup" ? "Other" : award.category;
                  return displayCategory === selectedCategory;
                })
                .map((award, index, arr) => (
                  <li 
                    key={award.title} 
                    className={`py-3 ${index < arr.length - 1 ? "border-b border-border" : ""}`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-x-2">
                        <span className="text-base font-medium">{award.title}</span>
                        {(!isMobile && award.tag) && (
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
          )}
        </div>
      </section>
      <section id="contact" className="mt-0">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-6">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                get in touch
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
                want to chat? just shoot me an email at{" "}
                <Link
                  href="mailto:amoghc@stanford.edu"
                  className="text-blue-500 hover:underline"
                >
                  amoghc@stanford.edu
                </Link>{" "}
                or{" "}
                <Link 
                  href="https://cal.com/amoghchaturvedi/30min" 
                  target="_blank"
                  className="text-blue-500 hover:underline"
                >
                  schedule a 30-minute call
                </Link>{" "}
                and i&apos;ll respond within a few hours (i&apos;m always online{" "}
                <span role="img" aria-label="crying emoji">
                  😭
                </span>
                ).
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}