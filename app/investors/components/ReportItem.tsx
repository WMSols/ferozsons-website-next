import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ReportItemProps {
  title: string;
  date: string;
}

export default function ReportItem({ title, date }: ReportItemProps) {
  return (
    <div className="flex items-center justify-between p-4 bg-secondary rounded-lg">
      <div>
        <h3 className="font-medium">{title}</h3>
        <p className="text-xs text-muted-foreground">
          {new Date(date).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </p>
      </div>
      <Button
        variant="outline"
        size="sm"
        className="rounded-full shrink-0"
      >
        <Download className="h-4 w-4 mr-1" /> Download
      </Button>
    </div>
  );
}
