import { FiGithub } from 'react-icons/fi';

import { Button } from '@/components/ui/button';

function GithubButton({ link }: { link: string }) {
  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      onClick={() => {
        window.open(link, '_blank', 'noopener,noreferrer');
      }}
    >
      <FiGithub className="h-[1.2rem] w-[1.2rem]" />
      <span className="sr-only">Github</span>
    </Button>
  );
}

export { GithubButton };
