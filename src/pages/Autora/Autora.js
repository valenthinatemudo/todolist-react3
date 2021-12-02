import Menu from '../../components/Menu/Menu'
import AutoraImage from '../../assets/autora-image.jpg'
import Footer from '../../components/Footer/Footer'
import './autora.styles.css'
import { DiGithubAlt } from "react-icons/di" 
import { DiHtml5 } from "react-icons/di" 
import { DiCss3 } from "react-icons/di" 
import { DiJsBadge } from "react-icons/di" 
import { DiReact } from "react-icons/di" 

const Home = () => {
    return (
        <div className='div-autora'>
            <Menu />
            <h1 className='titulo'>Sobre a Autora</h1>
           <div className='div-foto-paragrafo'>
           <img className='foto-autora' src={AutoraImage} 
            alt='foto da autora'/>
            <p className='paragrafo'>Sou nutricionista de formação e desenvolvedora front-end em transição pela reprograma. Embora tenha cursado nutrição e trabalhado na área, não me encontrei na profissão e decidi seguir meu coração e apreender minha segunda paixão, a tecnologia. Descobri então no front-end uma oportunidade de recomeço e desde então busco me aperfeiçoar e estudar todos os dias para atingir meus objetivos.</p>
           </div>
            <a className='link-github' href="https://github.com/valenthinatemudo"> <span className='span-link'>Ver Projetos</span> <DiGithubAlt size={30} /> </a>
            <h2 className="skills-titulo">Minhas Skills</h2>
            <p className="descricao">Conheça as tecnologias que domino:</p>
         <div className="skills-container">
             <div className="skills-box">
                 <p className="front-end">Front-End</p>
                 <i>
                 <DiHtml5  size={30} />
                 <DiCss3  size={30} />
                 <DiJsBadge  size={30} />
                 <DiReact  size={30} />
                 </i>
             </div>
         </div>
            <Footer />
        </div>
    )
}

export default Home