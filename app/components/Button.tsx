import React from 'react'

interface ButtonProps {
    label: string,
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
    type?: "button" | "submit" | "reset",
    width?: string,
    height?: string,
    isEnabled?: boolean, 
}
const Button: React.FC<ButtonProps> = ({
    label,
    onClick,
    type = "button",
    width,
    height,
    isEnabled = true,
}) => {
  return (
    <button 
        onClick={onClick}
        type={type}
        style={{ width, height }}
        disabled={!isEnabled}
        >
        {label}
    </button>
  )
}

export default Button