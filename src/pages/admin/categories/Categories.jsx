import "./categories.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
// import { categories } from "../../../dummyData";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import LoadingButton from "@mui/lab/LoadingButton";
import { createCategoryAPI } from "../../../API/categories.api";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  p: 4,
};

const Categories = () => {
  const [data, setData] = useState(categories);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(true);
  const [edit, setEdit] = useState(false);
  const [value, setValue] = useState(null);
  const handleOpen = () => {
    setOpen(true)
    };
  const handleClose = () => {
    setEdit(false)
    setOpen(false)
};
  const [loading, setLoading] = useState(false);
  
  const {categories} = useSelector(state => state.category)

  useEffect(() => {

  }, [])

  function handleClick() {
    setLoading(true);
    if (edit) {

    }
    else {
        createCategoryAPI({name: value.name, dispatch})
    }
  }

  const handleDelete = (id) => {
    const newData = data.filter((item) => item.id !== id);

    setData(newData);
  };
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "name",
      headerName: "Tên danh mục",
      width: 280,
    },
    {
      field: "updated_at",
      headerName: "Ngày cập nhật gần nhất",
      width: 300,
      editable: true,
    },
    {
      field: "inserted_at",
      headerName: "Ngày khởi tạo",
      width: 300,
      editable: true,
    },
    {
      field: "action",
      headerName: "Action",
      width: 140,
      renderCell: (params) => {
        return (
          <div className="categories-list__action">
            <button className="categories-list__button--edit" onClick={() => handleEdit(params.row.id)}>Edit</button>

            <DeleteOutline
              onClick={() => handleDelete(params.row.id)}
              className="user-list__button--remove"
            />
          </div>
        );
      },
    },
  ];

  const handleEdit = (id) => {
    const editValue = categories.find(el => el.id = id);

    setOpen(true)
    setValue(editValue)
    setEdit(true)
  }

  return (
    <>
      <div className="categories-list">
        <button className="categories-add--button" onClick={handleOpen}>
          Thêm danh mục
        </button>
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={9}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ marginBottom: 2 }}
          >
            {edit ? "Thêm danh mục" : "Sửa danh mục"}
          </Typography>
          <TextField
            required
            id="outlined-required"
            label="Tên danh mục"
            defaultValue={value}
            sx={{ width: "100%", marginBottom: 2 }}
            onChange={(e) => setValue({name: e.target.value})}
          />
          <LoadingButton
            size="small"
            onClick={handleClick}
            loading={loading}
            loadingPosition="end"
            variant="contained"
          >
            {!edit ? "Tạo mới" : "Chỉnh sửa"}
          </LoadingButton>
        </Box>
      </Modal>
    </>
  );
};

export default Categories;
