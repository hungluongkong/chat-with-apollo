import { msgData } from '../data';
import { MessageType } from '../types';
import { generateId } from '../helpers';
import pubsub from '../pubsub';

const msgResolver = {
  Query: {
    messages: () => msgData,
  },

  Mutation: {
    createMsg: async (
      _root: any,
      args: { text: string, userId: string },
    ) => {
      const newMsg: MessageType = {
        id: generateId(),
        text: args.text,
        createdAt: new Date().toISOString(),
        userId: args.userId
      };

      pubsub.publish('msgAdded', {
        msgAdded: { ...newMsg }
      });

      msgData.push(newMsg);
    },
  },

  Subscription: {
    msgAdded: {
      subscribe: () => pubsub.asyncIterator(['msgAdded']),
    },
  }
};

export default msgResolver;
