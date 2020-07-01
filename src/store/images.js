export const SET_IMAGE = 'SET_IMAGE';
export const LOAD_IMAGE = 'LOAD_IMAGE';
export const ADD_IMAGE = 'ADD_IMAGE';
export const FOVORITE_IMAGE = 'FOVORITE_IMAGE'

export const setImage = (image) => ({ type: SET_IMAGE, image });
export const loadImage = () => ({ type: LOAD_IMAGE });
export const addImage = (image) => ({ type: ADD_IMAGE, image });
export const setFavoriteImage = (id) => ({ type: FOVORITE_IMAGE, id })

const reducer = (state = [], action) => {
  switch (action.type) {
    case SET_IMAGE:
      return [...state, ...action.image]

    case FOVORITE_IMAGE:
      return [...state].map(item => {
        if (item.id === action.id) {
          return {
            ...item,
            favorite: !item.favorite
          }
        }
        return item
      })

    case ADD_IMAGE:
      return [action.image, ...state]
    default:
      return state;
  }
};

export default reducer;