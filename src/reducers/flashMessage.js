import { ADD_FLASH_MESSAGE, DELETE_FLASH_MESSAGE } from "actions/types";
import shortid from "shortid";
import findIndex from "lodash/findIndex";
export default (state = [], action) => {
  switch (action.type) {
    case ADD_FLASH_MESSAGE:
      return [
        ...state,
        {
          id: shortid.generate(),
          title: action.message.title,
          text: action.message.text,
          messageTitle: action.message.messageTitle
        }
      ];
    case DELETE_FLASH_MESSAGE:
      const index = findIndex(state, { id: action.id });
      if (index >= 0) {
        return [...state.slice(0, index), ...state.slice(index + 1)];
      }
      break;
    default:
      return state;
  }
};
