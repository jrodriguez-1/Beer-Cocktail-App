import '../css/Container.css'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from "@material-ui/core/Typography";
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles({
    root: {
      height: 260,
      width: 220,
    },
    media: {
      height: 100,
    },
  });
  
const CocktailContainer = () => {
    const classes = useStyles();

    return (
        <Card className='choose-cocktail'>
        <CardActionArea>

          <CardContent>
        
            <h4 className='cocktail-title'>Choose My Cocktail</h4> 
    
            <CardMedia
            className={classes.media}
            image={require("../images/cocktail.jpg").default}

            title="stocks"
          />
          </CardContent>
        </CardActionArea>
      </Card>
    );
}

export default CocktailContainer;
