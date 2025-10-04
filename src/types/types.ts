export interface ProjectsTypes {
  id: number;
  name: string;
  description: string;
  link: string | null;
  repository: string;
  image: string | null;
  icons: { id: number; name: string; icon: { src: ""; alt: "" } }[];
  video: {
    id: string;
    name: string;
  } | null;
}

export interface ContextThemeType {
  theme: string;
  changeTheme: () => void;
}

export interface Content {
    link_header_1: string;
    link_header_2: string;
    link_header_3: string;
    link_header_4: string;
    link_header_5: string;
    title_button_theme: string;
    title_main: string;
    words_typer: string[];
    description_main: string;
    title_linkedin: string;
    title_github: string;
    title_gmail: string;
    title_cv: string;
    title_sec_projects: string;
    link_sec_projects: string;
    github_card_project: string;
    link_card_project: string;
    title_sec_skills: string;
    button_skill_1: string;
    button_skill_2: string;
    button_skill_3: string;
    title_sec_aboutme: string;
    aboutme: string[];
    title_sec_articles: string;
    link_sec_articles: string;
    title_sec_contacts: string;
    link_box_contacts: string;
    title_sec_footer: string;
    link_page_projects: string;
    button_page_project_1: string;
    button_page_project_2: string;
    projects: ProjectsTypes[];
  }

export interface ContextLanguagesTypes {
  content: Content | null;
  lang: "es" | "en";
  toggleLanguage: () => void; 
}

type Skill = { id: number; name: string; icon: { src: string; alt: string } };

export interface SkillsTypes {
  frontend: {  skills: Skill[] };
  backend: { skills: Skill[] };
  tools: {  skills: Skill[] };
}

export interface ArticleTypes {
  id?: number;
  title: string;
  description: string;
  created_at: string;
}
