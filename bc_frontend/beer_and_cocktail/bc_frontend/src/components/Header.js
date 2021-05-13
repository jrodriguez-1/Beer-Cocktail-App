import React, {useState, useEffect}from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
// import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
	appBar: {
		borderBottom: `1px solid ${theme.palette.divider}`,
		backgroundColor: '#8a0100'
	},
	link: {
		margin: theme.spacing(1, 1.5),
		backgroundColor: '#A9A9A9',
		color: 'black',
		 
	},
	toolbarTitle: {
		flexGrow: 1,
	},
}));
export function Header () {
	const [click, setClick] = useState(false);
	const [button, setButton] = useState(true);
	const [navbar, setNavbar] = useState(false);

  
const handleClick = () => setClick(!click);
const closeMobileMenu = () => setClick(false);


const showButton = () => {
	if (window.innerWidth <= 960) {
		setButton(false);
	} else {
		setButton(true);
	}
	};

	useEffect(() => {
	showButton();
	}, []);
	
window.addEventListener('resize', showButton);

	const classes = useStyles();
	return (
		<React.Fragment>
			<CssBaseline />
			<AppBar
				position="static"
				color="default"
				elevation={0}
				className={classes.appBar}
			>
	
				<Toolbar className={classes.toolbar}>
					<Typography
						variant="h6"
						color="inherit"
						noWrap
						className={classes.toolbarTitle}
					>
						<Button
							component={NavLink}
							to="/"
							className='nav-links'
							underline="none"
							color="primary"
							onClick={closeMobileMenu}
						>
							Home 
						</Button>
					</Typography>
					<nav>
					<li>
              		<Link
                	to='/register'
                	className='nav-links'
                	onClick={closeMobileMenu}
              		>
					Register
					</Link>
					</li>
					</nav>
					<li>
              		<Link
                	to='/login'
                	className='nav-links'
                	onClick={closeMobileMenu}
              		>
					Login
					</Link>
					</li>
					<li>
              		<Link
                	to='/logout'
                	className='nav-links'
                	onClick={closeMobileMenu}
              		>
					Logout
					</Link>
					</li>
				</Toolbar>
			</AppBar>
		</React.Fragment>
	);
}

export default Header; 

