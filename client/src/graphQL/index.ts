import { gql } from '@apollo/client';

export const GET_MESSAGE = gql`
  query Messages {
    messages {
      id
      text
      userId
      createdAt
    }
  }
`;

export const CREATE_MESSAGE = gql`
  mutation CreateMsg ($text: String!, $userId: ID) {
    createMsg (text: $text, userId: $userId) {
      id
      text
      userId
      createdAt
    }
  }
`;

export const MESSAGE_ADDED_SUB = gql`
  subscription AddedMessage {
    msgAdded {
      id
      text
      userId
      createdAt
    }
  }
`;
