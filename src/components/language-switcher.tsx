'use client';

import { useLocale } from 'next-intl';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

export const LanguageSwitcher = () => {
  const locale = useLocale();

  const switchToLocale = (newLocale: string) => {
    // Construction directe de l'URL pour éviter les problèmes d'hydratation
    const currentPath = window.location.pathname;
    const pathWithoutLocale = currentPath.replace(`/${locale}`, '') || '/';
    const newPath = `/${newLocale}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`;
    
    // Navigation directe qui préserve mieux le thème
    window.location.href = newPath;
  };

  return (
    <div className="flex items-center rounded-md border bg-background">
      {/* Drapeau Français */}
      <Button
        variant="ghost"
        size="icon-sm"
        onClick={() => switchToLocale('fr')}
        title="Français"
        className={cn(
          "rounded-r-none border-r transition-all",
          locale === 'fr' 
            ? "bg-accent text-accent-foreground shadow-sm scale-105" 
            : "hover:bg-muted/50 opacity-70 hover:opacity-100"
        )}
      >
        <span className="text-lg">🇫🇷</span>
      </Button>
      
      {/* Drapeau Anglais */}
      <Button
        variant="ghost"
        size="icon-sm"
        onClick={() => switchToLocale('en')}
        title="English"
        className={cn(
          "rounded-l-none transition-all",
          locale === 'en' 
            ? "bg-accent text-accent-foreground shadow-sm scale-105" 
            : "hover:bg-muted/50 opacity-70 hover:opacity-100"
        )}
      >
        <span className="text-lg">🇬🇧</span>
      </Button>
    </div>
  );
}; 