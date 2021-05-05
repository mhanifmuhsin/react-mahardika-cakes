import * as React from 'react';

import './styles.css';

export default function Category() {
    return (
        <div className="container-fluid">
            <div className="row justify-content-between text-center">
                <div className="card category-1" style={{ width: "25rem", height: "41rem" }}>
                    <div className="content-recipe">
                        <h1>Best Selling</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in aliquet metus. Cras faucibus mauris ac hendrerit fringilla. Duis non leo nisi. Donec sodales mattis enim.</p>
                        <button>SHOP NOW</button>
                    </div>
                </div>
                <div className="card category-2" style={{ width: "25rem", height: "41rem" }}>
                    <div className="content-recipe">
                        <h1>Paling Populer</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in aliquet metus. Cras faucibus mauris ac hendrerit fringilla. Duis non leo nisi. Donec sodales mattis enim.</p>
                        <button style={{background: "rgba(255, 255, 255, 0.01)", border: "1px solid #fff"}}>SHOP NOW</button>
                    </div>
                </div>
                <div className="card category-3" style={{ width: "25rem", height: "41rem" }}>
                    <div className="content-recipe">
                        <h1>Kue Enak</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in aliquet metus. Cras faucibus mauris ac hendrerit fringilla. Duis non leo nisi. Donec sodales mattis enim.</p>
                        <button style={{background: "rgba(255, 255, 255, 0.01)",border: "1px solid #fff"}}>SHOP NOW</button>
                    </div>
                </div>

            </div>
        </div>
    )
}