import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MailIcon from '@material-ui/icons/Mail';
import Avatar from '@material-ui/core/Avatar';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AppsIcon from '@material-ui/icons/Apps';
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        grow:{
            flexGrow: 1,
        }

    }),
);

const TopBar = () => {
    const classes = useStyles();
    return (
        <div>
            <AppBar>
                <Toolbar>
                 <Typography>Meu Curral</Typography> 
                 <div className={classes.grow} /> 
                 <IconButton color="inherit" >
                    <MailIcon/>    
                 </IconButton>
                 <IconButton color= "inherit">
                     <NotificationsIcon/>
                 </IconButton>
                 <IconButton color= "inherit">
                     <AppsIcon/>
                 </IconButton>
                 <Avatar>A</Avatar>
    
                
                 

                </Toolbar>
            </AppBar>
        </div>
    )
}

TopBar.propTypes = {

}

export default TopBar
