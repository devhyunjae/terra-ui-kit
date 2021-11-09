import styled from 'styled-components';
import { BaseProps } from '../types/BaseProps';
import breakpoints from '../theme/breakpoints';

interface Props extends BaseProps {
  gap?: string;
}

const Row = styled('div')<Props>`
  display: flex;
  gap: ${({ gap }) => gap ?? '0'};
  @media (max-width: ${breakpoints.mobile}) {
    display: block;
    > * {
      margin-bottom: ${({ gap }) => gap ?? '0'};
    }
  }
`;

const Col = styled('div')<{ flex?: number; gap?: string }>`
  display: flex;
  flex: ${({ flex }) => flex ?? 'auto'};
  flex-direction: column;
  gap: ${({ gap }) => gap ?? '0'};
`;

export { Row, Col };
