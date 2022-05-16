const INITIAL_STATE = {
  dataCategory: [],
};

const myReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_CATEGORY":
      // Pego tudo o que está dentro de dataProduct e acrescento o que vier da action
      return {
        ...state,
        dataCategory: [action.categoryId],
      };
    default:
      return state;
  }
};

export default myReducer;
