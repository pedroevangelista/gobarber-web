import React from 'react';
import { Container } from './styles';

interface ToootipProps {
  title: string;
  className?: string;
}

const Tooltip: React.FC<ToootipProps> = ({ title, className, children }) => {
  return (
    <Container className={className}>
      {children}
      <span>{title}</span>
    </Container>
  );
};

export default Tooltip;
