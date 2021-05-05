import CardItem from './CardItem';
import './styles.css';


export default function Pricing(props) {
    
    return (
        <div className='container-pricing'>
            <div className="row justify-content-around">
                {props.items && props.items.map((item, index) => {
                    return <CardItem item={item} detail={props.detail}/>
                })}
            </div>
        </div>
    )
}