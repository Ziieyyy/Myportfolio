import { SocialLinks } from './SocialLinks';

export function Footer() {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-muted-foreground">
            © 2025 <span className="text-gradient font-medium">Khairul Azizi</span> — Web Developer
          </p>
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
}
