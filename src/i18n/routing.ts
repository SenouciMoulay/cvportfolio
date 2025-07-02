import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  // Liste de toutes les locales supportées
  locales: ['fr', 'en'],

  // Utilisé quand aucune locale ne correspond
  defaultLocale: 'fr'
}); 