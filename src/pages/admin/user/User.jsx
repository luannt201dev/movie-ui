import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from "@mui/icons-material"
import { Link } from "react-router-dom"
import "./user.css"

const User = () => {
    return (
        <div className="user">
            <div className="user__title-container">
                <h1 className="user--title">Edit User</h1>
                <Link to="/new-user" >
                    <button className="user-add--button">Create</button>
                </Link>
            </div>
            <div className="user__container">
                <div className="user-show">
                    <div className="user-show__top">
                        <img 
                            src="https://image-us.eva.vn/upload/1-2020/images/2020-03-20/3-1584713048-659-width800height700.jpg" 
                            alt="" 
                            className="user-show--img"
                        />
                        <div className="user-show__top--title">
                            <div className="user-show--username">Anna Hart</div>
                            <div className="user-show--job">Soft Engineer</div>
                        </div>
                    </div>
                    <div className="user-show__bottom">
                        <span className="user-show--title">Account Details</span>
                        <div className="user-show__info">
                            <PermIdentity className="user-show__icon" />
                            <span className="user-show__info--title">annahart99</span>                        </div>
                        <div className="user-show__info">
                            <CalendarToday className="user-show__icon" />
                            <span className="user-show__info--title">10.12.1999</span>
                        </div>
                        <span className="user-show--title">Contact Details</span>
                        <div className="user-show__info">
                            <PhoneAndroid className="user-show__icon" />
                            <span className="user-show__info--title">+1 234 5678</span>
                        </div>
                        <div className="user-show__info">
                            <MailOutline className="user-show__icon" />
                            <span className="user-show__info--title">annahart99@gmail.com</span>
                        </div>
                        <div className="user-show__info">
                            <LocationSearching className="user-show__icon" />
                            <span className="user-show__info--title">New york | USA</span>
                        </div>
                    </div>
                </div>
                <div className="user-update">
                    <span className="user-update--title">Edit</span>
                    <form className="user-update__form">
                        <div className="user-update-left">
                            <div className="user-update--item">
                                <label htmlFor="">Username</label>
                                <input type="text" 
                                    placeholder="annahart99" 
                                    className="user-update--input" 
                                />
                            </div>
                            <div className="user-update--item">
                                <label htmlFor="">Full name</label>
                                <input type="text" 
                                    placeholder="Anna Hart" 
                                    className="user-update--input" 
                                />
                            </div>
                            <div className="user-update--item">
                                <label htmlFor="">Email</label>
                                <input type="text" 
                                    placeholder="annahart99@gmail.com" 
                                    className="user-update--input" 
                                />
                            </div>
                            <div className="user-update--item">
                                <label htmlFor="">Phone number</label>
                                <input type="text" 
                                    placeholder="+1 234 5678" 
                                    className="user-update--input" 
                                />
                            </div>
                            <div className="user-update--item">
                                <label htmlFor="">Address</label>
                                <input type="text" 
                                    placeholder="New York | USA" 
                                    className="user-update--input" 
                                />
                            </div>
                        </div>
                        <div className="user-update__right">
                            <div className="user-update-upload">
                                <img 
                                    src="https://image-us.eva.vn/upload/1-2020/images/2020-03-20/3-1584713048-659-width800height700.jpg" 
                                    alt="" 
                                    className="user-update--img"
                                />
                                <label htmlFor="file"><Publish className="user-update--icon"/></label>
                                <input type="file" id="file" style={{display: "none"}} />
                            </div>
                            <button className="user-update__button">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default User
