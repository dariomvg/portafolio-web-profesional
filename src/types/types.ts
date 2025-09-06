export interface ProjectsTypes {
  id: number;
  name: string;
  description: string;
  link: string;
  image: string | null;
  icons: { id: number; name: string; icon: string }[];
  video: {
    id: string;
    name: string;
  } | null;
}

export interface ContextThemeType {
  theme: string | null;
  changeTheme: () => void;
}

type Skill = { id: number; name: string; icon: string };

export interface SkillsTypes {
  frontend: {title: string, skills: Skill[]};
  backend: {title: string, skills: Skill[]};
  tools: {title: string, skills: Skill[]};
  additional: {title: string, skills: Skill[]};
}
