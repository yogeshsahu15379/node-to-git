import './salesVsRefunds.css';
import { Line } from 'react-chartjs-2';
const SalesVsRefunds = (props) =>{
    return(
        <>
            {/* {props.salesOverTimeData.map((data)=>{ */}
                 <div className="SalesVsRefunds dash_wrapper">
                 <h2>{props.SalesVsRefundsData.cardHeading}</h2>
                   <div className="sales_over_time_price_section">
                       <div className="sales_over_time_price priceSection">
                           <h1 className='price'>${props.salesOverTimeData.price}</h1>
                           <span className='price_differance'>{props.salesOverTimeData.defferace}</span>
                       </div>
                       <div className="tooltip_section">
                           <p className="current directValue">current</p>
                           <p className="previous indirectValue">previous</p>
                       </div>
                   </div>
                   <Line data={props.chartData}/>
               </div>
            {/* })} */}
           
        </>
    );
}

export default SalesVsRefunds;