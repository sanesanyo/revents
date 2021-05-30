import { sampleData } from "../../app/api/sampleData";
import { CREATE_EVENT, DELETE_EVENT, UPDATE_EVENT } from "./eventConstants";

const initialState = {
  events: sampleData,
};

export default function eventReducer(state = initialState, { type, payload }) {
  console.log(state);
  switch (type) {
    case CREATE_EVENT:
      return {
        state: {
          ...state.state,
          events: [...state.state.events, payload],
        },
      };
    case UPDATE_EVENT:
      return {
        state: {
          ...state.state,
          events: [
            ...state.state.events.filter((evt) => evt.id !== payload.id),
            payload,
          ],
        },
      };
    case DELETE_EVENT:
      return {
        state: {
          ...state.state,
          events: [
            ...state.state.events.filter((evt) => evt.id !== payload.id),
          ],
        },
      };
    default:
      return {
        state,
      };
  }
}
