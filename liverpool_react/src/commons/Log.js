import React from 'react'
import { Card, Image } from 'react-bootstrap'
import Facebook from '../assets/img/facebook.svg'
import Tiktok from '../assets/img/tictok.svg'
import Instagram from '../assets/img/instagram.svg'
import Twitter from '../assets/img/twitter.svg'
import Youtube from '../assets/img/youtube.svg'

const Log = () => {
  return (
    <Card style={{textAlign:"center"}}>
    <div>
      <a href="https://www.facebook.com/LiverpoolFC">
        <Image src={Facebook} title='facebook' />
      </a>
      <a href="https://www.tiktok.com/@liverpoolfc">
        <Image src={Tiktok} title='tiktok' />
      </a>
      <a href="http://instagram.com/liverpoolfc/">
        <Image src={Instagram} title='instagram' />
      </a>
      <a href="https://twitter.com/lfc">
       
        <Image src={Twitter} title='twitter' />
      </a>
      <a href="http://www.youtube.com/liverpoolfc?sub_confirmation=1">
        <Image src={Youtube} title='youtube' />
      </a>
    </div>
  </Card>
  )
}

export default Log