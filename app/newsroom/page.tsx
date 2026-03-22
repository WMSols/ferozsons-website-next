import PageHero from "@/components/layout/PageHero";
import ArticlesGrid from "@/components/sections/ArticlesGrid";
import { articles } from "@/data/articles";

export const metadata = {
  title: "Newsroom",
  description:
    "Stay updated with the latest news and developments from Ferozsons Laboratories.",
};

export default function NewsroomPage() {
  const newsArticles = articles.filter((a) => a.type === "news");

  return (
    <>
      <PageHero
        title="Newsroom"
        subtitle="Stay updated with the latest news and developments from Ferozsons Laboratories."
        breadcrumbs={[{ label: "Newsroom" }]}
      />
      <ArticlesGrid articles={newsArticles} showDate columns={3} />
    </>
  );
}
