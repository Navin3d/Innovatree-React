const userReducerDefaultState = [
  //   {
  //     userId: "",
  //     firstName: "",
  //     lastName: "",
  //     aadharNumber: "",
  //     role: "",
  //     plantsCount: "",
  //     email: "",
  //     phoneNumber: "",
  //     walletBalence: "",
  //     amountPaid: "",
  //     amountEarned: "",
  //     addressBook: "",
  //     achievements: "",
  //   },
];

const UserReducer = (state = userReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_USER":
      return [...state, action.user];
    case "EDIT_USER":
      return [...state, ...action.updates];
    case "LOGOUT":
      return [...state, action.user];
    default:
      return state;
  }
};

export default UserReducer;
