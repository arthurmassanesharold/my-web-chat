// @flow
import { firestore } from 'config';

export const fetchMessages = async (email: string) => {
  const sentMessages = await firestore.collection('messages')
    .where('userEmails', 'array-contains', email)
    .get();
  return (sentMessages.docs.map((messageDoc) => (messageDoc.data())));
};
