import {
  MAKE_REQ,
  OPEN_POPUP,
  REQ_ADD_DATA,
  REQ_DELETE_DATA,
  REQ_GET_ALL_FAIL,
  REQ_GET_ALL_SUCC,
  REQ_GET_BY_CODE,
  REQ_UPDATE_DATA,
} from "./ActionType";

export const MakeRequest = () => {
  return {
    type: MAKE_REQ,
  };
};
export const GetAllRequestSucess = (data) => {
  return {
    type: REQ_GET_ALL_SUCC,
    payload: data,
  };
};
export const GetAllRequestFail = (err) => {
  return {
    type: REQ_GET_ALL_FAIL,
    payload: err,
  };
};
export const OpenPopUp = () => {
  return {
    type: OPEN_POPUP,
  };
};
export const AddRequest = (data) => {
  return {
    type: REQ_ADD_DATA,
    payload: data,
  };
};
export const UpdateRequest = (data) => {
  return {
    type: REQ_UPDATE_DATA,
    payload: data,
  };
};
export const DeleteRequest = (code) => {
  return {
    type: REQ_DELETE_DATA,
    payload: code,
  };
};
export const GetByCode = (data) => {
  return {
    type: REQ_GET_BY_CODE,
    payload: data,
  };
};
