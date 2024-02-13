import React from 'react';
import { Box, Button, FormControl, IconButton, InputAdornment, InputLabel, Modal, OutlinedInput, TextField, Typography } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

type Props = {
    open: boolean;
    handleClose: () => void;
}

const LoginComp = (props: Props) => {

    const { open, handleClose } = props;

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return (
        <>
            {open && <div className="overlay" onClick={handleClose}></div>}
            <div className='loginCompContainer'>
                <Modal
                    className='loginModalStyle'
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box className='loginModalBody'>
                        <Typography id="modal-modal-title" sx={{ fontSize: "35px" }}>
                            Giriş Yap
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ m: 2, fontSize: "15px", textAlign: "center" }}>
                            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                        </Typography>
                        <TextField id="outlined-basic" className="customTextField" label="E-mail" variant="outlined" sx={{ m: 1, width: '35ch' }} />
                        <FormControl variant="outlined" sx={{ m: 1, width: '35ch' }}>
                            <InputLabel>Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                className="customPassword"
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                            />
                        </FormControl>
                        <div className='loginPageForgotPasswordContainer'>
                            <a href='/' className='loginPageForgotPassword'>Şifremi unuttum</a>
                        </div>
                        <Button variant="contained" className='loginButtonCustom'>Giriş Yap</Button>
                        <div className='line'></div>
                    </Box>
                </Modal>
            </div>
        </>
    )
}

export default LoginComp;