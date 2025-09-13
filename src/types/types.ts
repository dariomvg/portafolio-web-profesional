export interface ProjectsTypes {
  id: number;
  name: string;
  description: string;
  link: string;
  repository: string;
  image: string | null;
  icons: { id: number; name: string; icon: { src: ""; alt: "" } }[];
  video: {
    id: string;
    name: string;
  } | null;
}

export interface ContextThemeType {
  theme: string | null;
  changeTheme: () => void;
}

type Skill = { id: number; name: string; icon: { src: string; alt: string } };


export interface SkillsTypes {
  frontend: { title: string; skills: Skill[] };
  backend: { title: string; skills: Skill[] };
  tools: { title: string; skills: Skill[] };
}


export interface ArticleTypes {
  id?: number;
  title: string; 
  description: string;
  created_at: string;
}