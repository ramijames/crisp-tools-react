import React from 'react';
import styles from './Input.module.css';

interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  className?: string;
}

const Input: React.FC<InputProps> = ({ value, onChange, placeholder, className }) => {
  return (
    <input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={className}
    />
  )
}

export default Input;