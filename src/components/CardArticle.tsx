import { ArticleTypes } from "@/types/types";
import "@/styles/card-article.css";

const CardArticle = ({
  title,
  description,
  created_at: date,
}: ArticleTypes) => {
  return (
    <div className="card-article">
      <p className="date-article">{date}</p>
      <h4 className="title-article">{title}</h4>
      <p className="description-article">{description}</p>
    </div>
  );
};

export default CardArticle;
