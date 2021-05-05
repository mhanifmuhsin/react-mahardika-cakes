import * as React from 'react';
import '../Pricing/styles.css';

export default function CardItem(props) {
    return (
        <div className="card" style={{width: "15rem", border:"none"}}>
            <img src={props.item.cakeImage} style={{width:"236px",height:"236px"}} alt="Card image cap" onClick={()=>props.detail(props.item.id)}/>
                <div className="card-body">
                    <p className="text-center pricing-title">{props.item.nama}</p>
                    <p className="text-center pricing-price">IDR {props.item.harga}</p>
                </div>
        </div>
    )
}