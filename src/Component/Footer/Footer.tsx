import { Box, Grid, TextField, Typography } from '@mui/material'

const Footer = () => {
  return (
    <Box sx={{
        padding: '15px',
        bgcolor: '#000'
    }} >
        <Grid container>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3} p={1.5}>
                <Box sx={{border:"1px solid red"}}>
                    <Typography fontSize='35px' color="#fff" textTransform='capitalize'> 
                        subscribe 
                    </Typography>
                    <Typography color='#fff' >
                        Get 10% off your first order
                    </Typography>
                    <TextField sx={{
                        border: '1px solid #fff',
                        color:"#fff"
                    }}  placeholder='Enter your email' />
                </Box>
            </Grid>
        </Grid>
    </Box>
  )
}

export default Footer