type ButtonProps = {
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
    icon?: string;
    children: React.ReactNode;
    className?: string;
    fullWidth?: boolean;
}

const Button = ({ 
    onClick, 
    type = 'button',
    variant = 'primary',
    icon,
    children,
    className = '',
    fullWidth = false
}: ButtonProps) => {
    const baseClasses = `btn btn-${variant}`;
    const widthClass = fullWidth ? 'w-100' : '';
    const combinedClasses = `${baseClasses} ${className} ${widthClass}`.trim();

    return (
        <button
            type={type}
            className={combinedClasses}
            onClick={onClick}
        >
            <span className="d-inline-flex align-items-center justify-content-center gap-2">
                {icon && <i className={icon}></i>}
                {children}
            </span>
        </button>
    );
};

export default Button;
