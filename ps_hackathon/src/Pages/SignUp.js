import { Grid, Paper, Button } from '@mui/material'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react'
import Logo from '../Components/Images/Logo.png'
import '../Components/Css/SignUp.css'
import { Link } from 'react-router-dom';

const welcomeStatement = {
    fontFamily: 'Readex Pro, sans-serif', fontWeight: '900', color: '#454C59', fontSize: '40px', backgroundColor: 'transparent', boxShadow: 'none',
}

const button = {
    marginLeft: '-1vw',
    alignItems: 'center',
    width: '44vw',
    backgroundColor: '#0950D5',
    color: '#FFFFFF',
    fontFamily: 'Poppins',
    height: '56px',
    marginTop: '2%',
    marginBottom: '2%'
}

function SignUp() {
    const [signUpDetails, setSignUpDetails] = useState({ name: '', email: '', password: '', confirmPassword: '' })
    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setSignUpDetails({ ...signUpDetails, [name]: value })
    }

    return (
        <>
            <div className="SignUp">
                <img src={Logo} alt="Best Deal" width='180px' height='55px' className='BestDealLogo' />
                <Grid container sx={{ height: '100vh', position: 'absolute', zIndex: '-1' }}>

                    <Grid item md={4} sx={{ backgroundColor: 'white', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <Paper style={welcomeStatement} sx={{ marginLeft: '10%', marginRight: '10%' }}>Hey there, create your first account at </Paper>
                        <Paper sx={{ fontFamily: 'Readex Pro, sans-serif', fontWeight: '1000', color: '#454C59', fontSize: '40px', backgroundColor: 'transparent', boxShadow: 'none', marginLeft: '10%' }}><i><span style={{ color: '#0950D5' }}>Best </span><span>Deal</span></i> </Paper>
                    </Grid>
                    <Grid item md={8} sx={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <Paper style={welcomeStatement} sx={{ marginLeft: '10%', marginRight: '10%', marginBottom: '2%' }}>Sign Up </Paper>
                        <div className="SignUpContainer">
                            <Grid container>
                                <Grid item md={6} sx={{ display: 'block' }}>
                                    <TextField
                                        margin="normal"
                                        required
                                        id="name"
                                        label="Name"
                                        name="name"
                                        value={signUpDetails.name}
                                        onChange={handleChange}
                                        sx={{ width: '95%' }}
                                    />
                                    <TextField
                                        margin="normal"
                                        required
                                        id="password"
                                        label="Password"
                                        name="password"
                                        value={signUpDetails.password}
                                        onChange={handleChange}
                                        sx={{ width: '95%' }}
                                    />
                                </Grid>
                                <Grid item md={6} sx={{ display: 'block' }}>
                                    <TextField
                                        margin="normal"
                                        required
                                        id="email"
                                        label="Username/ Email"
                                        name="email"
                                        value={signUpDetails.email}
                                        onChange={handleChange}
                                        sx={{ width: '95%' }}
                                    />
                                    <TextField
                                        margin="normal"
                                        required
                                        id="confirmPassword"
                                        label="Confirm Password"
                                        name="confirmPassword"
                                        value={signUpDetails.confirmPassword}
                                        onChange={handleChange}
                                        sx={{ width: '95%' }}
                                    />
                                </Grid>
                            </Grid>
                        </div>
                        <Button style={button} sx={{ textTransform: 'capitalize' }}>Sign Up</Button>
                        <span>Already have an account? <Link to='/' style={{ textDecoration: 'none', color: '#0950D5' }}>Login</Link></span>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default SignUp
