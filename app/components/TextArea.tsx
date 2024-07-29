import React from 'react'

interface TextAreaProps {
    label: string, 
    value: string,
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void,
    placeholder?: string,
    required?: boolean,
    height?: string,
    width?: string, 
    maxLength?: number,
}

const TextArea: React.FC<TextAreaProps> = ({
    label,
    value,
    onChange,
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
        <textarea 
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            style={{width, height}}
        />
    </div>
  )
}

export default TextArea