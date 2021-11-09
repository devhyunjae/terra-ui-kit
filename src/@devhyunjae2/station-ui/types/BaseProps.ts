import { HTMLAttributes } from 'react';

export interface BaseProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}
