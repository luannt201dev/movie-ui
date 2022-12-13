import { Visibility } from "@mui/icons-material";
import "./widgetSm.css";

const WidgetSm = () => {
    return (
        <div className="widget-sm">
            <span className="widget-sm--title">New members</span>
            <ul className="widget-sm__list">
                <li className="widget-sm__list--item">
                    <img src="https://image-us.eva.vn/upload/1-2020/images/2020-03-20/3-1584713048-659-width800height700.jpg"
                        alt="" 
                        className="widget-sm-img" />
                    <div className="widget-sm-user">
                        <span className="widget-sm-username">Anna Kai</span>
                        <span className="widget-sm-user--job">Software Engineer</span>
                    </div>
                    <button className="widget-sm-button">
                        <Visibility className="widget-sm__icon"/>
                        Display
                    </button>
                </li>
                <li className="widget-sm__list--item">
                    <img src="https://image-us.eva.vn/upload/1-2020/images/2020-03-20/3-1584713048-659-width800height700.jpg"
                        alt="" 
                        className="widget-sm-img" />
                    <div className="widget-sm-user">
                        <span className="widget-sm-username">Anna Kai</span>
                        <span className="widget-sm-user--job">Software Engineer</span>
                    </div>
                    <button className="widget-sm-button">
                        <Visibility className="widget-sm__icon"/>
                        Display
                    </button>
                </li>
                <li className="widget-sm__list--item">
                    <img src="https://image-us.eva.vn/upload/1-2020/images/2020-03-20/3-1584713048-659-width800height700.jpg"
                        alt="" 
                        className="widget-sm-img" />
                    <div className="widget-sm-user">
                        <span className="widget-sm-username">Anna Kai</span>
                        <span className="widget-sm-user--job">Software Engineer</span>
                    </div>
                    <button className="widget-sm-button">
                        <Visibility className="widget-sm__icon"/>
                        Display
                    </button>
                </li>
                <li className="widget-sm__list--item">
                    <img src="https://image-us.eva.vn/upload/1-2020/images/2020-03-20/3-1584713048-659-width800height700.jpg"
                        alt="" 
                        className="widget-sm-img" />
                    <div className="widget-sm-user">
                        <span className="widget-sm-username">Anna Kai</span>
                        <span className="widget-sm-user--job">Software Engineer</span>
                    </div>
                    <button className="widget-sm-button">
                        <Visibility className="widget-sm__icon"/>
                        Display
                    </button>
                </li>
                <li className="widget-sm__list--item">
                    <img src="https://image-us.eva.vn/upload/1-2020/images/2020-03-20/3-1584713048-659-width800height700.jpg"
                        alt="" 
                        className="widget-sm-img" />
                    <div className="widget-sm-user">
                        <span className="widget-sm-username">Anna Kai</span>
                        <span className="widget-sm-user--job">Software Engineer</span>
                    </div>
                    <button className="widget-sm-button">
                        <Visibility className="widget-sm__icon"/>
                        Display
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default WidgetSm
