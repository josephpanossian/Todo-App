import React from "react";
import {
    Box,
    Button,
    Checkbox,
    ClickAwayListener,
    Stack,
    TextField,
    Typography,
} from "@mui/material";

const Login = () => {

    const elementWidth = "90%";
    const [email, setEmail] = React.useState("");
    const [validEmail, setValidEmail] = React.useState(true);
    const [password, setPassword] = React.useState("");

    const handleClickAway = (event) => {
        const valid =  email.length === 0 ? true : /\S+@\S+\.\S+/.test(email); 
        setValidEmail(valid);
    };
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    return (
        <Stack
            spacing={2}
            sx={{
                height: "70vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Typography variant="h2">Login</Typography>
            <ClickAwayListener onClickAway={() => handleClickAway()}>
                <TextField
                    error={!validEmail}
                    value={email}
                    label="email"
                    type="email"
                    helperText={validEmail ? '' : "Invalid Email"}
                    onChange={(e) => handleEmailChange(e)}
                    sx={{
                        width: elementWidth,
                    }}
                ></TextField>
            </ClickAwayListener>
            <TextField
                value={password}
                label="password"
                type="password"
                onChange={(e) => handlePasswordChange(e)}
                sx={{
                    width: elementWidth,
                }}
            ></TextField>
            <Box
                sx={{
                    width: elementWidth,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Checkbox></Checkbox>
                <Typography variant="subtitle2" flexGrow={2} 
                color='text.secondary'
                >
                    Remeber Me
                </Typography>
                <Button flexgrow={1} variant="contained">
                    Log In
                </Button>
            </Box>
            <Box
                sx={{
                    width: elementWidth,
                    display: "flex",
                }}
            >
                <Button flexgrow={2}>Create An Account</Button>
            </Box>
        </Stack>
    );
};

export default Login;
