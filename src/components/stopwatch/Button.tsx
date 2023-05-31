import React, { FC } from 'react'

type ButtonProps = {
  backgroundColor: string
  color: string
  text: string
  disabled?: boolean
  onClick: () => void
}

export const Button: FC<ButtonProps> = ({ backgroundColor, color, text, disabled, onClick }) => (
  <button
    style={{
      backgroundColor,
      color,
      display: 'inline-block',
      border: 0,
      padding: '10px',
      marginRight: '10px',
      fontWeight: 'bold',
      outline: 'none',
      borderRadius: '3px'
    }}
    disabled={disabled}
    onClick={onClick}>
      {text}
  </button>
)
