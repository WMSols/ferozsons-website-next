import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import PageHero from "@/components/layout/PageHero";
import { articles } from "@/data/articles";

export const metadata = {
  title: "Newsroom",
  description: "Stay updated with the latest news and developments from Ferozsons Laboratories.",
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
      <section className="py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.map((article) => (
              <Card key={article.id} className="overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-48 bg-secondary" />
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider">{article.category}</span>
                    <span className="text-xs text-muted-foreground">
                      {new Date(article.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                    </span>
                  </div>
                  <h3 className="font-bold text-lg mb-2 line-clamp-2">{article.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-3 mb-4">{article.excerpt}</p>
                  <Link href="#" className="inline-flex items-center text-sm text-primary font-medium hover:underline">
                    Read More <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
