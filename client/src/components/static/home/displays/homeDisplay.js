import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { homeDisplayStyle } from '../../../../styles'

const HomeDisplay = (props) => {
  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;

  return (
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary">
            FizzBuzz Challenge Game
          </Typography>
          <Typography className={classes.title} color="textSecondary">
            Go to Play Game to Start the Fun!
          </Typography>
        </CardContent>
      </Card>
  )
}

HomeDisplay.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(homeDisplayStyle)(HomeDisplay);
