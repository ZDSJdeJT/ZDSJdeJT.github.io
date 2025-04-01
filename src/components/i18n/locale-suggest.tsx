import * as React from 'react';

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { type Lang, LOCALES } from '@/i18n';

function LocaleSuggest({
  currentLocale,
  title,
  closeButtonLabel,
}: {
  currentLocale: Lang;
  title: string;
  closeButtonLabel: string;
}) {
  const [open, setOpen] = React.useState(false);
  const [link, setLink] = React.useState('');
  const [label, setLabel] = React.useState('');

  const showSuggest = (lang: string) => {
    const pathnames = location.pathname.split('/');
    pathnames[1] = lang;
    setLink(pathnames.join('/'));
    setLabel(LOCALES[lang].label);
    setOpen(true);
  };

  React.useEffect(() => {
    const browserLang = navigator.language.toLowerCase();
    if (
      currentLocale === browserLang ||
      currentLocale === browserLang.split('-')[0] ||
      localStorage.languageSuggestDenied ||
      localStorage.selectedLang
    ) {
      return;
    } else if (Object.keys(LOCALES).includes(browserLang)) {
      showSuggest(browserLang);
    } else if (Object.keys(LOCALES).includes(browserLang.split('-')[0])) {
      showSuggest(browserLang.split('-')[0]);
    }
  }, []);

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>
            <a href={link} className="underline">
              {label}
            </a>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel
            onClick={() => {
              localStorage.languageSuggestDenied = true;
            }}
          >
            {closeButtonLabel}
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export { LocaleSuggest };
