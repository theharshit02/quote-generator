import React, { useState } from 'react'
import CasinoIcon from '@mui/icons-material/Casino';
import styles from './quotebox.module.css'
import axios from 'axios';
import randomColor from 'randomcolor';

const Quotebox = (props) => {

  const [advicenum, setadvicenum] = useState("000")
  const [advice, setadvice] = useState("Click the dice get an advice 😊")
  const [color, setcolor] = useState([])

  async function submitHandler(e){
    e.preventDefault()
    const url = "https://api.adviceslip.com/advice"
    const result = await axios.get(url)
    setadvicenum(result.data.slip.id)
    setadvice(result.data.slip.advice)

    const rColor = randomColor({
      count: 2,
    })
    setcolor(rColor)

    props.onClick(color[0])
  }

  return (
    <div style={{backgroundColor: color[1]}} className={styles.box}>
      <div>
        <form className={styles.form} onSubmit={submitHandler}>
            <p className={styles.number}>ADVICE #{advicenum}</p>
            <p className={styles.advice}>"{advice}"</p>
            <p className={styles.line1}></p>
            <p className={styles.line2}></p>
            <p className={styles.rect1}></p>
            <p className={styles.rect2}></p>
            <button className={styles.button}><CasinoIcon fontSize='medium'/></button>
        </form>
      </div>
    </div>
  )
}

export default Quotebox
