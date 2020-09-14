import React, { memo } from 'react';
import { MessageType } from '../../types';
import { isEqualAllProps } from '../../helpers/index';

export interface MessageProps {
  message: MessageType
}

const Message = ({ message }: MessageProps) => (
  <div className="message">
    <div className="user-name">
      {`User ${message.userId} `}
      <span className="msg-date">{new Date(message.createdAt).toLocaleDateString()}</span>
    </div>
    <div>{message.text}</div>
  </div>
);

export default memo(Message, isEqualAllProps);
