import { MapPin, Briefcase, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PositionCardProps {
  title: string;
  department: string;
  location: string;
  type: string;
}

export default function PositionCard({
  title,
  department,
  location,
  type,
}: PositionCardProps) {
  return (
    <div className="bg-secondary rounded-lg p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div>
        <h3 className="font-bold text-lg">{title}</h3>
        <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <Briefcase className="h-3 w-3" /> {department}
          </span>
          <span className="flex items-center gap-1">
            <MapPin className="h-3 w-3" /> {location}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3" /> {type}
          </span>
        </div>
      </div>
      <Button className="rounded-full shrink-0">Apply Now</Button>
    </div>
  );
}
