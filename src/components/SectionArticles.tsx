"use client";
import "@/styles/section-articles.css";
import ContainerTitle from "./ContainerTitle";
import { API_KEY_ARTICLES, URL_API_ARTICLES } from "@/utils/options";
import CardArticle from "./CardArticle";
import { ArticleTypes } from "@/types/types";
import { useEffect, useState } from "react";

export default function SectionArticles() {
  const [articles, setArticles] = useState<ArticleTypes[]>([]);

  useEffect(() => {
    const getArticles = async () => {
      const response = await fetch(`${URL_API_ARTICLES}${API_KEY_ARTICLES}`);
      const allArticles = await response.json();
      if (allArticles.length > 0) setArticles(allArticles);
    };
    getArticles();
  }, []);

  return (
    <section className="section-articles" id="articulos">
      <ContainerTitle>Artículos</ContainerTitle>
      <ul className="list-articles">
        {articles.length > 0 &&
          articles
            .slice(0, 5)
            .map(({ id, created_at, title, description }) => (
              <CardArticle
                key={id}
                title={title}
                created_at={created_at}
                description={description}
              />
            ))}
      </ul>
      <a
        href="https://blog-bytes-kohl.vercel.app/posts"
        target="_blank"
        rel="noopener noreferrer"
        className="link-articles">
        Ver Todos los artículos
      </a>
    </section>
  );
}
