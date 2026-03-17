import PageHero from "@/components/layout/PageHero";
import CTABanner from "@/components/layout/CTABanner";
import { Heart, ShieldCheck, Star, Users } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Putting Patients First",
    description:
      "We prioritize patient well-being by addressing unmet medical needs, expanding access to world-class treatments, ensuring safety, and maintaining the highest standards of quality across our products and supply chain.",
  },
  {
    icon: ShieldCheck,
    title: "Trust",
    description:
      "We build and sustain trust through ethical conduct, transparency, and mutually beneficial relationships with our partners, stakeholders, employees, and the communities we serve.",
  },
  {
    icon: Star,
    title: "Excellence",
    description:
      "We cultivate a culture that continuously raises the standard of performance, encouraging innovation, accountability, and a relentless pursuit of improvement.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "We believe meaningful progress is achieved through collaboration — working closely with colleagues, healthcare partners, and global organizations to deliver better outcomes for patients.",
  },
];

const missionCommitments = [
  "Creating sustainable long-term value for our shareholders",
  "Investing in the growth and development of our people",
  "Building strong collaborations that drive excellence and innovation",
  "Upholding the highest standards of ethics, integrity, and transparency",
];

export const metadata = {
  title: "Our Purpose",
  description:
    "Our purpose is to advance health and improve lives by placing patients at the center of everything we do.",
};

export default function PurposePage() {
  return (
    <>
      <PageHero
        title="Our Purpose"
        breadcrumbs={[{ label: "About Us", href: "/about" }, { label: "Purpose" }]}
      />

      {/* Purpose Statement */}
      <section className="py-20 md:py-28">
        <div className="container max-w-3xl text-center">
          <p className="text-primary font-medium tracking-wider uppercase text-sm mb-6">Why We Exist</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold leading-snug text-foreground">
            Our purpose is to advance health and improve lives by placing patients at the center of everything
            we do.
          </h2>
          <p className="mt-8 text-muted-foreground leading-relaxed text-lg">
            We are committed to integrating responsibility, trust, and ethical decision-making into our values,
            culture, and business practices to ensure meaningful and sustainable impact.
          </p>
        </div>
      </section>

      {/* Vision */}
      <section className="bg-secondary py-16 md:py-20">
        <div className="container max-w-4xl">
          <div className="grid md:grid-cols-[1fr_2fr] gap-10 items-start">
            <div>
              <p className="text-primary font-medium tracking-wider uppercase text-sm mb-2">Our Vision</p>
              <div className="w-16 h-1 bg-primary rounded-full" />
            </div>
            <p className="text-foreground text-lg md:text-xl font-serif leading-relaxed">
              To achieve leadership in healthcare by placing patients at the center of everything we do,
              earning trust every day through innovation, responsibility, and unwavering commitment to quality.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 md:py-20">
        <div className="container max-w-4xl">
          <div className="grid md:grid-cols-[1fr_2fr] gap-10 items-start">
            <div>
              <p className="text-primary font-medium tracking-wider uppercase text-sm mb-2">Our Mission</p>
              <div className="w-16 h-1 bg-primary rounded-full" />
            </div>
            <div>
              <p className="text-foreground text-lg leading-relaxed mb-8">
                Our mission is to improve quality of life by delivering innovative healthcare solutions that
                expand patient access to effective treatments and cures. In pursuing this mission, we are
                committed to:
              </p>
              <ul className="space-y-4">
                {missionCommitments.map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold">
                      {i + 1}
                    </span>
                    <span className="text-muted-foreground leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-primary font-medium tracking-wider uppercase text-sm mb-3">Our Values</p>
            <h2 className="text-2xl md:text-3xl font-bold font-serif">What Guides Us Every Day</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="bg-card rounded-lg border border-border p-8 hover:shadow-md transition-shadow">
                  <Icon className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-lg font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
