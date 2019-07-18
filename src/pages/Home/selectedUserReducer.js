// @flow
import { SET_SELECTED_USER_FOR_CONVERSATION, type Action } from 'pages/Home/actions';

const selectedUserForConversationReducer = (state: ?UserInfo = null, action: Action): ?UserInfo => {
  switch (action.type) {
    case SET_SELECTED_USER_FOR_CONVERSATION:
      return (action.selectedUserForConversation);
    default:
      return (state);
  }
};

export default selectedUserForConversationReducer;
