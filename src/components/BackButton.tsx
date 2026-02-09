"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BackButton() {
  const router = useRouter();

  return (
    <Button
      variant="ghost"
      onClick={() => router.back()}
      className="
        text-white
        hover:bg-white/10
        flex items-center gap-2
        mb-4
      "
    >
      <ArrowLeft size={18} />
      Back
    </Button>
  );
}
