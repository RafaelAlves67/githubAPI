
import { RepoProps } from '../types/types'
import { BsCodeSlash } from 'react-icons/bs'
import {AiOutlineStar, AiOutlineFork} from "react-icons/ai"
import { RiGitRepositoryLine } from 'react-icons/ri'

import Styles from "./Repo.module.css"

const Repo = ({name, language, html_url, forks_count, stargazers_count}: RepoProps) => {
  return (
    <div className={Styles.repo}>
        <h3>{name}</h3>
        <p className={Styles.language}>
            <BsCodeSlash />
           <span>{language}</span> 
        </p>

        <div className={Styles.stats}>
            <div>
                <AiOutlineStar />
                <span>{stargazers_count}</span>
            </div>

            <div>
                <AiOutlineFork />
                <span>{forks_count}</span>
            </div>
            </div>
            <a href={html_url} target='_blank' className={Styles.repo_btn}><span>Ver repositório</span>
                    <RiGitRepositoryLine />
           </a>
           
        
    </div>
  )
}

export default Repo