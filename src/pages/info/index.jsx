import './styles.css'
import { Link } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';
import Video from '../../video/link.mp4'

export default function Info() {

  return (
    <div className='info'>
      <video className='videoBody' src={Video} autoPlay loop muted/>
      <div className='bodyInfo'>
        <div className='titleInfo'>LINKS ÚTEIS</div>
        <div className='links'>
        <a className='fonts' target="_blank" href="https://aws.amazon.com">aws.amazon.com</a>
        <a className='fonts' target="_blank" href="https://azure.microsoft.com">azure.microsoft.com</a>
        <a className='fonts' target="_blank" href="https://cloud.google.com">cloud.google.com</a>
        <a className='fonts' target="_blank" href="https://www.embratel.com.br/cloud/servicos-em-nuvem">embratel.com.br/cloud</a>
        <a className='fonts' target="_blank" href="https://github.com/edsilva7878">github.com/edsilva7878</a>
        <a className='fonts' target="_blank" href="https://www.ccoe.netlify.app">ccoe.netlify.app</a>
        </div>
          <div className='footer'>
              <Link to='/services'><IoIosArrowBack className='arrowLeftWhite'/></Link>
              <Link to='/'><IoIosArrowForward className='arrowRightWhite'/></Link>
          </div>
      </div>
    </div>
  )
}