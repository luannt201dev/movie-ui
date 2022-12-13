import "./addUser.css"

const AddUser = () => {
    return (
        <div className="add-user">
            <h1 className="add-user--title">Create New User</h1>
            <form className="add-user__form">
                <div className="add-user--item">
                    <label>Username</label>
                    <input type="text" className="add-user--input" placeholder="username..." />
                </div>
                <div className="add-user--item">
                    <label>Full name</label>
                    <input type="text" className="add-user--input" placeholder="full name..." />
                </div>
                <div className="add-user--item">
                    <label>Email</label>
                    <input type="text" className="add-user--input" placeholder="email..." />
                </div>
                <div className="add-user--item">
                    <label>Password</label>
                    <input type="password" className="add-user--input" placeholder="password..." />
                </div>
                <div className="add-user--item">
                    <label>Phone</label>
                    <input type="text" className="add-user--input" placeholder="phone ..." />
                </div>
                <div className="add-user--item">
                    <label>Address</label>
                    <input type="text" className="add-user--input" placeholder="Address..." />
                </div>
                <div className="add-user--item">
                    <label>Gender</label>
                    <div className="add-user--gender">
                        <input type="radio" name="gender" id="male" value="male"  />
                        <label htmlFor="male">Male</label>
                        <input type="radio" name="gender" id="female" value="male"  />
                        <label htmlFor="female">Female</label>
                        <input type="radio" name="gender" id="other" value="male"  />
                        <label htmlFor="other">Other</label>
                    </div>
                </div>
                <div className="add-user--item">
                    <label >Active</label>
                    <select className="add-user__select" name="active" id="active">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <button className="add-user__button">Create</button>
            </form>
        </div>
    )
}

export default AddUser
