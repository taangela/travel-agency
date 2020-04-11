// selectors
export const getOrder = ({order}) => order;
export const getOrderOptions = ({order}) => order.options;

// action name creator
const reducerName = 'order';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const SET_OPTION = createActionName('SET_OPTION');
export const RESET_OPTION = createActionName('RESET_OPTION');

// action creators
export const setOrderOption = payload => ({payload, type: SET_OPTION});
//export const resetOrderOption = payload => ({type: RESET_OPTION});


export function resetOrderOption() {
  return {payload: {}, type: RESET_OPTION};
}



// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case SET_OPTION:
      return {
        ...statePart,
        options: {
          ...statePart.options,
          ...action.payload,
        },
      };
    case RESET_OPTION:
      return {
        ...statePart,
        options: {
          adults: 1,
          children: 0,
          carRental: '',
          accommodation: 'hotel',
          name: '',
          contact: '',
          startDate: '',
          featuers: [],
        },
      };
    default:
      return statePart;
  }
}
