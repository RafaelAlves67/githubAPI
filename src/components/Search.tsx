import { BsSearch } from "react-icons/bs"
import { useState } from "react"
import React from "react"

import Styles from "./Search.module.css"

type Props = {
    loadUser: (userName: string) => Promise<void>
}

const Search = ({loadUser}: Props) => {

    const [userName, setUserName] = useState<string>("")

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if(e.key === "Enter") {
            loadUser(userName)
        }
    }

  return (
    <div className={Styles.search}>
        <h2>Busque por um usuário: </h2>
        <p>Conheça seus melhores repositórios</p>

        <div className={Styles.search_container}>
            <input type="text" placeholder='Digite o nome do usuário'  onKeyDown={handleKeyDown}    onChange={(e) => setUserName(e.target.value)}/>
            <button onClick={() => loadUser(userName)}><BsSearch /></button>
        </div>
    </div>
  )
}

export default Search