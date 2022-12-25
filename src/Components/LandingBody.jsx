import React from "react";
//mui components
import styled from "@emotion/styled";
import { Box } from "@mui/system";
import { Grid } from "@mui/material";
//components
import { Banner } from "./Banner";
import { Message } from "./Message"
//Styling
const Wrapper = styled(Box)`
padding:0 0 4rem 0;
background-color:#FFF5F1;
`;
const WrapperTop = styled(Box)`
padding:0 1.1rem 1.1rem 1.1rem;
background-color:white;
`;

export const LandingBody = () => {
   return (
      <WrapperTop>
         <Wrapper>
            <Grid container spacing={0} justifyContent="center">
               <Grid item xl={3} lg={6} md={6} sm={12} xs={12} >
                  <Message />
               </Grid>
               <Grid item xl={3} lg={6} md={6} sm={12} xs={12}>
                  <Banner />
               </Grid>
            </Grid>
         </Wrapper >
      </WrapperTop>
   )


}