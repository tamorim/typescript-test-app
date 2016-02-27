import { ADD_POST, INCREASE_LIKES } from '../constants/ActionTypes';

const initialState = [
  {
    id: 0,
    name: 'Thor Amorim',
    post: 'Olar, mundor!',
    postedAt: '17/02/2016',
    likes: 25
  },
  {
    id: 1,
    name: 'Thor Amorim',
    post: 'Cader mundor que n respond',
    postedAt: '18/02/2016',
    likes: 50
  },
  {
    id: 2,
    name: 'Thor Amorim',
    post: 'Xauzin, mundor ):',
    postedAt: '19/02/2016',
    likes: 100
  }
];

export default function posts(state: IPost[] = initialState, action: IAction) {
  switch (action.type) {
    case ADD_POST:
      return [
        ...state,
        {
          id: state.length,
          name: 'Thor Amorim',
          post: action.payload.text,
          postedAt: '26/02/2016',
          likes: 0
        }
      ];

    case INCREASE_LIKES:
      const oldPost = state[action.payload.id];
      const likes = oldPost.likes + 1;
      const post = Object.assign({}, oldPost, { likes });
      return [
        ...state.slice(0, action.payload.id),
        post,
        ...state.slice(action.payload.id + 1)
      ];

    default:
      return state;
  }
};
