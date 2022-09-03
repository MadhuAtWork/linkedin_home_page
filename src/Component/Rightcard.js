import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Fab from '@mui/material/Fab';
import Container from '@mui/material/Container';



function Rightcard() {
  return (

  
    <Container maxWidth="ms">

            <Box sx={{bgcolor: "white"}}>

              <div ><span><h3>pepole also viewed</h3></span></div>
              {[0, 1, 2, 3, 4, 5, 6].map((elevation) => (
                  <Grid container >
                    <Grid item xs={4}>
                      <div className= "profilepic">
<Avatar sx={{ height: "50px", width: "50px", }} />
                      {/* <img src="person_2.jpg" alt ="no img"></img> */}
                      </div>
                      
                    </Grid>
                    <Grid xs={8}>
                      <h3>linkedin prolile</h3>

                      <span>lorem ipsum
                      </span>
                      <br></br>
                      <Fab sx={{ width: "100px", height: "40px", margin: "10px" }} variant="extended" aria-label="add">
                        more
                      </Fab>
                    </Grid>
                  </Grid>


              ))}

            </Box>
</Container>

  

  )
}
export default Rightcard;