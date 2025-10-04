"use client";
import "@/styles/section-articles.css";
import ContainerTitle from "./ContainerTitle";
import { API_KEY_ARTICLES, URL_API_ARTICLES } from "@/utils/options";
import CardArticle from "./CardArticle";
import { ArticleTypes } from "@/types/types";
import { useEffect, useState } from "react";
import { ContainerViews } from "eff-anim";
import { useLanguage } from "@/contexts/ContextLanguages";

export default function SectionArticles() {
  const [articles, setArticles] = useState<ArticleTypes[]>([]);
  const {content} = useLanguage()
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
      <ContainerTitle>{content?.title_sec_articles}</ContainerTitle>
      <div className="list-articles">
        {articles.length > 0 &&
          articles
            .slice(0, 7)
            .map(({ id, created_at, title, description }) => (
              <ContainerViews threshold={0.8} effect="eff-bottom" key={id}> 
                <CardArticle
                  title={title}
                  created_at={created_at}
                  description={description}
                />

              </ContainerViews>
            ))}
      </div>
      <a
        href="https://blog-bytes-kohl.vercel.app/posts"
        target="_blank"
        rel="noopener noreferrer"
        className="link-articles">
        {content?.link_sec_articles}
      </a>
    </section>
  );
}
