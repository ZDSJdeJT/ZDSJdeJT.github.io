import * as React from 'react';
import chalk from 'chalk';
import { say } from 'cowsay';

function EasterEgg({ message }: { message: string }) {
  React.useEffect(() => {
    console.info(say({ text: chalk.bgBlack.green.bold('%s') }), message);
  }, [message]);

  return null;
}

export { EasterEgg };
