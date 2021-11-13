import { createStore, combineReducers } from "redux";

import user from "../reducers/User.js";
import shop from "../reducers/Shop.js";
import shopFilter from "../reducers/ShopFilter.js";

const configureStore = () => {
    const store = createStore(
        combineReducers({
            user,
            shop,
            shopFilter
        })
    );
    return store;
};

export default configureStore;
