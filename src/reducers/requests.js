let initialState = {
  list: [],
};

const requestsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_REQ": {
      return {
        ...state,
        list: action.payload,
      };
    }
    case "UPDATE_REQ": {
      return state;
    }
    default:
      return state;
  }
};

export default requestsReducer;

export async function fetchReqs(dispatch, getState) {
  const response = await fetch("http://localhost:5000/requests");
  const data = await response.json();
  dispatch({ type: "LOAD_REQ", payload: data });
}

export function UpdateReq(request) {
  return async function UpdateDhThunk(dispatch, getState) {
    await fetch(`http://localhost:5000/requests/${request.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(request),
    });
    dispatch({ type: "UPDATE_REQ", payload: request });
  };
}
