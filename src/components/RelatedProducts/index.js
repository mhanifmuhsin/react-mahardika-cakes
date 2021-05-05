import CardItem from '../Pricing/CardItem';
import './styles.css';


export default function RelatedProducts(props) {
    
    return (
        <div className="content-related">
        <div className='row justify-content-around'>
        <h1 className="title-content">Produk terkait</h1>
        <h5 className="list-content">Lihat semua</h5>
        </div>
        <div className='container-related'>
            <div className="row justify-content-around">
                {props.relatedProducts && props.relatedProducts.map((item, index) => {
                    return <CardItem item={item} detail={props.detail}/>
                })}
            </div>
        </div>
        </div>
    )
}