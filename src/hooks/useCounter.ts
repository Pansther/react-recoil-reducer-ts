import { useRecoilState } from "recoil";

import { CounterState, counterAtom } from "../store/counterAtom";

export interface IncrementAction {
  type: "INCREMENT";
}

export interface AddAction {
  type: "ADD";
  payload: { num: number };
}

export interface SetAction {
  type: "SET";
  payload: { num: number };
}

export type ActionTypes = IncrementAction | AddAction | SetAction;

const getNewState = (
  state: CounterState,
  action: ActionTypes
): CounterState => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "ADD":
      return { ...state, count: state.count + action.payload.num };
    case "SET":
      return { ...state, count: action.payload.num };
    default:
      return { ...state };
  }
};

const useCounter = () => {
  const [counterState, setCounterState] = useRecoilState(counterAtom);

  const dispatch = (action: ActionTypes) => {
    const newState = getNewState(counterState, action);
    setCounterState(newState);
  };

  return [counterState, { dispatch }] as const;
};

export default useCounter;
