import React from 'react';
import logo from './logo.svg';
import './App.css';
import {AppBar, Container, Toolbar, Typography, Box, Paper, Grid, CardActions, Card, CardMedia, CardContent} from '@material-ui/core';
import Button from '@material-ui/core/Button';

import {makeStyles} from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(1)
  },
  title: {
    flexGrow: 1
  },
  cardMedia: {
    paddingTop: "56.25%"
  },
  mainContent: {
    paddingTop: "5%",
  }
}))

const cards = [1,2,3,4,5,6,7,8];

function App() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
  }

  return (
    <>
      <AppBar position="fixed">
        <Container fixed>
          <Toolbar>
            <Typography variant="h6"  className={classes.title}>CRUD</Typography>
            <Box mr={3}>
              <Button color="inherit" variant="outlined" className={classes.Button} onClick={handleClickOpen}>Add new hot-dog</Button>

                <Dialog open={open} onClose={handleClose} aria-labellebdy="Add new hot-dog">
                  <DialogTitle id="Add new hot-dog">Add new hot-dog</DialogTitle>
                  <DialogContent>
                    <TextField variant="outlined">
                      autoFocus
                      margin="dense"
                      id="name"
                      label="name"
                      type="name"
                    </TextField>
                    <TextField variant="outlined">
                      autoFocus
                      margin="dense"
                      id="descr"
                      label="description"
                      type="description"
                    </TextField>
                    <TextField variant="outlined">
                      autoFocus
                      margin="dense"
                      id="tit"
                      label="title"
                      type="title"
                    </TextField>
                    <TextField variant="outlined">
                      autoFocus
                      margin="dense"
                      id="img"
                      label="image"
                      type="image"
                    </TextField>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose} color="primary">No thanks</Button>
                    <Button onClick={handleClose} color="primary">Add</Button>
                  </DialogActions>
                </Dialog>

            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <div className={classes.mainContent}>
        <Container maxWidth="sm">
          <Typography variant="h5" color="textPrimary" gutterBottom>All hot-dogs</Typography>
        </Container>
      </div>
      <Container className={classes.CardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid item rey={card} xs={12} sm={6} md={3}>
              <Card className={classes.card}>
                <CardMedia 
                  className={classes.cardMedia}
                  image="http://source.unsplash.com/random"
                  title="image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography variant="h6" gutterBottom>
                    Hot-Dog
                  </Typography>
                  <Typography variant="h6">
                    the most dilicious hot-dog
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">Edit</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>  
  );
}

export default App;
