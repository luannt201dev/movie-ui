import "./widgetLg.css"

const WidgetLg = () => {
    const Button = ({type}) => {
        return <button className={"widget-lg__button "+type}>{type}</button>
    }
    return (
        <div className="widget-lg">
            <h3 className="widget-lg--title">Latest transactions</h3>
            <table className="widget-lg__table">
                <tr className="widget-lg__tr">
                    <th className="widget-lg__th">Customer</th>
                    <th className="widget-lg__th">Date</th>
                    <th className="widget-lg__th">Amount</th>
                    <th className="widget-lg__th">Status</th>
                </tr>
                <tr className="widget-lg__tr">
                    <td className="widget-lg--user">
                        <img src="https://image-us.eva.vn/upload/1-2020/images/2020-03-20/3-1584713048-659-width800height700.jpg" 
                        alt="" className="widget-lg__img"/>
                        <span className="widget-lg--name">Kevin Hart</span>
                    </td>
                    <td className="widget-lg--date">2 jun 2021</td>
                    <td className="widget-lg--amount">$122.00</td>
                    <td className="widget-lg--status">
                        <Button type="Approved"/>
                    </td>
                </tr>
                <tr className="widget-lg__tr">
                    <td className="widget-lg--user">
                        <img src="https://image-us.eva.vn/upload/1-2020/images/2020-03-20/3-1584713048-659-width800height700.jpg" 
                        alt="" className="widget-lg__img"/>
                        <span className="widget-lg--name">Kevin Hart</span>
                    </td>
                    <td className="widget-lg--date">2 jun 2021</td>
                    <td className="widget-lg--amount">$122.00</td>
                    <td className="widget-lg--status">
                        <Button type="Approved"/>
                    </td>
                </tr>
                <tr className="widget-lg__tr">
                    <td className="widget-lg--user">
                        <img src="https://image-us.eva.vn/upload/1-2020/images/2020-03-20/3-1584713048-659-width800height700.jpg" 
                        alt="" className="widget-lg__img"/>
                        <span className="widget-lg--name">Kevin Hart</span>
                    </td>
                    <td className="widget-lg--date">2 jun 2021</td>
                    <td className="widget-lg--amount">$122.00</td>
                    <td className="widget-lg--status">
                        <Button type="Pending"/>
                    </td>
                </tr>
                <tr className="widget-lg__tr">
                    <td className="widget-lg--user">
                        <img src="https://image-us.eva.vn/upload/1-2020/images/2020-03-20/3-1584713048-659-width800height700.jpg" 
                        alt="" className="widget-lg__img"/>
                        <span className="widget-lg--name">Kevin Hart</span>
                    </td>
                    <td className="widget-lg--date">2 jun 2021</td>
                    <td className="widget-lg--amount">$122.00</td>
                    <td className="widget-lg--status">
                        <Button type="Declined"/>
                    </td>
                </tr>
                <tr className="widget-lg__tr">
                    <td className="widget-lg--user">
                        <img src="https://image-us.eva.vn/upload/1-2020/images/2020-03-20/3-1584713048-659-width800height700.jpg" 
                        alt="" className="widget-lg__img"/>
                        <span className="widget-lg--name">Kevin Hart</span>
                    </td>
                    <td className="widget-lg--date">2 jun 2021</td>
                    <td className="widget-lg--amount">$122.00</td>
                    <td className="widget-lg--status">
                        <Button type="Approved"/>
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default WidgetLg
