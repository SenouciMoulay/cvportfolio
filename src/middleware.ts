import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Matcher tous les pathnames sauf pour
  // - … s'ils commencent par `/api`, `/trpc`, `/_next` ou `/_vercel`
  // - … ceux contenant un point (par ex. `favicon.ico`)
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)'
}; 