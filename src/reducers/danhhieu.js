let initialState = {
  list: [],
};

const danhhieuReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_DH": {
      console.log(action.payload);
      return {
        ...state,
        list: [...state.list, action.payload[0]],
      };
    }
    case "LOAD_DH": {
      return { ...state, list: action.payload };
    }
    case "REMOVE_DH": {
      return {
        ...state,
        list: state.list.filter((ele) => ele.id !== action.payload),
      };
    }
    case "UPDATE_DH": {
      return state;
    }
    default:
      return state;
  }
};

export default danhhieuReducer;

export async function fetchDh(dispatch, getState) {
  const response = await fetch("http://localhost:5000/danhhieu");
  const data = await response.json();
  dispatch({ type: "LOAD_DH", payload: data });
}

export function AddDh(danhhieu) {
  return async function AddDhThunk(dispatch, getState) {
    const res = await fetch("http://localhost:5000/danhhieu", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(danhhieu),
    });
    const data = await res.json();
    dispatch({ type: "ADD_DH", payload: data });
  };
}

export function RemoveDh(id) {
  return async function RemoveDhThunk(dispatch, getState) {
    await fetch(`http://localhost:5000/danhhieu/${id}`, {
      method: "DELETE",
    });
    dispatch({ type: "REMOVE_DH", payload: id });
  };
}

export function UpdateDh(danhhieu) {
  return async function UpdateDhThunk(dispatch, getState) {
    fetch(`http://localhost:5000/danhhieu/${danhhieu.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(danhhieu),
    });
    dispatch({ type: "UPDATE_DH", payload: danhhieu });
  };
}
