import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ResumeData } from "../../types";
import { 
  Github as GithubIcon,
  Linkedin as LinkedinIcon,
  Twitter as TwitterIcon,
  Mail as MailIcon,
  Globe as GlobeIcon,
  Youtube as YoutubeIcon
} from "lucide-react";

export const DATA: ResumeData = {
  name: "amogh chaturvedi",
  initials: "ac",
  url: "https://stanford.edu/~amoghc",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "twenty. stanford dropout. gathering data. building things on the internet.",
  summary:
    "passionate about solving hard problems & bringing people together. love talking about startups, AI/ML research (HPC, LLM scaling, gpu optimization, ml compilers). reach me at [amoghc@stanford.edu](mailto:amoghc@stanford.edu) or find me on [twitter](https://x.com/OfficialAmogh).",
  avatarUrl: "/me.jpeg",
  skills: [ ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "amoghc@stanford.edu",
    tel: "+1 (858) 305-8856",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/AmoghChaturvedi1",
        icon: GithubIcon,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/amoghchaturvedi1/",
        icon: LinkedinIcon,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/OfficialAmogh",
        icon: TwitterIcon,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: MailIcon,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "KoalaWare (YC X25)",
      href: "",
      badges: [],
      location: "San Francisco, CA",
      title: "Founder",
      logoUrl: "/koalaware.png",
      start: "Dec 2024",
      end: "Present",
      positionType: "Full-time",
      description:
        "Building KoalaWare. Backed by $1M pre-seed from Y Combinator, OVO Fund, and angel investors.",
    },
    {
      company: "Stanford Artificial Intelligence Laboratory",
      badges: [],
      href: "",
      location: "Remote",
      title: "Deep Learning @ NLP Group",
      logoUrl: "/Untitled design.png",
      start: "January 2025",
      end: "Present",
      positionType: "Full-time",
      description:
        "Advised by Niklas Muennighoff; Optimizing LLM scaling, instruction tuning, and embedding architectures for better performance-to-compute ratios.",
    },
    {
      company: "Founders Fund",
      href: "",
      badges: [],
      location: "Santa Clara, CA",
      title: "Investment Research Analyst",
      logoUrl: "/foundersfund.jpeg",
      start: "Dec 2024",
      end: "Feb 2025",
      positionType: "Part-time",
      description:
        "Energy infrastructure investment thesis under GP Sean Liu; Focused on AI-driven grid modernization and distributed energy systems",
    },
    {
      company: "Mu Manor (Hacker House)",
      href: "",
      badges: [],
      location: "San Jose, CA",
      title: "Exploring",
      logoUrl: "/mumanor.jpg",
      start: "Jun 2024",
      end: "Sep 2024",
      positionType: "Full-time",
      description:
        "Raised $45k for SF's most unhinged freshman hacker house — 13 builders, shipped daily, didn't burn the place down. ",
      subtabs: [
        {
          title: "Ubicloud (YC W24)",
          subtitle: "Product Manager, Growth",
          logoUrl: "/ubicloud_logo.jpeg",
          period: "Jun 2024 - Sep 2024",
          positionType: "Internship",
          description: "Open Source AWS alternative; Building AI internal analytics platforms for understanding customer behavior. "
        },
        {
          title: "Stanford Institute for Economic Policy Research",
          subtitle: "ML Researcher",
          logoUrl: "/econ.png",
          period: "Jun 2024 - Sep 2024",
          positionType: "Full-time",
          description: "1 of 30 SIEPR Fellows; Analyzed 2017 TCJA — tax benefits distribution across income levels — under Dr. Goda & the U.S. Dept. of Treasury."
        }
      ]
    },
    {
      company: "Wedgewood Weddings",
      href: "",
      badges: [],
      location: "Escondido, CA",
      title: "Baker, Busboy, Waiter",
      logoUrl: "/images.jpeg",
      start: "Jun 2023",
      end: "Sep 2023",
      positionType: "Part-time",
      description:
        "Worked to cover freshman year tuition expenses. Lost 60 pounds in 3 months — turns out chasing wedding orders burns more calories than the gym.",
    },
    {
      company: "High School Internships",
      href: "",
      badges: [],
      location: "Toronto, ON",
      title: "Computational Biology Researcher",
      logoUrl: "/various_boards_logo.jpeg",
      start: "Jun 2020",
      end: "Dec 2022",
      positionType: "Full-time",
      description: "",
      subtabs: [
        {
          title: "Zage Lab, UC San Diego",
          subtitle: "Researcher",
          logoUrl: "/UCSD.png",
          period: "Sep 2020 - Dec 2022",
          positionType: "Internship",
          description: "Analyzed neuroblastoma RNA-seq data & investigated UBE4B's mechanism in regulating EGFR trafficking pathways in cancer cells."
        },
        {
          title: "Burton Lab, Scripps Research Institute",
          subtitle: "Researcher",
          logoUrl: "/scripps.jpg",
          period: "May 2021 - Jun 2022",
          positionType: "Internship",
          description: "Implemented Nanopore sequencing for real-time base calling and quality control visualization using NanoPack."
        },
        {
          title: "San Diego Supercomputer Center",
          subtitle: "Researcher",
          logoUrl: "/sdsc.jpeg",
          period: "Jun 2020 - Sep 2020",
          positionType: "Internship",
          description: "Developed GNN architecture with Dr. Tsigelny to predict protein-protein interactions in pancreatic cancer. Presented at 2020 REHS conference."
        }
      ]
    },
  ],
  education: [
    {
      school: "Y Combinator",
      href: "",
      degree: "X25 Cohort",
      logoUrl: "/Y_Combinator_logo.svg",
      start: "Apr 2025",
      end: "Jun 2025",
    },
    {
      school: "Stanford University",
      href: "",
      degree: "Bachelors of Science, Computer Science<br/><span class='font-bold'>Activities and societies:</span> Club Table Tennis, Poker, CFO @ Stanford ASES",
      logoUrl: "/stanford.webp",
      start: "Sep 2023",
      end: "Jun 2027 (On Leave)",
    },
    {
      school: "Canyon Crest Academy",
      href: "",
      degree: "High School Diploma<br/><span class='font-bold'>Activities and societies:</span> President @ (CCA iGEM, Bio Club, Biomedical Engineering Society), Math Team, Varsity Academic Team, Science Olympiad Coach",
      logoUrl: "/cca.png",
      start: "Sep 2019",
      end: "Jun 2023",
      subtabs: [
        {
          title: "San Diego State University",
          subtitle: "Dual Enrollment, Mathematics",
          logoUrl: "/sdsu.png",
          period: "Jun 2021 - Sep 2023",
        }
      ]
    },
  ],
  projects: [],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "FirstNet Public Safety Hackathon",
      dates: "March 23rd - 24th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
    {
      title: "DeveloperWeek Hackathon",
      dates: "February 3rd - 4th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <GithubIcon className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "HackDavis",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <GlobeIcon className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <GithubIcon className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <GithubIcon className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <GithubIcon className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    },
    {
      title: "ETH Waterloo",
      dates: "October 13th - 15th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
      links: [
        {
          title: "Organization",
          icon: <GithubIcon className="h-4 w-4" />,
          href: "https://github.com/ethdocnet",
        },
      ],
    },
    {
      title: "Hack The North",
      dates: "September 15th - 17th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a virtual reality application allowing users to see themselves in third person.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Streamer Source",
          icon: <GithubIcon className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/htn2017",
        },
        {
          title: "Client Source",
          icon: <GithubIcon className="h-4 w-4" />,
          href: "https://github.com/dillionverma/RTSPClient",
        },
      ],
    },
    {
      title: "Hack The 6ix",
      dates: "August 26th - 27th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <GithubIcon className="h-4 w-4" />,
          href: "https://github.com/ShareShip/ShareShip",
        },
        {
          title: "Site",
          icon: <GlobeIcon className="h-4 w-4" />,
          href: "https://share-ship.herokuapp.com/",
        },
      ],
    },
    {
      title: "Stupid Hack Toronto",
      dates: "July 23rd, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <GithubIcon className="h-4 w-4" />,
          href: "https://github.com/nsagirlfriend/nsagirlfriend",
        },
      ],
    },
    {
      title: "Global AI Hackathon - Toronto",
      dates: "June 23rd - 25th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Article",
          icon: <GlobeIcon className="h-4 w-4" />,
          href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
        },
        {
          title: "Source",
          icon: <GithubIcon className="h-4 w-4" />,
          href: "https://github.com/TinySamosas/",
        },
      ],
    },
    {
      title: "McGill AI for Social Innovation Hackathon",
      dates: "June 17th - 18th, 2017",
      location: "Montreal, Quebec",
      description:
        "Developed realtime facial microexpression analyzer using AI",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
      links: [],
    },
    {
      title: "Open Source Circular Economy Days Hackathon",
      dates: "June 10th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Source",
          icon: <GithubIcon className="h-4 w-4" />,
          href: "https://github.com/dillionverma/genecis",
        },
      ],
    },
    {
      title: "Make School's Student App Competition 2017",
      dates: "May 19th - 21st, 2017",
      location: "International",
      description: "Improved PocketDoc and submitted to online competition",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
      win: "Top 10 Finalist | Honourable Mention",
      links: [
        {
          title: "Medium Article",
          icon: <GlobeIcon className="h-4 w-4" />,
          href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
        },
        {
          title: "Devpost",
          icon: <GlobeIcon className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <YoutubeIcon className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <GithubIcon className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "HackMining",
      dates: "May 12th - 14th, 2017",
      location: "Toronto, Ontario",
      description: "Developed neural network to optimize a mining process",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
      links: [],
    },
    {
      title: "Waterloo Equithon",
      dates: "May 5th - 7th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
      links: [
        {
          title: "Devpost",
          icon: <GlobeIcon className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <YoutubeIcon className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <GithubIcon className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "SpaceApps Waterloo",
      dates: "April 28th - 30th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
      links: [
        {
          title: "Source",
          icon: <GithubIcon className="h-4 w-4" />,
          href: "https://github.com/dillionverma/earthwatch",
        },
      ],
    },
    {
      title: "MHacks 9",
      dates: "March 24th - 26th, 2017",
      location: "Ann Arbor, Michigan",
      description:
        "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <GithubIcon className="h-4 w-4" />,
          href: "https://github.com/dillionverma/threejs-planes",
        },
      ],
    },
    {
      title: "StartHacks I",
      dates: "March 4th - 5th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
      win: "1st Place Winner",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <GithubIcon className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-ionic",
        },
        {
          title: "Source (Server)",
          icon: <GithubIcon className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-rails",
        },
      ],
    },
    {
      title: "QHacks II",
      dates: "February 3rd - 5th, 2017",
      location: "Kingston, Ontario",
      description:
        "Developed a mobile game which enables city-wide manhunt with random lobbies",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <GithubIcon className="h-4 w-4" />,
          href: "https://github.com/dillionverma/human-huntr-react-native",
        },
        {
          title: "Source (API)",
          icon: <GithubIcon className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/human-huntr-rails",
        },
      ],
    },
    {
      title: "Terrible Hacks V",
      dates: "November 26th, 2016",
      location: "Waterloo, Ontario",
      description:
        "Developed a mock of Windows 11 with interesting notifications and functionality",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
      links: [
        {
          title: "Source",
          icon: <GithubIcon className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
        },
      ],
    },
    {
      title: "Portal Hackathon",
      dates: "October 29, 2016",
      location: "Kingston, Ontario",
      description:
        "Developed an internal widget for uploading assignments using Waterloo's portal app",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <GithubIcon className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },
  ],
  awards: [
    {
      title: "International Science & Engineering Fair",
      date: "2022",
      tag: "Computational Biology",
      category: "Research",
      description: "Selected as one of 1,800 finalists from 80+ countries, 3rd Grand Award, American Statistical Association Special Award, $78,600 Tuition Scholarship"
    },
    {
      title: "International Genetically Engineered Machine (iGEM)",
      date: "2020 - 2022",
      tag: "Bioengineering", 
      category: "Research",
      description: "First Author Publication (Impact Factor: 5.12), 2021: Top 10 Project (Highest Honors) + Gold Medal + Best Education Award; 2020 & 2022: Silver Medal"
    },
    {
      title: "Sigma Xi IFoRE Conference",
      date: "2022",
      tag: "Computational Biology",
      category: "Research",
      description: "Invited Speaker for 'Novel Omics Data Integration Framework'"
    },
    {
      title: "American Invitational Mathematics Examination (AIME)",
      date: "2020-2022",
      tag: "Mathematics",
      category: "Olympiad",
      description: "3X AIME Qualifier, Highest Scores: AMC12 (126), AMC10 (126), AIME (6), Top 250 nationally from 150,000 participants",
    },
    {
      title: "USA Biology Olympiad (USABO)",
      date: "2020",
      tag: "Biology",
      category: "Olympiad",
      description: "Top 500 nationally from 10,000+ participants; Organized USABO at my high school"
    },
    {
      title: "USA Astronomy & Astrophysics Olympiad (USAAAO)",
      date: "2022",
      tag: "Astronomy",
      category: "Olympiad",
      description: "National Astronomy Olympiad (NAO) Qualifier, Top 75 nationally"
    },
    {
      title: "International NCF-Envirothon Finalst",
      date: "2022",
      tag: "Environmental Science",
      category: "Olympiad",
      description: "6th Grand Award Finalist in worlds's largest environmental competition"
    },
    {
      title: "International Medicine Olympiad (IMDO)",
      date: "2021-2022",
      tag: "Biology",
      category: "Olympiad",
      description: "2X Gold Medal Internationally"
    },
    {
      title: "Stanford BASES 50K Startup Challenge",
      date: "2025",
      category: "Startup",
      description: "Won Stanford's oldest and largest startup competition"
    },
  ]
} as const;
