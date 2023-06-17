const cart = [];
export const handleCart = (state = cart, action) => {
  console.log("insideeeeeeeeeeeeeeeeeeeeeeee redux", state)
  switch (action.type) {
    case "ADDCART":
      return [...state, action.payload];
      break;
    case "DELETECART":
      return (state = state.filter((x) => {
        return x.id !== action.payload.id;
      }));
      break;
    default:
      return state;
      break;
  }
};
