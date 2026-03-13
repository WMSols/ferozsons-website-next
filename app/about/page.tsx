import PageHero from "@/components/layout/PageHero";
import CTABanner from "@/components/layout/CTABanner";

export const metadata = {
  title: "About Us",
  description: "Committed to improving the quality of life through innovative healthcare solutions.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero title="About Us" subtitle="Committed to improving the quality of life through innovative healthcare solutions." breadcrumbs={[{ label: "About Us" }]} />

      <section className="py-16">
        <div className="container max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold mb-6">Our Story</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Founded in 1956 in Nowshera, Pakistan, Ferozsons Laboratories Limited has grown from a small pharmaceutical company to one of Pakistan&apos;s most trusted names in healthcare. Over nearly seven decades, we have consistently upheld our commitment to quality, integrity, and patient welfare.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our founder, the late Mr. Khalid Waheed, envisioned a company that would not only manufacture world-class pharmaceutical products but also contribute meaningfully to the health and well-being of Pakistani society. That vision continues to guide us today.
            </p>

            <h2 className="text-2xl font-bold mb-6 mt-12">Mission & Vision</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-secondary rounded-lg p-8">
                <h3 className="text-lg font-bold mb-3 text-primary">Our Mission</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  To improve the quality of life by providing innovative, high-quality pharmaceutical products and healthcare solutions that are accessible and affordable to all.
                </p>
              </div>
              <div className="bg-secondary rounded-lg p-8">
                <h3 className="text-lg font-bold mb-3 text-primary">Our Vision</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  To be the most respected and trusted pharmaceutical company in Pakistan, recognized for our commitment to excellence, innovation, and patient-first care.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-6">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                { title: "Integrity", desc: "Upholding the highest ethical standards in all our operations." },
                { title: "Quality", desc: "Ensuring every product meets international standards of safety and efficacy." },
                { title: "Innovation", desc: "Continuously seeking better solutions for patient health outcomes." },
              ].map((v) => (
                <div key={v.title} className="text-center p-6">
                  <h3 className="text-lg font-bold mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
