
import { UserProps } from '../types/types'
import { MdLocationPin } from 'react-icons/md'
import { Link } from 'react-router-dom'
// css
import Styles from "./User.module.css"

const User = ({login, avatar_url, followers, following, location}: UserProps) => {
  return (
    <div className={Styles.user}>
        <img src={avatar_url} alt={login} />
        <h2>{login}</h2>
        {location && <p className={Styles.location}><MdLocationPin />
        <span>{location}</span>
        </p>}

        <div className={Styles.stats}>
            <div>
                <p>Seguidores:</p>
                <p className={Styles.number}>{followers}</p>
            </div>

            <div>
                <p>Seguindo: </p>
                <p className={Styles.number}>{following}</p>
            </div>
        </div>
        <Link to={`/repos/${login}`}>Ver melhores projetos</Link>
    </div>
  )
}

export default User