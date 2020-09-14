import React, { useState, useEffect } from 'react';
import { useSubscription } from '@apollo/client';
import { MessageType } from '../../types/index';
import { MESSAGE_ADDED_SUB } from '../../graphQL/index';
import text from '../../constants/localize';
import Message from '../Message';
import { isEqualAllProps } from '../../helpers/index';

interface MessagesPanelProps {
  messages: MessageType[]
}

const MessagesPanel = ({
  messages,
}: MessagesPanelProps) => {
  const { data } = useSubscription<{msgAdded: MessageType}>(MESSAGE_ADDED_SUB);
  const [mewMessages, setMewMessages] = useState<MessageType[]>(messages);
  const endRef = React.createRef<HTMLDivElement>();

  const scrollToBottom = () => {
    if (endRef.current) { endRef.current.scrollIntoView({ behavior: 'smooth' }); }
  };

  // Scroll to bottom when new Msg update
  useEffect(() => {
    scrollToBottom();
  }, [mewMessages]);

  if (!mewMessages) {
    return (<p className="error-text">{text.NO_MESSAGE}</p>);
  }

  // If this is new msg. add to array
  if (data && (
    !mewMessages.length
    || data.msgAdded.id !== mewMessages[mewMessages.length - 1].id
  )) {
    setMewMessages([...mewMessages, data.msgAdded]);
  }

  return (
    <div className="message-panel">
      {
        mewMessages.map((msg: MessageType) => <Message message={msg} key={msg.id} />)
      }
      <div ref={endRef} />
    </div>
  );
};

export default React.memo(MessagesPanel, isEqualAllProps);
