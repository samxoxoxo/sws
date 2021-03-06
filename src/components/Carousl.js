import React from 'react';
import '../App.css';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

  

  const carousel_text = makeStyles((theme) => ({
    root: {
      display: 'flex',
      
     
    },
    header: {
      paddingTop: '20px',
     height: '11.85vh',
     paddingBottom: '50px',
     width: '95vw',
      justifyContent: 'center',
      display: 'flex',
      alignItems: 'center',  
      backgroundColor: '#CCF5D2',
      textAlign: 'center',
      fontWeight: '20px',
      borderRadius: 25

    }
  }));

function Carouseltext(props){
  
    // console.log(props.quote)
    const classes = carousel_text();
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
  
    const handleStepChange = (step) => {
      setActiveStep(step);
    };
    return(

      <div className="cn4">
      <div className={classes.root}>
      <Paper square elevation={0} className={classes.header}>
        <Typography  className="basicCarl"><h3>"{props.quote[activeStep].label}"</h3></Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {
        
         props.quote.map((step, index) => (
          <div>
            {Math.abs(activeStep - index) <= 2 ? (
              <div key={step.label} />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
    </div>
    </div>
  );
  }

  export default Carouseltext;