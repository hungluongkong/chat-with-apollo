import { gql } from 'apollo-server';

const msgSchema = gql`
  type Message {
    id: ID!,
    text: String,
    userId: String,
    createdAt: String
  }

  type Query {
    messages: [Message]
  }

  type Mutation {
    createMsg (text: String, userId: ID): Message
  }

  type Subscription {
    msgAdded: Message
  }
`;

export default msgSchema;
