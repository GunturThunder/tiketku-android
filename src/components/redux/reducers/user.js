const initialState = {
  users: {},
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_USER_PENDING':
      return {
        ...state,
      };
    case 'GET_USER_REJECTED':
      return {
        ...state,
      };
    case 'GET_USER_FULFILLED':
      return {
        users: action.payload.data.result,
      };
    case 'POST_USERS_PENDING':
      return {
        ...state,
      };
    case 'POST_USERS_REJECTED':
      return {
        ...state,
      };
    case 'POST_USERS_FULFILLED':
      const newUsers = [...state.users, action.payload.data.result];
      return {
        ...state,
        users: newUsers,
      };
    case 'UPDATE_USER_PENDING':
      return {
        ...state,
      };

    case 'UPDATE_USER_REJECTED':
      return {
        ...state,
      };

    case 'UPDATE_USER_FULFILLED':
      const newUserAfterUpdate = state.users.map(user => {
        if (user.id === action.payload.data.result.id) {
          return action.payload.data.result;
        }
        return user;
      });
      return {
        ...state,
        users: newUserAfterUpdate,
      };
    default:
      return state;
  }
};

export default users;
