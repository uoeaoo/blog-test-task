import React from 'react'
import Button from './Button'
import ButtonProps from './Button'

interface ModalProps {
    isOpen: boolean,
    onRequestClose: () => void,
    title: string,
    description: string,
    fullText: string
}

const Modal: React.FC<ModalProps> = ({
    isOpen,
    onRequestClose,
    title,
    description,
    fullText,
}) => {

    if (!isOpen) return null 

  return (
    <div>
        <div onClick={onRequestClose}></div>
        <div>
            <h2>
                {title}
            </h2>
            <p>
                {description}
            </p>
            <p>
                {fullText}
            </p>
            <Button 
                label="Close"
                type='button'
                onClick={onRequestClose}
                isEnabled={true}
            />
        </div>
    </div>
  )
}

export default Modal