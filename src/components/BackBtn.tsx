import { useNavigate } from 'react-router-dom'
import Styles from "./BackBtn.module.css"

const BackBtn = () => {

    const Navigate = useNavigate()

  return (
    <>
    <button className={Styles.back_btn} onClick={() => Navigate(-1)}> Voltar</button>
    </>
  )
}

export default BackBtn