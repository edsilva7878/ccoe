import { Link } from 'react-router-dom';

import { MdOutlineDeveloperMode } from 'react-icons/md';
import { MdBusinessCenter } from 'react-icons/md';
import { SiSpringsecurity } from 'react-icons/si';
import { DiAws } from 'react-icons/di';
import { DiScrum } from 'react-icons/di';
import { GiGears } from 'react-icons/gi';
import { SiAzuredevops } from 'react-icons/si';
import { FaDollarSign } from 'react-icons/fa';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';
import Card from '../../components/card';

import './styles.css'

export default function Services(){

    return(
        <div className='Services'>
            <div className='title'>DEMAIS FUNÇÕES</div>

            <div className='bodyServices'>
                <Card
                    legend='DESENVOLVIMENTO'
                    icon={<MdOutlineDeveloperMode/>}
                    description='Versatilidade e aumento da capacidade de entrega'>
                </Card>
                <Card
                    legend='NEGÓCIO'
                    icon={<MdBusinessCenter/>}
                    description='Economia, segurança e maior produtividade'>
                </Card>
                <Card
                    legend='SEGURANÇA'
                    icon={<SiSpringsecurity/>}
                    description='Regras rígidas de segurança e privacidade'>
                </Card>
                
                <Card
                    legend='ARQUITETURA'
                    icon={<DiAws/>}
                    description='Plataformas com pool de recursos tecnológicos'>
                </Card>
            </div>

            <div className='bodyServices'>
                <Card
                    legend='AGILIDADE'
                    icon={<DiScrum/>}
                    description='Gerenciamento dinâmico dos projetos'>
                </Card>

                <Card
                    legend='SUSTENTAÇÃO'
                    icon={<GiGears/>}
                    description='Suporte, manutenção e atualização'>
                </Card>

                <Card
                    legend='DEVOPS'
                    icon={<SiAzuredevops/>}
                    description='Integração operacional e gerenciamento eficaz'>
                </Card>
                
                <Card
                    legend='FINOPS'
                    icon={<FaDollarSign/>}
                    description='Investimento rápido e inteligente'>
                </Card>
            </div>

            <div className='footer'>
                <Link to='/ccoe'><IoIosArrowBack className='arrowLeft'/></Link>
                <Link to='/info'><IoIosArrowForward className='arrowRight'/></Link>
            </div>
        </div>
    )
}