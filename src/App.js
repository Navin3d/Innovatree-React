import React from "react";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter.js";
import axios from "axios";
import cookie from "js-cookie";
import configureStore from "./redux/store/ConfigureStore.js";
import { setUser } from "./redux/actions/UserAction.js";
import { baseUrl } from "./utills/baseUrl.js";

const store = configureStore();

// const getLoggedInUser = async () => {
//   const userId = cookie.get("UserId");
//   const Authorization = cookie.get("Authorization");
//   const headers = { Authorization };

//   const url = `${baseUrl}/users/profile/${userId}`;

//   const userResponse = await axios.get(url, { headers });

//   return userResponse.data;
// };

// store.dispatch(setUser(getLoggedInUser()));

// store.dispatch(
//   setUser({
//     userId: "ffbad287-cb97-43f7-b447-4ae115c1bb89",
//     firstName: "Krishnaraghavan",
//     lastName: "M",
//     aadharNumber: "3333 4444 1111 2222",
//     role: "USER",
//     plantsCount: 16,
//     email: "krishnaraghavan@aol.com",
//     phoneNumber: "6383696701",
//     walletBalence: 86486,
//     amountPaid: 8000,
//     amountEarned: 0,
//     addressBook: [],
//     achievements: [],
//   })
// );

const App = () => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

export default App;
