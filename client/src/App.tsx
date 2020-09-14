import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_MESSAGE, CREATE_MESSAGE } from './graphQL/index';
import Loading from './components/Loading';
import { MessageType } from './types/index';
import text from './constants/localize';
import MessagesPanel from './components/MessagesPanel/index';
import InputForm from './components/InputForm';
import { getUserId } from './helpers/index';

interface GetMsgResponse {
  messages: MessageType[],
}

interface CreateMsgParam {
  text: string,
  userId: string,
}

const AppChat = () => {
  const { loading, error, data } = useQuery<GetMsgResponse>(GET_MESSAGE, {
  });

  const [createMessage] = useMutation<{}, CreateMsgParam>(CREATE_MESSAGE);

  const onSubmit = (text: string) => {
    createMessage({
      variables: {
        text,
        userId: getUserId(),
      },
    });
  };

  if (loading) {
    return <Loading />;
  }

  if (error || !data) {
    return (<p className="error-text">{text.NO_MESSAGE}</p>);
  }

  return (
    <>
      <div className="welcome-panel">{`${text.WELCOME_USER} ${getUserId()}!`}</div>
      <MessagesPanel messages={data.messages} />
      <InputForm onSubmit={onSubmit} />
    </>
  );
};

export default AppChat;
