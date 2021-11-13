const shopFilterDefaultState = {
    text: "",
    sortBy: "isTopSelling"
};

const shopReducerFilter = (state = shopFilterDefaultState, action) => {
    switch(action.type) {
        case "SET_TEXT_Filter":
            return {
                ...state,
                text: action.text
            };
        case "SORT_BY_PRICE":
            return {
                ...state,
                sortBy: "price"
            };
        default:
            return state;
    }
}

export default shopReducerFilter;
