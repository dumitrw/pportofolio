import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "dumitrw",
  DESCRIPTION: "Acesta este portofoliul meu persoal.",
  AUTHOR: "Dumitru Chirinciuc",
}

// Work Page
export const WORK: Page = {
  TITLE: "Portofoliu",
  DESCRIPTION: "Proiecte realizate de mine.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Chestii random, poate si utile.",
}

// projects Page 
export const projects: Page = {
  TITLE: "Proiecte",
  DESCRIPTION: "Proiecte recente la care am lucrat.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Cauta",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links


export const LINKS: Links = [

  { 
    TEXT: "Acasa", 
    HREF: "/", 
  },
  /*
 { 
    TEXT: "Portofoliu", 
    HREF: "/work", 
  },
  

  
  */
  { 
    TEXT: "Proiecte", 
    HREF: "/projects", 
  },
  { 
    TEXT: "Blog", 
    HREF: "/blog", 
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "contact@dumitrw.ro",
    HREF: "mailto:contact@dumitrw.ro",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "dumitrw",
    HREF: "https://github.com/dumitrw",
  },
  { 
    NAME: "Instagram",
    ICON: "instagram",
    TEXT: "dumitrw.png",
    HREF: "https://instagram.com/dumitrw.png",
  },
]

