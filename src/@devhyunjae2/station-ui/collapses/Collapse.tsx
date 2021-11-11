import React, { FC, ReactNode, useState } from 'react';
import styled, { css } from 'styled-components';

interface Props {
  title: ReactNode;
}

const Collapse: FC<Props> = ({ children, title }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <TitleSection onClick={() => setOpen(!open)}>{title}</TitleSection>
      <ContentSection open={open}>{children}</ContentSection>
    </>
  );
};

const TitleSection = styled('section')`
  cursor: pointer;
`;

const ContentSection = styled('section')<{ open: boolean }>`
  transform: scaleY(0);
  transform-origin: top;
  transition: transform 0.1s ease;
  ${({ open }) =>
    open &&
    css`
      transform: scaleY(1);
    `}
`;

export { Collapse };
