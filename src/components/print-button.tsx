import { Printer } from 'lucide-react';

import { Button } from '@/components/ui/button';

function PrintButton({ label }: { label: string }) {
  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      onClick={() => {
        window.print();
      }}
    >
      <Printer className="h-[1.2rem] w-[1.2rem]" />
      <span className="sr-only">{label}</span>
    </Button>
  );
}

export { PrintButton };
