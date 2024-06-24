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

export const initialState = {
  isLoading: false,
  companyList: [],
  companyObj: {},
  errorMessage: "",
};

export const CompanyReducer = (state = initialState, action) => {
  switch (action.type) {
    case MAKE_REQ:
      return {
        ...state,
        isLoading: true,
      };
    case REQ_GET_ALL_SUCC:
      return {
        ...state,
        isLoading: false,
        companyList: action.payload,
      };
    case REQ_GET_ALL_FAIL:
      return {
        ...state,
        isLoading: false,
        companyList: [],
        errorMessage: action.payload,
      };
    case REQ_GET_BY_CODE:
      return {
        ...state,
        companyObj: action.payload,
      };
    case OPEN_POPUP:
      return {
        ...state,
        companyObj: {},
      };
    case REQ_ADD_DATA: {
      const _inputData = { ...action.payload };
      const _maxid = Math.max(...state.companyList.map((o) => o.id));
      _inputData.id = _maxid + 1;
      return {
        ...state,
        companyList: [...state.companyList, _inputData],
      };
    }
    case REQ_UPDATE_DATA: {
      const _data = { ...action.payload };
      const _finalData = state.companyList.map((item) => {
        return item.id === _data.id ? _data : item;
      });
      return {
        ...state,
        companyList: _finalData,
      };
    }
    case REQ_DELETE_DATA: {
      const _filterData = state.companyList.filter((data) => {
        return data.id !== action.payload;
      });
      return {
        ...state,
        companyList: _filterData,
      };
    }
    default:
      return state;
  }
};
