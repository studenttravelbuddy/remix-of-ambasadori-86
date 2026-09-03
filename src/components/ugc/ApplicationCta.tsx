import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const AMBASSADOR_FORM_URL = "https://isic.sk/ambasadori/";

export function ApplicationCta({ variant = "default" }: { variant?: "default" | "playful" }) {
  return (
    <section
      id="formular"
      className={cn("bg-secondary py-20", variant === "playful" && "bg-brand-yellow")}
    >
      <div className="mx-auto max-w-3xl px-5 text-center">
        <h2 className="font-display text-3xl font-black sm:text-4xl">
          <a
            href={AMBASSADOR_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-brand-pink decoration-4 underline-offset-8 transition-colors hover:text-brand-pink"
          >
            Pošli nám svoje videá
          </a>
        </h2>
        <p className="mt-3 text-muted-foreground">
          Prihlášku vyplníš na stránke isic.sk – zvolíš preukaz, na ktorý máš nárok, a vložíš odkazy
          na svoje videá.
        </p>
        <Button
          asChild
          size="lg"
          className={cn(
            "mt-8 h-12 px-7 font-bold",
            variant === "playful" && "bg-brand-teal text-foreground shadow-none hover:bg-brand-pink hover:text-primary-foreground",
          )}
        >
          <a href={AMBASSADOR_FORM_URL} target="_blank" rel="noopener noreferrer">
            Prejsť na prihlášku <ArrowUpRight aria-hidden />
          </a>
        </Button>
      </div>
    </section>
  );
}
