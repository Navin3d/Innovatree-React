export const setUser = ({
  userId,
  firstName,
  lastName,
  aadharNumber,
  role,
  plantsCount,
  email,
  phoneNumber,
  walletBalence,
  amountPaid,
  amountEarned,
  addressBook,
  achievements,
}) => ({
  type: "SET_USER",
  user: {
    userId,
    firstName,
    lastName,
    aadharNumber,
    role,
    plantsCount,
    email,
    phoneNumber,
    walletBalence,
    amountPaid,
    amountEarned,
    addressBook,
    achievements,
  },
});

export const logout = () => ({
  type: "LOGOUT",
  user: null,
});
