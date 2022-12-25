import React from "react";
//resources
import bgImage from "../Images/bgImage.jpg";
import feedBackImage from "../Images/feedBackImage.jpg";
import moreFeedbackImage from "../Images/moreFeedbackImage.jpg";
import allCoursesImage from "../Images/allCoursesImage.jpg";
//mui components
import styled from "@emotion/styled";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
//styling
const ImgButton = styled(Button)`
background-color:white;
border-radius: 25px;
color:blue;
text-decoration:none;
text-transform:capitalize;
`;

export const Banner = () => {
    return (
        <>
            <Box textAlign="center">
                <Box style={{ background: `url(${bgImage}) no-repeat center #FFF5F1` }}>
                    <Box padding="7.5rem 1.25rem 1.25rem 1.25rem">
                        <Box textAlign="left">
                            <ImgButton><img src={feedBackImage} alt="cooper" width="230rem" /></ImgButton>
                        </Box>
                        <Box textAlign="right">
                            <ImgButton><img src={allCoursesImage} alt="courses" width="100rem" /></ImgButton>
                        </Box>
                        <Box textAlign="center" padding="15.625rem 0 1.25rem 0">
                            <ImgButton><img src={moreFeedbackImage} atr="students" width="230rem" /></ImgButton>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    );
}