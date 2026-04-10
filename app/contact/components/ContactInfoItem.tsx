import { type LucideIcon } from "lucide-react";

interface ContactInfoItemProps {
  icon: LucideIcon;
  title: string;
  value: string;
}

const ContactInfoItem = ({
  icon: Icon,
  title,
  value,
}: ContactInfoItemProps) => {
  return (
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <div>
        <p className="font-semibold text-foreground">{title}</p>
        <p className="text-sm text-muted-foreground">{value}</p>
      </div>
    </div>
  );
};

export default ContactInfoItem;
