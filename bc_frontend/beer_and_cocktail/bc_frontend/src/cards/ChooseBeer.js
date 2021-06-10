import '../css/Container.css'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from "@material-ui/core/Typography";
import CardContent from '@material-ui/core/CardContent';
import styled from 'styled-components'
import beer from '../images/beer.jpg'


const useStyles = makeStyles({
  root: {
    height: 260,
    width: 220,
  },
  media: {
    height: 100,
  },
});

const BeerContainer = () => {
    const classes = useStyles();

    return (
        <Card className='choose-beer'>
        <CardActionArea>

          <CardContent>
        
            <h4 className='beer-title'>Choose My Beer</h4> 
    
            <CardMedia
            className={classes.media}
            image={require("../images/beer.jpg").default}

            title="stocks"
          />
          </CardContent>
        </CardActionArea>
      </Card>
    );
}

export default BeerContainer

