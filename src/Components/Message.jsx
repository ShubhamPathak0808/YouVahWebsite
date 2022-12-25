import React from "react";
//mui components
import styled from "@emotion/styled";
import { Box } from "@mui/system";
import { Button,Typography } from "@mui/material";
//Styling
const Info1 = styled(Typography)`
padding: 2.5rem 1.25rem 1.25rem 1.25rem;
font-style: normal;
font-weight: 200;
font-size: 3.5rem;
line-height: 126%;
color: #181B32
`;
const Info2 = styled(Typography)`
padding:0 1.25rem 1.25rem 1.25rem;
font-style: normal;
font-weight: 300;
font-size: 1.13rem;
line-height: 190%;
color: #666680;
`;
const StartedBtn = styled(Button)`
background: #524FD5;
border-radius: 73px;
color:white;
text-decoration:none;
text-transform:capitalize;
`;

export const Message = () => {
    return (
        <Box style={{ backgroundColor: "#FFF5F1", padding: "5.625rem 3.125rem 5.625rem 3.125rem"  }}>
            <Info1>
                A <span style={{ color: 'purple' }}>unique</span> approach to learning foreign languages online
            </Info1>
            <Info2>
                Learn at your own pace,with lifetime access on mobile and desktop
            </Info2 >
            <Box style={{ padding: '0 1.25rem 1.25rem 0' }}>
                <StartedBtn variant="contained" size="large" >
                    Get started
                </StartedBtn>
            </Box>
        </Box>
    );
}