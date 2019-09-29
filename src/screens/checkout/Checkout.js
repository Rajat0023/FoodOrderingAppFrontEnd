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
import { blue } from '@material-ui/core/colors';





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

  });





class Checkout extends Component{
constructor(){
super();

//declare and initialize state variables here
this.state={
    tabList:  ['Delivery', 'Payment'],
    address:['My address1','My address2','My address3','My address4','My address5'],
    value:0
};


}

//manage event handlers and other functions here

tabChangeHandler=(event,value)=>{
this.setState({value:value});
}

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


{
    index=== 0  ? (
             <div  style={{marginLeft:"30px"}}>
              <AppBar position="static">
               <Tabs value={this.state.value} onChange={this.tabChangeHandler}>

                   <Tab value={this.state.activeTab}label="EXISTING ADDRESS"/>
                   <Tab value={this.state.activeTab}label="NEW ADDRESS"/>
               </Tabs>
               </AppBar>
            </div>
    ):
    (
        <span></span>
    )
    }

            <StepContent>
              {/* <Typography>{this.getStepContent(index)}</Typography> */}
{
              index=== 0  ? (
                  <div>
<GridList className={classes.gridList} cols={3}>
{
    this.state.address.map(add =>(
<GridListTile key={add}>
<h>{add}</h>
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
                  >
                      NEXT
                  </Button>
                </div>
              </div>
              </div>
              ):
              (<span></span>)  
} 
            </StepContent>
             

}
          </Step>
        ))}
      </Stepper>
    </div>
    </div>



)


}
}
export default withStyles(styles)(Checkout);