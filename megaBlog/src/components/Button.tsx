import { ReactNode } from 'react';

interface ButtonProps {
    children: ReactNode;
    type?: string;
    bgColor?: string;
    textColor?: string;
    className?: string;
    [key: string]: any;
}

const Button = ({
children,
type='button',
bgColor='bg-blue-600',
textColor='text-white',
className = '',
...props
}: ButtonProps) => {
    return ( 
        <button className={`px-4 py-2 rounded-lg ${className} ${bgColor} ${textColor}`} {...props}>
            {children}
        </button>
     );
}
 
export default Button;