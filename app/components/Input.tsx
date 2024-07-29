import React from 'react'

interface InputProps {
    label: string,
    value: string, 
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    type?: string,
    placeholder?: string,
    required?: boolean,
    height?: string,
    width?: string, 
    maxLength?: number,
}

const Input: React.FC<InputProps> = ({
    label,
    value,
    onChange,
    type = 'text',
    placeholder = '',
    required = false,
    height, 
    width,
    maxLength, 
}) => {
    return (
        <div>
            <label>
                {label}
            </label>
            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                style={{width, height}}
                maxLength={maxLength}
                />        
        </div>
      )
}


export default Input