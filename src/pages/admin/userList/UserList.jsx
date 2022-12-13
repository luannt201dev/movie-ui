import "./userList.css"
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from "@mui/icons-material";
import { userRows } from "../../../dummyData"
import { Link } from "react-router-dom"
import { useState } from "react"

const UserList = () => {
    const [data,setData] = useState(userRows);
    const handleDelete = (id) => {
        const newData = data.filter(item => item.id !== id);

        setData(newData);
    }
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'username',
          headerName: 'Username',
          width: 280,
          renderCell:(params) => {
              return (
                  <div className="user-list__user">
                      <img src={params.row.avatar} alt="" className="user-list__img" />
                        {params.row.username}
                  </div>
              )
          }
        },
        {
          field: 'email',
          headerName: 'Email',
          width: 280,
          editable: true,
        },
        {
            field: 'status',
            headerName: 'Status',
            width: 120,
            editable: true,
        },
        {
          field: 'transactions',
          headerName: 'Transactions',
          sortable: false,
          width: 160,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 140,
            renderCell: (params) => {
                return (
                    <div className="user-list__action">
                        <Link to={"/user/" + params.row.id}>
                            <button className="user-list__button--edit">Edit</button>
                        </Link>
                        <DeleteOutline onClick={() => handleDelete(params.row.id)} className="user-list__button--remove" />
                    </div>
                )
            }
        }
      ];
    return (
        <div className="user-list">
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

export default UserList
