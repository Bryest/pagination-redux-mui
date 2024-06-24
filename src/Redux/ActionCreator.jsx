import axios from "axios";
import {
  AddRequest,
  DeleteRequest,
  GetAllRequestFail,
  GetAllRequestSucess,
  GetByCode,
  MakeRequest,
  UpdateRequest,
} from "./Action";
import { toast } from "react-toastify";

export const GetAllCompanys = () => {
  return (dispatch) => {
    dispatch(MakeRequest());
    setTimeout(() => {
      axios
        .get("http://localhost:8000/company")
        .then((res) => {
          const _list = res.data;
          dispatch(GetAllRequestSucess(_list));
        })
        .catch((err) => {
          dispatch(GetAllRequestFail(err.message));
        });
    });
  };
};

export const GetCompanyByCode = (code) => {
  return (dispatch) => {
    //dispatch(makeRequest());
    axios
      .get("http://localhost:8000/company/" + code)
      .then((res) => {
        const _obj = res.data;
        dispatch(GetByCode(_obj));
      })
      .catch((err) => {
        toast.error("Failed to fetch the data due to: " + err.message);
      });
  };
};

export const CreateCompany = (data) => {
  return (dispatch) => {
    axios
      .post("http://localhost:8000/company", data)
      .then(() => {
        dispatch(AddRequest(data));
        toast.success("Company created successfully.");
      })
      .catch((err) => {
        toast.error("Failed to create company due to: " + err.message);
      });
  };
};

export const UpdateCompany = (data) => {
  return (dispatch) => {
    axios
      .put("http://localhost:8000/company/" + data.id, data)
      .then(() => {
        dispatch(UpdateRequest(data));
        toast.success("Company Updated Successfully");
      })
      .catch((err) => {
        toast.error("Failed to update company due to: " + err.message);
      });
  };
};
export const DeleteCompany = (code) => {
  return (dispatch) => {
    axios
      .delete("http://localhost:8000/company" + code)
      .then(() => {
        dispatch(DeleteRequest(code));
        toast.success("Company Deleted Successfully");
      })
      .catch((err) => {
        toast.error("Failed to Delete company due to:" + err.message);
      });
  };
};
