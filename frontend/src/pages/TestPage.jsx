import React from 'react';
import {Container} from "react-bootstrap";
import {useDispatch, useSelector} from 'react-redux';
import {Avatar, Button, Grid} from '@mui/material';

// TODO make { } from
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import {addUser, rmUser, addTodo} from '../store/todoSlice';

const bull = (
    <Box
        component="span"
        sx={{display: 'inline-block', mx: '2px', transform: 'scale(0.8)'}}
    >
        •
    </Box>
);

function TestPage(props) {

    const dispatch = useDispatch();

    const user = useSelector(state => state.todos.user);

    const createUser = () => {
        dispatch(addUser());
    }

    const deleteUser = () => {
        dispatch(rmUser());
    }

    return (
        <>
            <section className="main-team pt-3 pb-3">
                <Container>
                    <h1 className="main-team__header text-center pb-5 pt-5">TestPage</h1>
                </Container>
            </section>
            <button onClick={createUser}>Create</button>
            <button onClick={deleteUser}>Delete</button>
            <h1>{user}</h1>
            <Button variant="contained">Hello World</Button>
            <Avatar sx={{bgcolor: "green"}}>N</Avatar>


            <Container maxWidth="sm">\
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Card sx={{minWidth: 275}}>
                            <CardContent>
                                <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                                    Word of the Day
                                </Typography>
                                <Typography variant="h5" component="div">
                                    be{bull}nev{bull}o{bull}lent
                                </Typography>
                                <Typography sx={{mb: 1.5}} color="text.secondary">
                                    adjective
                                </Typography>
                                <Typography variant="body2">
                                    well meaning and kindly.
                                    <br/>
                                    {'"a benevolent smile"'}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card sx={{minWidth: 275}}>
                            <CardContent>
                                <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                                    Word of the Day
                                </Typography>
                                <Typography variant="h5" component="div">
                                    be{bull}nev{bull}o{bull}lent
                                </Typography>
                                <Typography sx={{mb: 1.5}} color="text.secondary">
                                    adjective
                                </Typography>
                                <Typography variant="body2">
                                    well meaning and kindly.
                                    <br/>
                                    {'"a benevolent smile"'}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card sx={{minWidth: 275}}>
                            <CardContent>
                                <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                                    Word of the Day
                                </Typography>
                                <Typography variant="h5" component="div">
                                    be{bull}nev{bull}o{bull}lent
                                </Typography>
                                <Typography sx={{mb: 1.5}} color="text.secondary">
                                    adjective
                                </Typography>
                                <Typography variant="body2">
                                    well meaning and kindly.
                                    <br/>
                                    {'"a benevolent smile"'}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>

            </Container>
        </>
    );
}

export default TestPage;
