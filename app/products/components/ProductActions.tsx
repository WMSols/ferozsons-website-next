import Link from "next/link";
import { FileText, Download } from "lucide-react";

interface ProductActionsProps {
  instructionsPdfUrl: string | null;
  pamphletPdfUrl: string | null;
}

export default function ProductActions({
  instructionsPdfUrl,
  pamphletPdfUrl,
}: ProductActionsProps) {
  return (
    <div className="rounded-3xl p-8 bg-[#3b6a9e] flex flex-col gap-4">
      <Link
        href="#"
        className="w-full rounded-full py-3 px-4 text-center text-white font-medium border border-white bg-transparent hover:bg-white/10 transition-colors"
      >
        FAQs
      </Link>

      {instructionsPdfUrl ? (
        <a
          href={instructionsPdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full rounded-full py-3 px-4 text-center font-medium bg-white text-foreground hover:bg-gray-100 transition-colors"
        >
          <FileText className="h-4 w-4" />
          Instructions For Use
          <Download className="h-4 w-4" />
        </a>
      ) : (
        <Link
          href="#"
          className="w-full rounded-full py-3 px-4 text-center font-medium bg-white text-foreground hover:bg-gray-100 transition-colors"
        >
          Instructions For Use
        </Link>
      )}

      {pamphletPdfUrl ? (
        <a
          href={pamphletPdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full rounded-full py-3 px-4 text-center font-medium bg-white text-foreground hover:bg-gray-100 transition-colors"
        >
          <FileText className="h-4 w-4" />
          Product Information Pamphlet
          <Download className="h-4 w-4" />
        </a>
      ) : (
        <Link
          href="#"
          className="w-full rounded-full py-3 px-4 text-center font-medium bg-white text-foreground hover:bg-gray-100 transition-colors"
        >
          Product Information Pamphlet
        </Link>
      )}
    </div>
  );
}
