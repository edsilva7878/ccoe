import { Link } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';
import './styles.css'

export default function Cloud(){

    return(
            <div className='cloud'>
                <div className='header'>
                    <h1>Cloud Computing</h1>
                </div>

                <div className='bodyCloud'>
                    <div className='imageCloud'></div>
                    <div className='textCloud'>
                        <h4>Recursos de TI sob demanda por meio da internet, 
                        com preço definido de acordo com a necessidade.<br/><br/>
                        Sua arquitetura promove a agilidade, elasticidade e economia em todo o processo.<br/><br/>
                        Os três principais tipos são:<br/><br/>
                        <ul>
                            <li>Infraestrutura como serviço (IaaS)</li>
                            Recursos de computação, armazenamento e rede.<br/><br/>
                            <li>Plataforma como serviço (PaaS)</li>
                            Ambiente de desenvolvimento, implantação e infraestrutura.<br/><br/>
                            <li>Software como serviço (SaaS)</li>
                            Solução de software e tecnolgia por meio da internet.
                        </ul>
                        </h4>
                    </div>
                </div>

                <div className='footer'>
                    <Link to='/'><IoIosArrowBack className='arrowLeft'/></Link>
                    <Link to='/ccoe'><IoIosArrowForward className='arrowRight'/></Link>
                </div>
            </div>
    )
}