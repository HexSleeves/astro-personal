// Set any item to undefined to remove it from the site or to use the default value

export const GLOBAL = {
  // Site metadata
  username: "HexSleeves",
  rootUrl: "https://hex-sleeves.dev",
  shortDescription: "Fullstack Developer",
  longDescription:
    "HexSleeves is a retro-inspired theme for Astro, built using TypeScript, TailwindCSS, and Astro.",

  // Social media links
  githubProfile: "https://github.com/HexSleeves",
  twitterProfile: "https://x.com/jacob_lecoq",
  linkedinProfile: "https://www.linkedin.com/in/jacob-lecoq",

  // Common text names used throughout the site
  articlesName: "Articles",
  projectsName: "Projects",
  viewAll: "View All",

  // Common descriptions used throughout the site
  noArticles: "No featured articles yet.",
  noProjects: "No featured projects yet.",

  // Blog metadata
  blogTitle: "My Thoughts & Takes",
  blogShortDescription: "Practical wisdom, unfiltered thoughts, and hot takes.",
  blogLongDescription:
    "Web development, tech trends, and the occasional programming mishap.",

  // Project metadata
  projectTitle: "Projects and Code",
  projectShortDescription:
    "A list of my web development projects and developer tools.",
  projectLongDescription:
    "All of my projects, including both frontend and full-stack applications.",

  // Profile image
  profileImage: "animated_me.png",

  // Menu items
  menu: {
    home: "/",
    projects: "/projects",
    blog: "/blog",
  },
};

// SEO and structured data
export const SEO = {
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "Person",
    name: GLOBAL.username,
    jobTitle: GLOBAL.shortDescription,
    description: GLOBAL.longDescription,
    url: GLOBAL.rootUrl,
    image: `${GLOBAL.rootUrl}/${GLOBAL.profileImage}`,
    sameAs: [
      GLOBAL.githubProfile,
      GLOBAL.twitterProfile,
      GLOBAL.linkedinProfile,
    ].filter(Boolean),
    knowsAbout: [
      "Web Development",
      "Full Stack Development",
      "TypeScript",
      "JavaScript",
      "Astro",
      "React",
      "TailwindCSS",
    ],
  },
};
