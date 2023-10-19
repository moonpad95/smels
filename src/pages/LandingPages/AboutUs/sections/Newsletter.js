/* eslint-disable react/jsx-no-duplicate-props */
/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
/* import MKInput from "components/MKInput";
import MKButton from "components/MKButton"; */

// Images
import macbook from "assets/images/logos/gray-logos/logols2.png";
import bgImage from "assets/images/bgus.jpg";
import { Card } from "@mui/material";

function Newsletter() {
  return (
    
    <MKBox
      minHeight="25rem"
      opacity={0.8}
      width="100%"
      sx={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        borderRadius: 5,
        backgroundPosition: "top",
        backgroundAttachment: "fixed", // Fondo estático
        display: "grid",
        placeItems: "center",
      }}
    >
      <Container>
      <Grid >
  <Grid>
    <Card variant="outlined" >
      <Grid container spacing={2} className="side-by-side-boxes" position="relative">
        <Grid item xs={12} md={8}>
          <MKBox>
            <MKTypography
              variant="h5"
              color="gray"
              p={5}
              sx={{
                lineHeight: 2,
                fontStyle: "oblique",
                textAlign: "justify",
              }}
            >
              <strong>
                Nuestra empresa fue fundada por el médico Ismael Sanchez Lerma, quien ha trabajado mas de 10 años en la medicina laboral u ocupacional con la convicción de que las empresas que cuentan con sus servicios tengan enfoque en el cuidado de sus colaboradores enseñándoles e inculcándoles el cuidado de la salud, ya sea dentro o fuera del trabajo y con este objetivo tener a la par una población sana y productiva.
              </strong>{" "}
            </MKTypography>
          </MKBox>
        </Grid>
        <Grid item xs={12} md={4} container alignItems="center" justify="center">
          <MKBox>
            <MKBox
              component="img"
              src={macbook}
              alt="SMELS"
              width="100%"
            />
          </MKBox>
        </Grid>
      </Grid>
    </Card>
  </Grid>
</Grid>

      </Container>{" "}
    </MKBox>
  );
}

export default Newsletter;
