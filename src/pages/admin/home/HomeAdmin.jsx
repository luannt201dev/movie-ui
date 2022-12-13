import "./home.css"

import FeatureInfo from "../../../components/featureInfo/FeatureInfo"
import Chart from "../../../components/chart/Chart"
import { userData } from "../../../dummyData";
import WidgetSm from "../../../components/widgetSm/WidgetSm";
import WidgetLg from "../../../components/widgetLg/WidgetLg";

const HomeAdmin = () => {
    return (
        <div className="home-admin">
            <FeatureInfo />
            <Chart data={userData} title="User Analytics" dataKey="Active User" grid/>
            <div className="home-widgets">
                <WidgetSm />
                <WidgetLg />
            </div>
        </div>
    )
}

export default HomeAdmin
