import React from "react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-4">RuhanTech<span className="text-primary">.</span></h3>
            <p className="text-muted-foreground max-w-sm leading-relaxed">
              Technology in service of human flourishing. Building infrastructure, intelligence, and educational tools with quiet conviction.
            </p>
          </div>
          <div>
            <h4 className="font-sans font-semibold text-foreground mb-4 uppercase tracking-wider text-xs">Practice Areas</h4>
            <ul className="space-y-3">
              <li><a href="#practices" className="text-muted-foreground hover:text-primary transition-colors text-sm">Educate at Scale</a></li>
              <li><a href="#practices" className="text-muted-foreground hover:text-primary transition-colors text-sm">Build & Scale</a></li>
              <li><a href="#practices" className="text-muted-foreground hover:text-primary transition-colors text-sm">Secure by Design</a></li>
              <li><a href="#practices" className="text-muted-foreground hover:text-primary transition-colors text-sm">Deploy Intelligence</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} RuhanTech. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
