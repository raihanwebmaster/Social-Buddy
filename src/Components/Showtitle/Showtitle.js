import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        width: '600px',
        textAlign: 'center',
        border: '1px solid black',
        marginTop: '8px',
        margin: 'auto',
        background: 'orange',
    },
    btn: {
        textDecoration: 'none',
        margin: 'auto',
        marginTop: '8px',
    },
});


const Showtitle = (props) => {
    const { title, id } = props.post;
    const classes = useStyles();
    return (
        <div className="title-edit">
            <Card color="primary" className={classes.root}>
                <CardContent>
                    <Typography className={classes.title} >
                        Post No :{id}
                    </Typography>
                    <Typography className={classes.title}>
                        Post Title: {title}
                    </Typography>
                </CardContent >
                <CardActions >
                    <Link className={classes.btn} to={`/post/${id}`}>
                        <Button variant="contained" color="primary">
                            SEE MORE
                </Button>
                    </Link>
                </CardActions>
            </Card>
        </div>
    );
};

export default Showtitle;



