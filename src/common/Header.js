import React, {Component} from 'react';
import './Header.css';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import SearchIcon from '@material-ui/icons/Search';
import Input from '@material-ui/core/Input';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {createMuiTheme} from "@material-ui/core/styles";
import { ThemeProvider } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Modal from 'react-modal';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';


const customStyles = {
  content:{
      top : '50%',
      left : '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)'
  }
}

const styles = theme => ({
    SearchField :{
        width: '280px',
        color: 'white',
        fontSize:'0.9rem',
        height: '35px'
      },
      button : {
        width:'90px',
        marginTop: '3px'
      }
});

const theme = createMuiTheme({
    overrides: {
      MuiInput: {
        underline: {
          "&:before": {
            borderBottom: "1px solid black"
          },
          "&:after": {
            borderBottom: "1px solid white"
          }
        }
      }
    }
  });

  
const TabContainer = function(props) {
  return (
  <Typography container='div' style={{padding: 0, textAlign: 'center'}}>
      {props.children}
      </Typography>
  );
}


class Header extends Component {

  constructor(){
    super();
    this.state = {
      contactNumber: "",
      loginPassword: "",
      contactNumberRequired: "dispNone",
      invalidContact:"dispNone",
      loginPasswordRequired: "dispNone",
      modalIsOpen: false,
      value: 0,
      responseData: [],
      searchedRestaurants: [],
      restaurantName: ""
    }
  }

  componentWillMount() {
  }

  searchRestaurantHandler = (e) => {
    console.log(e.target.value);
    this.setState({restaurantName: e.target.value}, function() {

    let data = null;
    let xhrSearch = new XMLHttpRequest();
    let that = this;
    xhrSearch.addEventListener("readystatechange", function () {

        if (this.readyState === 4) {
            console.log(JSON.parse(this.responseText)); //convert this string to json object
            that.setState({ responseData: JSON.parse(this.responseText).restaurants})
        }

    })

    xhrSearch.open("GET","http://localhost:8080/api/restaurant/name/"+ this.state.restaurantName);
    xhrSearch.setRequestHeader("Content-Type", "application/json");
    xhrSearch.setRequestHeader("Cache-Control", "no-cache");
    xhrSearch.send(data);
  });

  console.log(this.state.responseData);
}

openModalHandler = () => {
  this.setState({modalIsOpen: true});
  this.setState({
      contactNumberRequired: 'dispNone',
      loginPasswordRequired: "dispNone",
      invalidContact:"dispNone",
      loginPassword: "",
      contactNumber: "",
      value: 0        
  });
}

inputContactNumberChangeHandler =(e) => {
  this.setState({contactNumber: e.target.value})
}

inputLoginPasswordChangeHandler = (e) => {
  this.setState({loginPassword: e.target.value})
}

loginClickHandler= () => {
  var contactRegex = /^[0-9]{10}$/ 
  var contact  = this.state.contactNumber;
  if (contact.match(contactRegex)) {
    this.setState({ invalidContact: 'dispNone'})
  }
  else {
    this.setState({ invalidContact: 'dispBlock'})
  }

  
  this.state.contactNumber === "" ? this.setState({
    contactNumberRequired: 'dispBlock',
    invalidContact: 'dispNone'
  }) 
  : this.setState({contactNumberRequired: 'dispNone'})

  this.state.loginPassword === "" ? this.setState({loginPasswordRequired: 'dispBlock'}) 
  : this.setState({loginPasswordRequired: 'dispNone'})
}

    render () {
        const { classes } = this.props;

        return (
            <header className="app-header">
                <div className = "logo-container">
                    <FastfoodIcon htmlColor="white" fontSize="large"/>
                </div>
                <div className="search-box-container">
                    <ThemeProvider theme = {theme}>
                    <Input
                     id='search-field' 
                     type='text'
                     placeholder="Search by Restaurant Name"
                     className={classes.SearchField} 
                     value = {this.state.restaurantName}
                     onChange= {this.searchRestaurantHandler}  
                     startAdornment={
                        <InputAdornment position="start">
                            <SearchIcon htmlColor="white" fontSize="default"/>
                        </InputAdornment>
                    }
                    />
                    </ThemeProvider>
                </div>
                <div>
                <Button
                 variant="contained"
                 color="default"
                 size = "medium"
                 className= {classes.button}
                 onClick={this.openModalHandler}
                 startIcon= {<AccountCircleIcon  />}
                 >
                     LOGIN
                     </Button>
                </div>
                <Modal isOpen={this.state.modalIsOpen} contentLabel='Login Modal' ariaHideApp={false}
                onRequestClose={this.closeModalHandler}
                style={customStyles}>

                    <Tabs className='tabs' value={this.state.value} onChange={this.openTabHandler}>
                        <Tab label='LOGIN' />
                        <Tab label='SIGNUP' />
                    </Tabs>

                    {this.state.value===0 &&
                <TabContainer>
                    <FormControl required>
                        <InputLabel htmlFor='contactnumber'>Contact No.</InputLabel>
                        <Input id='contactnumber' type='text' contactNumber = {this.state.contactNumber} 
                        onChange={this.inputContactNumberChangeHandler} />
                        <FormHelperText className={this.state.contactNumberRequired}> <span className='red'>
                            required </span>
                        </FormHelperText>
                       
                        <FormHelperText className={this.state.invalidContact}> <span className='red'>
                            Invalid Contact </span>
                        </FormHelperText>
                        
                    </FormControl> <br /> <br />
                    <FormControl required>
                        <InputLabel htmlFor='loginPassword'>Password</InputLabel>
                        <Input id='loginPassword' type='password' loginpassword={this.state.loginPassword}
                        onChange={this.inputLoginPasswordChangeHandler}/>
                        <FormHelperText className={this.state.loginPasswordRequired}> <span className='red'>
                            required </span>
                        </FormHelperText>
                    </FormControl><br /> <br />
                    <Button variant='contained' color='primary' onClick={this.loginClickHandler}>LOGIN</Button>
                </TabContainer>
                    }

                    </Modal>
            </header>
        )
    }
}

export default withStyles(styles)(Header);