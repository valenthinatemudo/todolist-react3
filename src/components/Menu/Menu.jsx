import { Link } from 'react-router-dom'
import './menu.styles.css'

const Menu = () => {
    return (
        <ul className='menu'>
            <li className='autora'>
               <Link className='autora-link' to='/'>Autora</Link>
                </li>
            <li className='lista'>
                <Link className='lista-link' to='/lista'>Projeto -Lista de tarefas</Link>
                </li>
        </ul>
    )
}

export default Menu