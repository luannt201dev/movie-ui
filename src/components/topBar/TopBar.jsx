import { Language, NotificationsNone, Settings } from "@mui/icons-material"
import "./topBar.css"
import { Link } from "react-router-dom"

const TopBar = () => {
    return (
        <div className="top-bar">
            <div className="top-bar-wrapper">
                <div className="top-left">
                    <Link to="/">
                        <span className="logo">Netflix ADMIN</span>
                    </Link>
                </div>
                <div className="top-right">
                    <div className="top-bar__icon-container">
                        <NotificationsNone />
                        <span className="top__icon-badge">2</span>
                    </div>
                    <div className="top-bar__icon-container">
                        <Language />
                        <span className="top__icon-badge">2</span>
                    </div>
                    <div className="top-bar__icon-container">
                        <Settings />
                    </div>
                    <img 
                    src="https://image-us.eva.vn/upload/1-2020/images/2020-03-20/3-1584713048-659-width800height700.jpg" 
                    alt="" 
                    className="top__avatar" />
                </div>
            </div>
        </div>
    )
}

export default TopBar
