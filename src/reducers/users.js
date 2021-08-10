let initialState = {
  list: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_USR": {
      return { ...state, list: action.payload };
    }
    default:
      return state;
  }
};

export default usersReducer;

export async function fetchUsers(dispatch, getState) {
  const response = await fetch("http://localhost:5000/users");
  const data = await response.json();
  dispatch({ type: "LOAD_USR", payload: data });
}
