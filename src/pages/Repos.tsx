import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

import Styles from "./Repos.module.css"

import BackBtn from '../components/BackBtn'
import { RepoProps } from '../types/types'
import Loader from '../components/Loader'
import Repo from '../components/Repo'

const Repos = () => {

    const { userName } = useParams();
    console.log(userName)
    const [repos, setRepos] = useState<RepoProps[] | [] | null>(null)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)

        const loadRepos = async (username: string) => {
            const res = await fetch(`https://api.github.com/users/${username}/repos`)

            const data = await res.json();
            setIsLoading(false)

            // Caso queira filtrar pelos repositórios mais bem avaliados
            // let orderedRepos = data.sort((a:RepoProps,b:RepoProps) => b.stargazers_count - a.stargazers_count)
            // orderedRepos = orderedRepos.slice(0,10)


            console.log(data)
            setRepos(data);

        }

        if(userName){
            loadRepos(userName)
        }

    }, []);

    if(!repos && isLoading){
        return <Loader />
    }

  return (
    <div className={Styles.repos}>
        <BackBtn />
        <h2>Explore os repositórios do usuário: {userName}</h2>

        {repos && repos.length === 0 && <p>Não há repositórios</p>}
        {repos && repos.length > 0 && (
            <div className={Styles.repos_container}>
                {repos.map((repo: RepoProps) => (
                    <Repo key={repo.name} {...repo}/>
                ))}
            </div>
        )}
    </div>
  )
}

export default Repos