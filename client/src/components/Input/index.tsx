import React from 'react';
import './input.scss';

interface InputProps {
  value?: string,
  type: string,
  hint?: string,
  textRef: React.RefObject<HTMLInputElement>,
  title?: string,
  error?: string,
  onChange?: (str: string) => void,
  disabled?: boolean
}

const Input: React.SFC<InputProps> = ({
  type,
  textRef,
  value = '',
  title = '',
  error = '',
  onChange = () => {},
  disabled = false,
  hint = '',
}: InputProps) => (
  <div className="input-field">
    <label className="input-title">{title}</label>
    <input
      className="input"
      type={type}
      defaultValue={value}
      ref={textRef}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
      placeholder={hint}
      required
      disabled={disabled}
    />
    {
      error && <span className="error-text">{error}</span>
    }
  </div>
);

export default Input;
