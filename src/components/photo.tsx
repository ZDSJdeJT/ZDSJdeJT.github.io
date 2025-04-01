import { isDesktop } from 'react-device-detect';

import { CustomCursor, useSetCursorVariant } from '@/components/custom-cursor';

function Photo({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  cursorText: string;
}) {
  const { cursorVariant, cursorText, setCursorText } = useSetCursorVariant();

  return (
    <>
      {isDesktop && (
        <CustomCursor
          variant={cursorVariant}
          text={cursorText}
          className="print:hidden"
        />
      )}

      <span
        className={className}
        onMouseEnter={() => {
          setCursorText(props.cursorText);
        }}
        onMouseLeave={() => {
          setCursorText('');
        }}
      >
        {children}
      </span>
    </>
  );
}

export { Photo };
