import "./categories.css"
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from "@mui/icons-material";
import { categories } from "../../../dummyData"
import { Link } from "react-router-dom"
import { useState } from "react"
import { useDispatch } from "react-redux";

const Categories = () => {
    const [data,setData] = useState(categories);
    const dispatch = useDispatch();
    const handleDelete = (id) => {
        const newData = data.filter(item => item.id !== id);

        setData(newData);
    }
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'name',
          headerName: 'Tên danh mục',
          width: 280,
        },
        {
          field: 'updated_at',
          headerName: 'Ngày cập nhật gần nhất',
          width: 300,
          editable: true,
        },
        {
            field:'inserted_at',
            headerName: 'Ngày khởi tạo',
            width: 300,
            editable: true,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 140,
            renderCell: (params) => {
                return (
                    <div className="categories-list__action">
                        <Link to={"/categories/" + params.row.id}>
                            <button className="categories-list__button--edit">Edit</button>
                        </Link>
                        <DeleteOutline onClick={() => handleDelete(params.row.id)} className="user-list__button--remove" />
                    </div>
                )
            }
        }
      ];

    const handleAddCategory = () => {

    }
    return (
        <div className="categories-list">
            <button className="categories-add--button" onClick={handleAddCategory}>Thêm danh mục</button>
            <DataGrid
                rows={data}
                columns={columns}
                pageSize={9}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    )
}

export default Categories
