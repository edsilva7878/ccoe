import './styles.css'
import { Link } from 'react-router-dom'
import Nuvem from '../../video/nuvem.mp4'

export default function Home() {

  return (
    <div className='home'>
      <video className='video' src={Nuvem} autoPlay loop muted />
      <div className='bodyHome'>
          <Link to='/cloud' className='linkHome'>Center Cloud of Excellence</Link>
          <p className='name'>
            por EDUARDO DA SILVA<br/>
          </p>  
      </div>
    </div>
  )
}
