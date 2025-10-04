"use client";
import { ContextThemeType } from "@/types/types";
import { createContext, useContext, useState } from "react";

const ContextTheme = createContext<ContextThemeType | null>(null);

export const useTheme = () => {
  const context = useContext(ContextTheme);
  if (!context) {
    throw new Error("useTheme must be used within a ContextThemeProvider");
  }
  return context;
};

export default function ProviderTheme({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState("dark");
  const themeDark = "dark";
  
  const changeTheme = () => {
    if (theme === themeDark) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };
  return (
    <ContextTheme.Provider value={{ theme, changeTheme}}>
      {children}
    </ContextTheme.Provider>
  );
}
