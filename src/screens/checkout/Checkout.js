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
import { CardHeader, AppBar } from "@material-ui/core";
import { blue } from '@material-ui/core/colors';





//injecting below custom props, to one of the properties of component.
const styles = theme => ({
    root: {
        width: '80%',
        flexGrow: 1,

        backgroundColor: theme.palette.background.paper,
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

  });





class Checkout extends Component{
constructor(){
super();

//declare and initialize state variables here
this.state={
    tabList:  ['Delivery', 'Payment'],
    address:"",
    value:0
};


}

//manage event handlers and other functions here

tabChangeHandler=(event,value)=>{
this.setState({value:value});
}


  getStepContent=(step)=> {
    switch (step) {
      case 0:
        this.setState({
         address:   `For each ad campaign that you create, you can control how much
         you're willing to spend on clicks and conversions, which networks
         and geographical locations you want your ads to show on, and more.`
        }) ;
      case 1:
        this.setState({
            address:   `For each ad campaign that you create, you can control how much`
           }) ;
      case 2:
        this.setState({
            address:   `My name is Harshal.`
           }) ;
      default:
        this.setState({
            address:   `This is my address.`
           }) ;
    }
  }



  /* handleNext = ( ) => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  handleReset = () => {
    setActiveStep(0);
  }; */

render(){
    const { classes } = this.props;

  
return (
<div>
<header>header component to be reused here</header>
<br/>
<div className={classes.root}>
      <Stepper  orientation="vertical">
        {this.state.tabList.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <br/>


            {/* display below only for delivery step */}

            <div  style={{marginLeft:"30px"}}>
              <AppBar position="static">
               <Tabs value={this.state.value} onChange={this.tabChangeHandler}>

                   <Tab value={this.state.activeTab}label="EXISTING ADDRESS"/>
                   <Tab value={this.state.activeTab}label="NEW ADDRESS"/>
               </Tabs>
               </AppBar>
            </div>


            <StepContent>
              {/* <Typography>{this.getStepContent(index)}</Typography> */}



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
                  >
                      NEXT
                  </Button>
                </div>
              </div>



            </StepContent>
          </Step>
        ))}
      </Stepper>
    </div>
    </div>



)


}
}
export default withStyles(styles)(Checkout);