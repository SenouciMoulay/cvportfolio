import {createNavigation} from 'next-intl/navigation';
import {routing} from './routing';

// Wrappers légers autour des APIs de navigation Next.js
// qui considèrent la configuration de routing
export const {Link, redirect, usePathname, useRouter, getPathname} =
  createNavigation(routing); 