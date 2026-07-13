import React from "react";
import { Link } from "wouter";
import { RUHANQALAM_URL } from "@/lib/site";

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="font-serif text-2xl font-bold tracking-tight text-foreground hover:opacity-80 transition-opacity">
          RuhanTech<span className="text-primary">.</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#mission" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Mission</a>
          <a href="#practices" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Practices</a>
          <a href={RUHANQALAM_URL} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">RuhanQalam</a>
        </nav>
        <div>
          <a href="#contact" className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
            Engage Us
          </a>
        </div>
      </div>
    </header>
  );
}
