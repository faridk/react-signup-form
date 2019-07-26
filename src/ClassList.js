import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
	root: {
		padding: '5%',
	},
	mainContainer: {
		flexGrow: 1,
	},
	title: {
		textAlign: 'center',
	},
	media: {
		height: 0,
		paddingTop: "56.25%", // 16:9,
		marginTop: "0"
	},
}));

export default function ClassList() {
	const classes = useStyles();
	const classHeadings = ['Hiking', 'Stretch Rope', 'Yoga', 'Jump Rope', 'Cycling', 'Gym']

	return (
		<div className={classes.root}>
			<Typography className={classes.title} variant="h1" component="h2" gutterBottom>
				Class SignUp
			</Typography>	
			<Grid className={classes.mainContainer} container spacing={2}>
				<Grid item xs={6}>
					<Grid container justify="center" spacing={2}>
						{[0, 1, 2].map(value => (
							<Grid key={value} item>
							<Card className={classes.card}>
								<CardActionArea>
									<CardMedia
										className={classes.media}
										image={`/img/${value+1}.jpg`}
										title="Contemplative Reptile"
									/>
									<CardContent>
										<Typography gutterBottom variant="h5" component="h2">
											{classHeadings[value % classHeadings.length]}
										</Typography>
										<Typography variant="body2" color="textSecondary" component="p">
											Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et leo faucibus, scelerisque eros eu, vehicula est. Sed ut dictum sem. Nam ornare, purus sed aliquet condimentum, risus lacus porta enim, mattis vulputate nisi lectus vitae justo. Sed euismod neque non libero rutrum, eget efficitur arcu aliquam. Curabitur aliquet purus vitae elit imperdiet condimentum. Aliquam nec lectus vehicula, efficitur massa in, condimentum ligula. Nulla auctor purus risus, at vestibulum quam euismod id. Curabitur viverra feugiat neque vitae molestie. Duis mollis iaculis vehicula. Duis vitae viverra nisl. Integer sit amet risus id leo feugiat congue.
										</Typography>
									</CardContent>
								</CardActionArea>
								<CardActions>
									<Button size="small" color="primary">
										Learn More
									</Button>
								</CardActions>
							</Card>
						</Grid>
						))}
					</Grid>
				</Grid>
				<Grid item xs={6}>
					<Grid container justify="center" spacing={2}>
				{[0, 1, 2].map(value => (
					<Grid key={value} item>
						<Card className={classes.card}>
							<CardActionArea>
								<CardMedia
									className={classes.media}
									image={`/img/${value+4}.jpg`}
									title="Contemplative Reptile"
								/>
								<CardContent>
									<Typography gutterBottom variant="h5" component="h2">
										{classHeadings[(value+3) % classHeadings.length]}
									</Typography>
									<Typography variant="body2" color="textSecondary" component="p">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et leo faucibus, scelerisque eros eu, vehicula est. Sed ut dictum sem. Nam ornare, purus sed aliquet condimentum, risus lacus porta enim, mattis vulputate nisi lectus vitae justo. Sed euismod neque non libero rutrum, eget efficitur arcu aliquam. Curabitur aliquet purus vitae elit imperdiet condimentum. Aliquam nec lectus vehicula, efficitur massa in, condimentum ligula. Nulla auctor purus risus, at vestibulum quam euismod id. Curabitur viverra feugiat neque vitae molestie. Duis mollis iaculis vehicula. Duis vitae viverra nisl. Integer sit amet risus id leo feugiat congue.
								</Typography>
								</CardContent>
							</CardActionArea>
							<CardActions>
								<Button size="small" color="primary">
									Learn More
								</Button>
							</CardActions>
						</Card>
					</Grid>
				))}
			</Grid>
				</Grid>
			</Grid>
		</div>
  );
}