import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {  CardActionArea, Grid } from '@mui/material';
import Rightcard from "./Rightcard";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import LanguageIcon from '@mui/icons-material/Language';
import RectangleIcon from '@mui/icons-material/Rectangle';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';




function Sectioncard() {
  return (
    <Container maxWidth="ms">
      <Box sx={{ bgcolor: 'rgb(238, 236, 236)', height: '100vh' }} >
        <Grid container sx={{ margin: "20px", width: "100%" }} spacing={4} >
          <Grid item xs={8}>
            <Card sx={{ height: 450, position: "relative",marginBottom:"20px" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="180px"
                  image="linkedin.blue.jpg"
                  alt="green iguana"

                >
                </CardMedia>
                <div className="avatar">
                  <Avatar sx={{ height: "120px", width: "120px" }}>
                    <img src="person_2.jpg" alt ="no img"></img>
                  </Avatar>
                </div>
                <br></br>
                 </CardActionArea>
              <Grid container spacing={2} sx={{padding: "10px"}}>
                <Grid item xs={8}>
                    <h3>linkedin profile mokeup</h3>
                    <b>human resources</b> 
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with over 6,000
                      species, ranging across all continents except Antarctica
                    </Typography>
                  </CardContent>
                  <div className="button">
                  <Fab sx={{width: "150px",height : "40px" ,margin: "10px"}}  variant="extended" color="primary" aria-label="add">
        <AddIcon /><span>
          follow
        </span>
      </Fab>
                  <Fab sx={{width: "150px",height : "40px", margin: "10px"}}   variant="extended"  aria-label="add">
        <AddIcon /> <span> message</span>
      </Fab>
      <Fab sx={{width: "100px", height : "40px",margin: "10px"}}  variant="extended"  aria-label="add">
more
      </Fab></div>
                </Grid>
                <Grid item xs={4}>
                 <div className= "cardicon">

            <LanguageIcon sx={{ fontSize : "50px"}}/>
            <span>hello</span>

            </div>
                 <br></br>
                 <div className= "cardicon">
                 <RectangleIcon sx={{ fontSize : "50px"}} />
                 <span>hello</span>
                  </div> 
                </Grid>
              </Grid>

            </Card>
            <Card sx={{ height: 450, position: "relative",marginBottom:"20px" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="180px"
                  image="linkedin.blue.jpg"
                  alt="green iguana"

                >
                </CardMedia>
                <div className="avatar">
                  <Avatar sx={{ height: "120px", width: "120px" }}>
                    <img src="person_2.jpg" alt ="no img"></img>
                  </Avatar>
                </div>
                <br></br>
                 </CardActionArea>
              <Grid container spacing={2} sx={{padding: "10px"}}>
                <Grid item xs={8}>
                    <h3>linkedin profile mokeup</h3>
                    <b>human resources</b> 
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with over 6,000
                      species, ranging across all continents except Antarctica
                    </Typography>
                  </CardContent>
                  <div className="button">
                  <Fab sx={{width: "150px",height : "40px" ,margin: "10px"}}  variant="extended" color="primary" aria-label="add">
        <AddIcon /><span>
          follow
        </span>
      </Fab>
                  <Fab sx={{width: "150px",height : "40px", margin: "10px"}}   variant="extended"  aria-label="add">
        <AddIcon /> <span> message</span>
      </Fab>
      <Fab sx={{width: "100px", height : "40px",margin: "10px"}}  variant="extended"  aria-label="add">
more
      </Fab></div>
                </Grid>
                <Grid item xs={4}>
                 <div className= "cardicon">

            <LanguageIcon sx={{ fontSize : "50px"}}/>
            <span>hello</span>

            </div>
                 <br></br>
                 <div className= "cardicon">
                 <RectangleIcon sx={{ fontSize : "50px"}} />
                 <span>hello</span>
                  </div> 
                </Grid>
              </Grid>

            </Card>
          </Grid>

          <Grid item xs={4}>

            <Rightcard></Rightcard>
          </Grid>
        </Grid>
      </Box>

    </Container>


  )
}

export default Sectioncard;