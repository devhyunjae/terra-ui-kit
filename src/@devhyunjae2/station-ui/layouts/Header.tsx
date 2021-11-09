import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import { BasicProps } from './entities';

interface HeaderProps extends BasicProps {
  fixed?: boolean;
}

const Header: FC<HeaderProps> = (props) => {
  return <Container {...props} />;
};

const Container = styled('header')<HeaderProps>`
  height: 64px;
  flex: 0 0 auto;
  border-bottom: 2px solid var(--color-desaturated300);
  ${({ fixed = false }) =>
    fixed &&
    css`
      position: sticky;
      top: 0;
    `}
`;

export { Header };
