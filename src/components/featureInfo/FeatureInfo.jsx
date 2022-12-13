import { ArrowDownward, ArrowUpward } from "@mui/icons-material"
import "./featureInfo.css"

const FeatureInfo = () => {
    return (
        <div className="featured">
            <div className="featured--item">
                <span className="featured--title">Revanue</span>
                <div className="featured__money-container">
                    <span className="featured__money">$2,145</span>
                    <span className="featured__money--rate">
                        -22
                        <ArrowDownward className="featured__icon"/>
                    </span>
                </div>
                <span className="featured-sub">Compared to last month</span>
            </div>
            <div className="featured--item">
                <span className="featured--title">Sales</span>
                <div className="featured__money-container">
                    <span className="featured__money">$4,145</span>
                    <span className="featured__money--rate">
                        -2
                        <ArrowDownward className="featured__icon negative"/>
                    </span>
                </div>
                <span className="featured-sub">Compared to last month</span>
            </div>
            <div className="featured--item">
                <span className="featured--title">Cost</span>
                <div className="featured__money-container">
                    <span className="featured__money">$2,145</span>
                    <span className="featured__money--rate">
                        +22
                        <ArrowUpward className="featured__icon"/>
                    </span>
                </div>
                <span className="featured-sub">Compared to last month</span>
            </div>
        </div>
    )
}

export default FeatureInfo
