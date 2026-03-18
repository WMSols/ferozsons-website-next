import CTABanner from "@/components/layout/CTABanner";
import { Linkedin } from "lucide-react";

export const metadata = {
  title: "Message from the CEO",
  description:
    "A message from Osman Khalid Waheed, Chief Executive Officer of Ferozsons Laboratories Limited.",
};

export default function CEOMessagePage() {
  return (
    <>
      {/* Navy Hero */}
      <section className="bg-navy text-navy-foreground py-16 md:py-20">
        <div className="container">
          <p className="text-xs tracking-[0.2em] uppercase text-primary mb-2">Leadership</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif">Message from the CEO</h1>
        </div>
      </section>

      {/* 2-Column Layout */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-[380px_1fr] lg:grid-cols-[440px_1fr] gap-12 lg:gap-16 max-w-5xl mx-auto">
            {/* Portrait */}
            <div className="order-2 md:order-1">
              <div className="sticky top-28">
                <div className="aspect-[3/4] rounded-lg overflow-hidden bg-secondary mb-6">
                  <img
                    src="/images/ceo-placeholder.jpg"
                    alt="Osman Khalid Waheed — Chief Executive Officer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-xl font-bold font-serif">Osman Khalid Waheed</h2>
                <p className="text-muted-foreground text-sm mb-3">Chief Executive Officer</p>
                <a
                  href="https://pk.linkedin.com/in/okwaheed"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
                >
                  <Linkedin className="h-5 w-5" />
                  Connect on LinkedIn
                </a>
              </div>
            </div>

            {/* Message */}
            <div className="order-1 md:order-2 space-y-6">
              <p className="text-foreground leading-relaxed text-lg">
                As a patient-centric healthcare company, Ferozsons Laboratories Limited is committed to
                providing innovative healthcare solutions and ensuring patient access to world-class diagnosis,
                treatment and cure. 2026 marks our 60th year of putting patients first and seeing every day as
                a new opportunity to earn their trust and our credibility.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Our portfolio of in-licensed products and leading branded generics help improve the quality of
                life of patients suffering from heart disease, diabetes, GI and liver diseases, and cancer.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                In our efforts to address critical healthcare challenges, we have also partnered with some of
                the world&apos;s leading healthcare companies, including Gilead Sciences, Inc. USA – a
                research-based biopharmaceutical company that discovers, develops and commercializes innovative
                medicines in areas of unmet medical need. Hepatitis B and C affects over 20 Million Pakistanis.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                In the areas of cardiovascular and metabolic diseases, we not only produce some of the most
                highly prescribed products for Angina, Congestive Heart Failure (CHF), Diabetes, Hypertension
                and Obesity, we also work with our partners, the Boston Scientific Corporation, to equip
                Healthcare practitioners with complete solutions that extend beyond pharmaceuticals to include
                the most innovative medical devices.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Maternal and Neonatal Child Health represents another serious challenge to our public health
                system. Annually nearly 80,000 mothers and newborns lose their lives in Pakistan, largely from
                preventable complications.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Ferozsons invests significantly in medical and public education programs aimed at patient
                awareness and disease prevention. Our social investments in education and health also help
                create access for patients who are unable to afford treatment.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Please browse through our website and feel free to reach out to us should you have any
                comments, feedback or queries.
              </p>

              {/* Signature */}
              <div className="pt-6 border-t border-border mt-8">
                <p className="font-serif font-bold text-lg text-foreground">Osman Khalid Waheed</p>
                <p className="text-muted-foreground text-sm">Chief Executive Officer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
