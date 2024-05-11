import { DetailedHTMLProps, HTMLAttributes } from 'react';

declare module './boxStyled' {
  export interface FlexBoxProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    reverse?: boolean;
    primary?: boolean;
  }

  export const FlexBox: import('styled-components').StyledComponent<
    'div',
    any,
    FlexBoxProps,
    never
  >;
}
