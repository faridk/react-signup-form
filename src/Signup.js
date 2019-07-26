import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles(theme => ({
	textField: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
		width: 200,
	},
	margin: {
		margin: theme.spacing(1),
	},
	weightTextField: {
		flexBasis: 200,
	},
}));

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide(props) {
	const { name } = props;
	const [open, setOpen] = React.useState(true);
	const classes = useStyles();
	const [customerFirstName, setCustomerFirstName] = React.useState('');
	const [customerLastName, setCustomerLastName] = React.useState('');
	const [customerAge, setCustomerAge] = React.useState('');
	const [customerWeight, setCustomerWeight] = React.useState('');

	const [monday, setMonday] = React.useState(false);
	const [tuesday, setTuesday] = React.useState(false);
	const [wednesday, setWednesday] = React.useState(false);
	const [thursday, setThursday] = React.useState(false);
	const [friday, setFriday] = React.useState(false);
	const [saturday, setSaturday] = React.useState(false);

	const error = [monday, tuesday, wednesday, thursday, friday, saturday].filter(v => v).length == 0;

	const handleClickOpen = () => {
		setOpen(true);
	}

	const handleClose = () => {
		setOpen(false);
	}

	return (
		<div>
			<Dialog
				open={open}
				TransitionComponent={Transition}
				keepMounted
				onClose={handleClose}
				aria-labelledby="alert-dialog-slide-title"
				aria-describedby="alert-dialog-slide-description"
			>
				<DialogTitle id="alert-dialog-slide-title">
					{name} class signup form
				</DialogTitle>
				<DialogContent>
					<form className={classes.container} noValidate autoComplete="off">
						<TextField
							id="first-name"
							label="First Name"
							className={classes.textField}
							value={customerFirstName}
							onChange={(input) => {setCustomerFirstName(input.target.value)}}
							margin="normal"
						/>
						<br/>
						<TextField
							id="last-name"
							label="Last Name"
							className={classes.textField}
							value={customerLastName}
							onChange={(input) => {setCustomerLastName(input.target.value)}}
							margin="normal"
						/>
						<br/>
						<TextField
							id="standard-number"
							label="Age"
							value={customerAge}
							onChange={(input) => {setCustomerAge(input.target.value)}}
							type="number"
							className={classes.textField}
							margin="normal"
						/>
						<br />
						<TextField
							label="Weight"
							id="simple-start-adornment"
							className={clsx(classes.margin, classes.weightTextField)}
							InputProps={{
								startAdornment: <InputAdornment position="start">lbs</InputAdornment>,
							}}
						/>
						<br/>
						<br/>
						<FormControl required error={error} component="fieldset" className={classes.formControl}>
							<FormLabel component="legend">Day(s)</FormLabel>
							<FormGroup>
								<FormControlLabel
									control={<Checkbox checked={monday} onChange={() => {setMonday(!monday)}} value="Monday" />}
									label="Monday"
								/>
								<FormControlLabel
									control={<Checkbox checked={tuesday} onChange={() => {setTuesday(!tuesday)}} value="Tuesday" />}
									label="Tuesday"
								/>
								<FormControlLabel
									control={<Checkbox checked={wednesday} onChange={() => {setWednesday(!wednesday)}} value="Wednesday" />}
									label="Wednesday"
								/>
								<FormControlLabel
									control={<Checkbox checked={thursday} onChange={() => {setThursday(!thursday)}} value="Thursday" />}
									label="Thursday"
								/>
								<FormControlLabel
									control={<Checkbox checked={friday} onChange={() => {setFriday(!friday)}} value="Friday" />}
									label="Friday"
								/>
								<FormControlLabel
									control={<Checkbox checked={saturday} onChange={() => {setSaturday(!saturday)}} value="Saturday" />}
									label="Saturday"
								/>
							</FormGroup>
							<FormHelperText>You have to choose at least one day</FormHelperText>
						 	</FormControl>
					</form>
					<br />
					<DialogContentText id="alert-dialog-slide-description">
						By signing up you agree to our<br/>Terms & Conditions
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color="primary">
						Cancel
					</Button>
					<Button onClick={handleClose} color="primary">
						Sign Up
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}