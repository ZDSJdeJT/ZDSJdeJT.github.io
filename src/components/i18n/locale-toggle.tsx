import { Languages } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import type { Dir } from '@/locales';
import type { Lang } from '@/i18n';

function LocaleToggle({
  label,
  currentLocale,
  locales,
  className,
}: {
  label: string;
  currentLocale: Lang;
  locales: {
    label: string;
    value: string;
    lang: string;
    dir?: Dir;
  }[];
  className?: string;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className={className}>
        <Button type="button" variant="outline" size="icon">
          <Languages className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">{label}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuRadioGroup value={currentLocale}>
          {locales.map((item, index) => (
            <DropdownMenuRadioItem
              key={index}
              value={item.lang}
              dir={item.dir}
              onClick={() => {
                // used for 404 page
                localStorage.selectedLang = item.lang;
                location.href = item.value;
              }}
            >
              {item.label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export { LocaleToggle };
