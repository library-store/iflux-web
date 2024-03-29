import React from 'react';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  children?: React.ReactNode;
  className?: string;
  variant?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  onClick,
  variant = 'primary',
  type = 'button',
  ...rest
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`inline-flex justify-center items-center gap-[14px] focus:shadow-outline rounded px-4 py-2 hover:opacity-80 focus:outline-none ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
