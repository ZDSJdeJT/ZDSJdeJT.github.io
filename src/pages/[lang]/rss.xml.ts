import rss from '@astrojs/rss';
import type { APIRoute } from 'astro';

import { SITE_DESCRIPTION, SITE_TITLE } from '@/consts';
import { localeParams } from '@/i18n';

export const getStaticPaths = () => localeParams;

export const GET: APIRoute = async (context) => {
  const locale = context.params.lang;

  const localeTitle =
    typeof SITE_TITLE === 'string' ? SITE_TITLE : SITE_TITLE[locale!];
  const localeDescription =
    typeof SITE_DESCRIPTION === 'string'
      ? SITE_DESCRIPTION
      : SITE_DESCRIPTION[locale!];

  return rss({
    title: localeTitle!,
    description: localeDescription!,
    site: context.site!,
    items: [],
  });
};
