import React from 'react';

import { SectionEl } from './Section.styled';

type TProps = {
  children: React.ReactNode;
};

export const Section: React.FC<TProps> = ({ children }) => {
  return <SectionEl title="">{children}</SectionEl>;
};
