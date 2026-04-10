import { Mail, MapPin, Phone } from "lucide-react";
import ContactInfoItem from "./ContactInfoItem";

interface ContactInfoSectionProps {
  heading: string;
  description: string;
}

const ContactInfoSection = ({
  heading,
  description,
}: ContactInfoSectionProps) => {
  return (
    <div className="lg:col-span-2 space-y-8">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          {heading}
        </h2>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>

      <div className="space-y-5">
        <ContactInfoItem
          icon={MapPin}
          title="Head Office"
          value="197-A, The Mall, Rawalpindi, Pakistan"
        />
        <ContactInfoItem
          icon={Phone}
          title="Phone"
          value="+92-51-111-734-636"
        />
        <ContactInfoItem
          icon={Mail}
          title="Email"
          value="export@ferozsons-labs.com"
        />
      </div>
    </div>
  );
};

export default ContactInfoSection;
