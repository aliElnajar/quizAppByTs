import { StateType } from "./utils";

export const initialState: StateType = {
  loading: false,
  questions: [],
  number: 0,
  score: 0,
  gameOver: true,
  deathMatch: false,
};

export const reducerFn = (
  state: StateType,
  action: { type: string; payload?: any }
) => {
  let newState = { ...state };
  switch (action.type) {
    case "START_GAME":
      newState = {
        ...state,
        loading: true,
        gameOver: false,
        score: 0,
        deathMatch: action.payload,
      };
      break;
    case "QUESTIONS_FETCHED":
      newState = { ...state, loading: false, questions: action.payload };
      break;
    case "USER_ANSWERED_CORRECT":
      newState = { ...state, score: state.score + 1 };
      break;
    case "USER_ANSWERED":
      newState = { ...state, number: state.number + 1 };
      break;
    case "FINISH_GAME":
      newState = { ...state, questions: [], number: 0, gameOver: true };
    default:
      return newState;
  }
  return newState;
};
