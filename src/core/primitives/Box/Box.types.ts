import * as React from 'react';

export interface BoxProps extends React.HTMLAttributes<HTMLElement> {
  /** The HTML tag to render. Defaults to 'div'. */
  as?: React.ElementType;
}
