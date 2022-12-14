import { Link } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';
import './styles.css'

export default function CCOE(){

    return(
        <div className='ccoe'>
            <div className='header'>
                <h1>CCoE - Cloud Center of Excellence</h1>
            </div>
            <div className='bodyCCOE'>
                <div className='textCCOE'>
                    <h4>
                        Um Time técnico responsável pela gestão e o desenvolvimento relacionado 
                        ao ambiente Cloud, com a finalidade de evoluir e qualificar as operações, 
                        através das melhores práticas, frameworks e governança.<br/><br/>
                        Principais funções:<br/><br/>
                        <ul>
                            <li>ADOÇÃO</li>
                            Realização de testes e revisões do plano de transição.<br/><br/>
                            <li>ESTRATÉGIA</li>
                            Definições, motivações e resultados de negócios.<br/><br/>
                            <li>GOVERNANÇA</li>
                            Gerenciamento de práticas e processos no ambiente cloud.<br/><br/>
                            <li>AUTOMOÇÃO</li>
                            Permitir eficiência operacional e aumento da produtividade.<br/><br/>
                        </ul>
                    </h4>
                </div>
                <div className='imageCCOE'></div>
            </div>
            <div className='footer'>
                <Link to='/cloud'><IoIosArrowBack className='arrowLeftWhite'/></Link>
                <Link to='/services'><IoIosArrowForward className='arrowRightWhite'/></Link>
            </div>
        </div>
    )
}