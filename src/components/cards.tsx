import React from 'react';

export const ChartCard = (): React.ReactElement => {
    // const [ highlyActive, setHighlyActive ] = useState( false );
    // const [ moderatelyActive, setModeratelyActive ] = useState( false );
    // const [ lowActive, setLowActive ] = useState( false );
    return (
        <div className="container--chart">
            {/* active users */}
            <div className="card">
                <h3>Highly Active</h3>
                <svg viewBox="0 0 36 36" className="circular-chart">
                    <path
                        className="circle-bg"
                        d="M18 2.0845
           a 15.9155 15.9155 0 0 1 0 31.831
           a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                        className="circle green"
                        stroke-dasharray="45, 100"
                        d="M18 2.0845
           a 15.9155 15.9155 0 0 1 0 31.831
           a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <text x="18" y="20.35" className="percentage">45%</text>
                </svg>
                <div className="order-info">
                    <span className="total-order">Total Users</span>
                    <span className="order-count">90</span>
                </div>
            </div>
            {/* moderate users */}
            <div className="card">
                <h3>Moderately Active</h3>
                <svg viewBox="0 0 36 36" className="circular-chart">
                    <path
                        className="circle-bg"
                        d="M18 2.0845
           a 15.9155 15.9155 0 0 1 0 31.831
           a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                        className="circle yellow"
                        stroke-dasharray="37, 100"
                        d="M18 2.0845
           a 15.9155 15.9155 0 0 1 0 31.831
           a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <text x="18" y="20.35" className="percentage">37%</text>
                </svg>
                <div className="order-info">
                    <span className="total-order">Total Users</span>
                    <span className="order-count">74</span>
                </div>
            </div>
            {/* low active users */}
            <div className="card">
                <h3>Least Active</h3>
                <svg viewBox="0 0 36 36" className="circular-chart">
                    <path
                        className="circle-bg"
                        d="M18 2.0845
           a 15.9155 15.9155 0 0 1 0 31.831
           a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                        className="circle red"
                        stroke-dasharray="18, 100"
                        d="M18 2.0845
           a 15.9155 15.9155 0 0 1 0 31.831
           a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <text x="18" y="20.35" className="percentage">18%</text>
                </svg>
                <div className="order-info">
                    <span className="total-order">Total Users</span>
                    <span className="order-count">36</span>
                </div>
            </div>
        </div>
    )
}
