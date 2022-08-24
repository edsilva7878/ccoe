import './styles.css'

export default function Card({legend, icon, description}){

    return(
        <div className='card'>
            <div className='legend'>{legend}</div>
            <div className='icon'>{icon}</div>
            <div className='description'>{description}</div>
        </div>
    )
}