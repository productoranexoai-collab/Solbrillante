import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

// FIX: Removed explicit JSX.Element return type to fix 'Cannot find namespace JSX' error.
export const Button = ({
  children,
  variant = 'primary',
  onClick,
  type = 'button',
  className = '',
}: ButtonProps) => {
  const baseClasses =
    'inline-block px-6 py-3 rounded-lg font-medium text-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses = {
    primary:
      'bg-indigo-700 text-white hover:bg-indigo-800 focus:ring-indigo-500',
    secondary:
      'bg-amber-500 text-white hover:bg-amber-600 focus:ring-amber-400',
  };
  
  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      whileHover={{
        scale: 1.03,
      }}
      whileTap={{
        scale: 0.98,
      }}
    >
      {children}
    </motion.button>
  );
};
