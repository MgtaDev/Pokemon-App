import React from 'react'
import loadingGif from '../assets/gengarLoadingGif.gif'
import style from './Loading.module.css'

const Loading = ()=>  {
  return (
    <div className={style.loadingCard}>
      <img src={loadingGif} alt="" />
    </div>
  )
}
export default Loading