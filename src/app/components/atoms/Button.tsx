
import React from 'react';
import styles from './Button.module.css';

interface ButtonPropos {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;

}

const Button: React.FC<ButtonProps> = ({ onClick, children, className }) => {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  )
}

export default Button;