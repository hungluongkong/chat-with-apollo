import React from 'react';
import Input from '../Input';
import text from '../../constants/localize';

export interface InputFormProps {
  hint?: string,
  onSubmit: (text: string) => void,
}

const InputForm: React.SFC<InputFormProps> = ({
  hint = '',
  onSubmit,
}: InputFormProps) => {
  const textRef = React.createRef<HTMLInputElement>();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (textRef.current) {
      onSubmit(textRef.current?.value);
      event.currentTarget.reset();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="inline-form">
      <Input textRef={textRef} type="text" hint={hint} />
      <button type="submit">{text.SEND}</button>
    </form>
  );
};

export default InputForm;
