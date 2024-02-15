import { FaSpinner } from 'react-icons/fa'
import Styles from "./Loader.module.css"

const Loader = () => {
  return (
    <>
    <FaSpinner className={Styles.loader}></FaSpinner></>
  )
}

export default Loader