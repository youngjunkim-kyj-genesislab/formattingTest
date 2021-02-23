export const ADDVIDEO = 'addvideo';

export const setVideo = (data) => ({
  type: ADDVIDEO,
  payload: data,
});

const initialState = { video: null };

const videoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDVIDEO: {
      return {
        ...state,
        video: action.payload,
      };
    }

    default:
      return state;
  }
};

export default videoReducer;
