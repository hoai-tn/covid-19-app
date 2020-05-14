import React from 'react';
import { Card, CardContent, Typography, Grid} from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';
import styles from './Cards.module.css';

const Cards = ({ data: {confirmed, recovered, deaths, lastUpdate} }) => {
  if(!confirmed)
    return 'Loading ...';
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify='center' >
       <Grid
          item xs={12} md={3} 
          component={Card} 
          className={cx(styles.card, styles.infected)}>
         <CardContent>
            <Typography color='textSecondary' gutterBottom> Bị Nhiễm </Typography>
            <Typography varaint='h5'>
                <CountUp
                  start={0}
                  end={confirmed.value}
                  duration={2.5}
                  separator=","
                />
            </Typography>
            <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
            <Typography varaint="body2">Số ca nhiễm COVID-19</Typography>
         </CardContent>
        </Grid>
        <Grid 
          item xs={12} 
          md={3} 
          component={Card} 
          className={cx(styles.card, styles.recovered)}>
          <CardContent>
            <Typography color='textSecondary' gutterBottom> Hồi Phục </Typography>
            <Typography varaint='h5'>
               <CountUp
                  start={0}
                  end={recovered.value}
                  duration={2.5}
                  separator=","
                />
            </Typography>
            <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
            <Typography varaint="body2">Số ca hồi phục COVID-19</Typography>
          </CardContent>
        </Grid>

        <Grid 
          item xs={12} md={3} 
          component={Card} 
          className={cx(styles.card, styles.deaths)}>
          <CardContent>
            <Typography color='textSecondary' gutterBottom> Tử vong </Typography>
            <Typography varaint='h5'>
                <CountUp
                  start={0}
                  end={deaths.value}
                  duration={2.5}
                  separator=","
                />
            </Typography>
            <Typography color='textSecondary'> {new Date(lastUpdate).toDateString()}</Typography>
            <Typography varaint="body2">Số ca tử vong COVID-19</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  )
}
export default Cards