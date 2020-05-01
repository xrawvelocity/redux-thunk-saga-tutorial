import axios from "axios";
import API_END_POINT from "../config/index";
import {call, put} from "redux-saga/effects";

const getCharacters = () => {
  return axios.get(API_END_POINT);
};

function* fetchCharacters () {
  try {
    const response = yield call(getCharacters);
    console.log("response", response.data.data);
    yield put({type: "RECEIVE_CHARACTERS", payload: response.data.data});
  } catch (e) {
    // TODO
  }
}

export {fetchCharacters};
