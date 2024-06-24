import {
  Button,
  Checkbox,
  Dialog,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  IconButton,
  Paper,
  Radio,
  RadioGroup,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import {
  CreateCompany,
  DeleteCompany,
  GetAllCompanys,
  GetCompanyByCode,
  UpdateCompany,
} from "../Redux/ActionCreator";
import { connect, useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { OpenPopUp } from "../Redux/Action";
import CloseIcon from "@mui/icons-material/Close";

const Company = (props) => {
  const columns = [
    { id: "id", name: "Id" },
    { id: "name", name: "Name" },
    { id: "email", name: "Email" },
    { id: "phone", name: "Phone" },
    { id: "Address", name: "Address" },
    { id: "type", name: "Company Type" },
    { id: "action", name: "Action" },
  ];

  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [type, setType] = useState("Hello");

  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState(false);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const [edit, setEdit] = useState(false);
  const [title, setTitle] = useState("Create Company");

  const editObj = useSelector((state) => state.company.companyObj);

  useEffect(() => {
    if (Object.keys(editObj).length > 0) {
      setId(editObj.id);
      setName(editObj.name);
      setEmail(editObj.email);
      setPhone(editObj.phone);
      setAddress(editObj.Address);
      setType(editObj.type);
    } else {
      clearState();
    }
  }, [editObj]);

  const setOnPageChange = (eventf, newPage) => {
    setPage(newPage);
  };

  const setOnRowsPerPageChange = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const dispatch = useDispatch();

  const functionAdd = () => {
    setEdit(false);
    setTitle("Create Company");
    openPopUp();
  };

  const openPopUp = () => {
    setOpen(true);
    clearState();
    dispatch(OpenPopUp());
  };

  const closePopUp = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const _obj = { id, name, email, phone, Address: address, type };
    if (edit) {
      dispatch(UpdateCompany(_obj));
    } else {
      dispatch(CreateCompany(_obj));
    }

    closePopUp();
  };

  const handleEdit = (code) => {
    setEdit(true);
    setTitle("Update Company");
    setOpen(true);
    dispatch(GetCompanyByCode(code));
  };

  const handleRemove = (code) => {
    if (window.confirm("Do you want to remove?")) {
      dispatch(DeleteCompany(code));
    }
  };

  const clearState = () => {
    setId(0);
    setName("");
    setEmail("");
    setPhone("");
    setAddress("");
    setType("MNC");
  };

  useEffect(() => {
    props.loadCompany();
  }, []);

  return (
    <>
      <Paper sx={{ margin: "1%" }}>
        <div style={{ margin: "1%" }}>
          <Button variant="contained" onClick={functionAdd}>
            Add New(+)
          </Button>
        </div>

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow style={{ backgroundColor: "midnightblue" }}>
                {columns.map((item) => (
                  <TableCell key={item.id} style={{ color: "white" }}>
                    {item.name}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {props.companyState.companyList &&
                props.companyState.companyList
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, i) => {
                    return (
                      <TableRow key={i}>
                        <TableCell>{row.id}</TableCell>
                        <TableCell>{row.name}</TableCell>
                        <TableCell>{row.email}</TableCell>
                        <TableCell>{row.phone}</TableCell>
                        <TableCell>{row.Address}</TableCell>
                        <TableCell>{row.type}</TableCell>
                        <TableCell sx={{ padding: "0px" }}>
                          <Button
                            sx={{
                              margin: "2px !important",
                            }}
                            variant="contained"
                            color="primary"
                            disableElevation
                            onClick={() => {
                              handleEdit(row.id);
                            }}
                          >
                            Edit
                          </Button>
                          <Button
                            sx={{ margin: "2px !important" }}
                            variant="contained"
                            color="error"
                            disableElevation
                            onClick={() => {
                              handleRemove(row.id);
                            }}
                          >
                            Delete
                          </Button>
                        </TableCell>
                      </TableRow>
                    );
                  })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 20]}
          rowsPerPage={rowsPerPage}
          component={"div"}
          count={props.companyState.companyList.length}
          page={page}
          onPageChange={setOnPageChange}
          onRowsPerPageChange={setOnRowsPerPageChange}
        ></TablePagination>
      </Paper>

      <Dialog open={open} onClose={closePopUp} fullWidth={true} maxWidth="sm">
        <DialogTitle>
          <span>{title}</span>
          <IconButton sx={{ float: "right" }} onClick={closePopUp}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <Stack spacing={2}>
              <TextField
                required
                error={name.length == 0}
                value={name}
                onChange={(e) => setName(e.target.value)}
                label="Name"
                variant="outlined"
              ></TextField>
              <TextField
                required
                error={email.length == 0}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                label="Email"
                variant="outlined"
              ></TextField>
              <TextField
                required
                error={phone.length == 0}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                label="Phone"
                variant="outlined"
              ></TextField>
              <TextField
                multiline
                maxRows={2}
                minRows={2}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                label="Address"
                variant="outlined"
              ></TextField>
              <RadioGroup
                row
                value={type}
                onChange={(e) => setType(e.target.value)}
                label="Type"
                variant="outlined"
              >
                <FormControlLabel
                  value="MNC"
                  label="MNC"
                  control={<Radio color="primary" />}
                ></FormControlLabel>
                <FormControlLabel
                  value="DOMESTIC"
                  label="DOMESTIC"
                  control={<Radio color="primary" />}
                ></FormControlLabel>
              </RadioGroup>

              <FormControlLabel
                checked={checked}
                onChange={(e) => {
                  setChecked(e.target.checked);
                }}
                label="Agree Terms & Conditions"
                control={<Checkbox />}
              ></FormControlLabel>

              <Button
                disabled={!checked}
                variant="contained"
                type="submit"
                onClick={() => {}}
                disableElevation
              >
                Submit
              </Button>
            </Stack>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

Company.propTypes = {
  loadCompany: PropTypes.func.isRequired,
  companyState: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    companyState: state.company,
  };
};

const mapDispatchToProp = (dispatch) => {
  return {
    loadCompany: () => dispatch(GetAllCompanys()),
  };
};

export default connect(mapStateToProps, mapDispatchToProp)(Company);
