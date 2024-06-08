import { ButtonHTMLAttributes } from 'react';
import classnames from 'classnames';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'naked' | 'link'
}

const Button: React.FC<ButtonProps> = ({ children, className = '', variant = 'primary', ...rest }) => {
  return (
    <button
      className={classnames(
        'w-fit text-base',
        className,
        {
          'py-4 px-6 text-white bg-primary rounded-lg': variant === 'primary',
          'text-current': variant === 'naked',
          'pb-[0.5px] text-current border-b border-current': variant === 'link'
        }
      )}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;