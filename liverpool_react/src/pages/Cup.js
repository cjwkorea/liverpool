import React from 'react'
import { Card, Image } from 'react-bootstrap'

const Cup = () => {
  return (
    <Card className="bg-secondary text-white">
    <div>
      <Image
        alt="Legue Title"
        title="Legue Title 🏆 19회"
        src="https://lfcdxp.prod.acquia-sites.com/sites/default/files/2022-05/league_title.svg"
        data-nimg="responsive"
        style={{ width: "10rem", cursor:"wait" }}
      /> &nbsp;  &nbsp;  &nbsp;
       
      <Image
        alt="European Cup"
        title="European Cup 🏆 6회"
        src="https://lfcdxp.prod.acquia-sites.com/sites/default/files/2022-05/european_cup.svg"
        data-nimg="responsive"
        style={{ width: "10rem", cursor:"wait" }}
      />
      
      <Image
        alt="FA Cup"
        title="FA Cup 🏆 8회"
        src="https://lfcdxp.prod.acquia-sites.com/sites/default/files/2022-05/fa_cup.svg"
        data-nimg="responsive"
        style={{ width: "10rem", cursor:"wait"  }}
      />
      <Image
        alt="UEFA Cup"
        title="UEFA Cup 🏆 3회"
      
        src="https://lfcdxp.prod.acquia-sites.com/sites/default/files/2022-05/uefa_cup.svg"
        data-nimg="responsive"
        style={{ width: "10rem", cursor:"wait"  }}
      />
      <Image
        alt="League Cup"
        title="League Cup 🏆 9회"
        variant="top"
        src="https://lfcdxp.prod.acquia-sites.com/sites/default/files/2022-05/league_cup.svg"
        data-nimg="responsive"
        style={{ width: "10rem", cursor:"wait"  }}
      />
      <Image
        alt="UEFA Super Cup"
        title="UEFA Super Cup 🏆 4회"
       
        src="https://lfcdxp.prod.acquia-sites.com/sites/default/files/2022-05/uefa_super_cup.svg"
        data-nimg="responsive"
        style={{ width: "10rem", cursor:"wait"  }}
      />
      <Image
        alt="FIFA Club World Cup"
        title="FIFA Club World Cup 🏆 1회"
        
        src="https://lfcdxp.prod.acquia-sites.com/sites/default/files/2022-05/fifa_club_world_cup.svg"
        data-nimg="responsive"
        style={{ width: "10rem", cursor:"wait"  }}
      />
    </div>
  </Card>
  )
}

export default Cup