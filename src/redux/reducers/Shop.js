const shopReducerDefaultState = []

const shopReducer = (state = shopReducerDefaultState, action) => {
    switch(action.type) {
        case "ADD_PRODUCTS":
            return [
                ...state,
                action.product
            ];
        case "EDIT_PRODUCT":
            return state.map(product => {
                if(product.id === action.id) {
                    return {
                        ...state,
                        ...action.updates
                    }
                } else {
                    return product;
                }
            });
        case "REMOVE_PRODUCT":
            return state.filter(({ id }) => id !== action.id);
        default:
            return state;
    }
}

export default shopReducer;