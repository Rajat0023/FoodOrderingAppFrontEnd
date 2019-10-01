
  
import React,{Component} from 'react';
import "./Checkout.css";
//import "../checkout/Checkout.css";
import { withStyles } from "@material-ui/core/styles";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from "@material-ui/core/Grid";
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import GridList from "@material-ui/core/GridList";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Avatar from "@material-ui/core/Avatar";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import Favorite from "@material-ui/icons/Favorite";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import SearchIcon from "@material-ui/icons/Search";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Paper from "@material-ui/core/Paper";
import { CardHeader, AppBar, GridListTile } from "@material-ui/core";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


import CheckCircleIcon from '@material-ui/icons/CheckCircle';




//injecting below custom props, to one of the properties of component.
const styles = theme => ({
    root: {
        width: '75%',
        flexGrow: 1,

        backgroundColor: theme.palette.background.paper,
      },
      gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
      },
      button: {
        marginTop: theme.spacing(1),
        marginRight: theme.spacing(1),
      },
      actionsContainer: {
        marginBottom: theme.spacing(2),
      },
      resetContainer: {
        padding: theme.spacing(3),
      },
      formControl: {
        margin: theme.spacing(3),
      },
      container: {
        display: 'flex',
        flexDirection:"column",
        flexWrap: 'wrap',
      },
      cardTitle: {
        fontSize: 14,
        width: '25%',
      }

  });





class Checkout extends Component{
constructor(){
super();

//declare and initialize state variables here
this.state={
    tabList:  ['Delivery', 'Payment'],
    address:['My address1','My address2','My address3','My address4','My address5'],
    value:0,
    activeStep:0,
};


}

//manage event handlers and other functions here

tabChangeHandler=(event,value)=>{

this.setState({value:value});
}

handledNextStep=(event)=>{
    this.setState({
      activeStep:this.state.activeStep +1
    });
}
handleGridCheck=(e)=>{
    e.target.style.color="green";
}


render(){
    const { classes } = this.props;

  
return (
<div>
<header>header component to be reused here</header>
<br/>
<div className={classes.root}>
  <span>
      <Stepper  activeStep={this.state.activeStep} orientation="vertical">
        {this.state.tabList.map((label, index) => (

          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <br/>


{
    
    this.state.activeStep=== 0 && label==="Delivery"  ? (
             <div  style={{marginLeft:"30px"}}>
              <AppBar position="static">
               <Tabs value={this.state.value} onChange={this.tabChangeHandler}>

                   <Tab label="EXISTING ADDRESS"/>
                   <Tab label="NEW ADDRESS"/>
               </Tabs>
               </AppBar>
            </div>
    ):
    (
     null
    )
    }

            <StepContent>
              {/* <Typography>{this.getStepContent(index)}</Typography> */}
{
    
    this.state.activeStep===0 && label==="Delivery" && this.state.value===0 ? (
                  <div>
<GridList className={classes.gridList} cols={3}>
{
    this.state.address.map(add =>(
<GridListTile key={add}>
<h>{add}</h>
<IconButton>
    <CheckCircleIcon onClick={this.handleGridCheck}/>
</IconButton>
</GridListTile>

))
}
</GridList>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    className={classes.button}>
                    BACK
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    onClick={this.handledNextStep}
                  >
                      NEXT
                  </Button>
                </div>
              </div>
              </div>
              ):
              (null)}

              {
                this.state.activeStep===1 ? (  
              <div>
                <FormControl component="fieldset" className={classes.formControl}>
                  <FormLabel component="legend">Select mode of Payment</FormLabel>
                  <RadioGroup aria-label="" name="" /* value={value} */ /* onChange={handleChange} */>
                    <FormControlLabel value="cashOnDelivery" control={<Radio />} label="Cash on Delivery" />
                    <FormControlLabel value="wallet" control={<Radio />} label="Wallet" />
                    <FormControlLabel value="netBanking" control={<Radio />} label="Net Banking" />
                    <FormControlLabel value="debit/CreditCard" control={<Radio />} label="Debit/Credit Card" />
                    <FormControlLabel
                      value="disabled"
                      disabled
                      control={<Radio />}
                      label="(Disabled option)"
                    />
                  </RadioGroup>
                </FormControl>
                <div>
                    <Button  className={classes.button}>
                        BACK
                    </Button>

                    <Button variant="contained"
                    color="primary"
                    className={classes.button}>
                        FINISH
                    </Button>
                </div>
                </div> 
                ) :(null)
              }



 {/* form for new address */}



{
    this.state.activeStep===0 && this.state.value===1 ? (
<form className={classes.container}>
<TextField  label="Flat/Building No"/><br/>
<TextField label="Locality"/><br/>
<TextField label="City"/><br/>



<TextField label="Pincode"/>

</form>

    ): (null)
}       



</StepContent>
}
          </Step>
        ))}
      </Stepper>
      </span>





        <span>
          <div>
<Card className= {classes.cardTitle} >
<CardContent>
<Typography className= {classes.cardTitle} color="textSecondary" gutterBottom>
Summary
</Typography>
</CardContent>
</Card>
</div>
</span>






    </div>
    </div>



)


}
}
export default withStyles(styles)(Checkout);
