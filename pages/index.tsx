import * as React from "react";
import type { NextPage } from "next";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { CenteredListItemText } from "../src/components/List/CenteredListItemText";
import Copyright from "../src/PageBase/Copyright";
import NavBar from "../src/PageBase/NavBar";
import {
  Button,
  CssBaseline,
  Fade,
  Grid,
  Grow,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  Paper,
  Zoom,
} from "@mui/material";
import { Title, TitleOutlined } from "@mui/icons-material";
import { ThemeProvider } from "@emotion/react";
import theme from "../src/theme";
import { motion, useAnimation } from "framer-motion";
import { TypingText } from "../src/PageBase/TypingText";

const Home: NextPage = () => {
  return (
    <div>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          minHeight: "600px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid
          container
          spacing={6}
          sx={{
            display: "flex",
            alignItems: "center",
            maxWidth: "80%",
          }}
        >
          <Grid item md={8}>
            <Typography
              variant="h3"
              fontWeight={700}
              sx={{ paddingBottom: "15px" }}
            >
              Hi 👋, welcome to my website.
            </Typography>

            <Box sx={{ mx: "5px" }}>
              <Typography variant="h6" sx={{ paddingBottom: "5px" }}>
                <TypingText>About me</TypingText>
              </Typography>
              <TypingText>
                I am Iven Beck, a 20 year old Business Informatics student from
                Germany who is interested in Software Development and Data
                Science. I am currently attending the third Semester of my
                studies at Mannheim Business School.
              </TypingText>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Home;
