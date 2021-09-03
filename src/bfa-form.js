import { Button,Container,Fab,Typography,FormControl,RadioGroup,Radio,FormControlLabel } from '@material-ui/core'
import {useState} from 'react'
import Slider from '@material-ui/core/Slider';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      width:'100%'
    },
    margin: {
      height: theme.spacing(3),
    },
    itemTitle:{
        width:'30%',
        fontWeight:700,
        fontSize:20
    },
    item:{
        display:'flex',
        flexWrap:'wrap',
        justifyContent:'space-around',
        [theme.breakpoints.down('sm')]:{
        flexDirection:'column'
        }
    },
    slides:{
        width:'30%'
    }
 
  }));


const marks = [
    {
      value: 0,
      label: '0',
    },
    {
      value: 1,
      label: '1',
    },
    {
      value: 2,
      label: '2',
    },

  ];


 function BfaForm(props){
     //Station 2 #########################################################################
    const [forwardHead, setForwardHead] = useState(0)
    const [shouldersLevel, setShouldersLevel] = useState(0)
    const [thoracicKyphosis, setThoracicKyphosis] = useState(0)
    const [lumbarLordosis, setLumbarLordosis] = useState(0)
    const [iliacCrestsLevel, setIliacCrestsLevel] = useState(0)


    const [station2, setStation2] = useState([])
    const classes = useStyles();
    console.log(station2)
    
    function valueForWardHead(value) {
       // console.log(value)    
        setForwardHead(value)
        return value
    }
    function valueShouldersLevel(value) {
        // console.log(value)    
         setShouldersLevel(value)
         return value
     }
     function valueThoracicKyphosis(value) {
        // console.log(value)    
         setThoracicKyphosis(value)
         return value
     }
     function valueLumbarLordosis(value) {
        // console.log(value)    
         setLumbarLordosis(value)
         return value
     }
     function valueIliacCrestsLevel(value) {
        // console.log(value)    
         setIliacCrestsLevel(value)
         return value
     }
     //Station 2 ####################################################################################

    return(
    <Container>
        <div className={classes.item}>
   <Typography  className={classes.itemTitle}>
        Foward Head
      </Typography>
     <div className={classes.slides}> 
     <Typography >
        Sagittal
      </Typography>
     <Slider
      min={0}
      max={2}
      defaultValue={0}
      valueLabelFormat={valueForWardHead}
        aria-labelledby="discrete-slider-custom"
        step={1}
        valueLabelDisplay="auto"
        marks={marks} 
      />
      </div>
      <div className={classes.slides}>
      <Typography >
        Frontal (posterior)
      </Typography>
        <Slider
      min={0}
      max={2}
      defaultValue={0}
      valueLabelFormat={valueForWardHead}
        aria-labelledby="discrete-slider-custom"
        step={1}
        valueLabelDisplay="auto"
        marks={marks} 
      />
      </div>
</div>

  
<div className={classes.item}>
   <Typography  className={classes.itemTitle}>
        Shoulders Level
      </Typography>
     <div className={classes.slides}> 
     <Typography >
        Frontal (posterior)
      </Typography>
        <Slider
      min={0}
      max={2}
      defaultValue={0}
      valueLabelFormat={valueForWardHead}
        aria-labelledby="discrete-slider-custom"
        step={1}
        valueLabelDisplay="auto"
        marks={marks} 
      />
      </div>
      <div className={classes.slides}>
  
      </div>
</div>
<div className={classes.item}>
   <Typography  className={classes.itemTitle}>
        Thoracic Kyphosis
      </Typography>
     <div className={classes.slides}> 
     <Typography >
        Sagittal
      </Typography>
     <Slider
      min={0}
      max={2}
      defaultValue={0}
      valueLabelFormat={valueForWardHead}
        aria-labelledby="discrete-slider-custom"
        step={1}
        valueLabelDisplay="auto"
        marks={marks} 
      />
      </div>
      <div className={classes.slides}>
      </div>
</div>
<div className={classes.item}>
   <Typography  className={classes.itemTitle}>
        Lumbar Lordosis
      </Typography>
     <div className={classes.slides}> 
     <Typography >
        Sagittal
      </Typography>
     <Slider
      min={0}
      max={2}
      defaultValue={0}
      valueLabelFormat={valueForWardHead}
        aria-labelledby="discrete-slider-custom"
        step={1}
        valueLabelDisplay="auto"
        marks={marks} 
      />
      </div>
      <div className={classes.slides}>
 
      </div>
</div>
<div className={classes.item}>
   <Typography  className={classes.itemTitle}>
        Iliac Crests Level
      </Typography>
     <div className={classes.slides}> 
     <Typography >
        Frontal (posterior)
      </Typography>
        <Slider
      min={0}
      max={2}
      defaultValue={0}
      valueLabelFormat={valueForWardHead}
        aria-labelledby="discrete-slider-custom"
        step={1}
        valueLabelDisplay="auto"
        marks={marks} 
      />
      </div>
      <div className={classes.slides}>
 
      </div>

    <div className={classes.item}>
        <div>
      <Typography>Knees</Typography>
        <FormControl id='knees' component="fieldset">
        <RadioGroup aria-label="knees" name="knees"  >
        <FormControlLabel value="male" control={<Radio />} label="Genu Varus" />
        <FormControlLabel value="female" control={<Radio />} label="Genu Valgus" />
        </RadioGroup>
        </FormControl>
        </div>
    </div>
</div>
    </Container>
    );
}
export default BfaForm;