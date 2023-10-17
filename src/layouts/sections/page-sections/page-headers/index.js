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
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";



// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/bg1.jpg";
import Information from "pages/LandingPages/AboutUs/sections/Information";



function PageHeaders() {
  const visibleRoutes = routes.filter((route) => !route.hidden);
  return (
    <>
      <DefaultNavbar
        action={{
          type: "internal",
          route: "/contacto",
          label: "CONTACTANOS",
          color: "info",
        }}
        routes={visibleRoutes}
        sticky
      />
      <MKBox
        minHeight="40vh"
        opacity={0.8}
        width="100%"
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundAttachment: "fixed", // Fondo estático
          display: "grid",
          placeItems: "center"
        }}
      >
        <Container />
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
                          <Grid
            item
            xs={12}
            md={0}
            sx={{
              mb: 12,
            }}
          >
            <MKTypography
              variant="h1"
              color="info"
              sx={{
                textAlign: "center",
                mb: 3,
                mt: 5
              }}
            >
              Beneficios de afiliarte con nosotros{" "}
            </MKTypography>{" "}
            <MKTypography
              variant="h5"
              color="dark"
              opacity={0.8}
              sx={{
                textAlign: "center",
              }}
            >
              Conoce sobre los beneficios de afiliarte con nosotros!{" "}
            </MKTypography>{" "}
          </Grid>{" "}
          <Grid>
          <Information />  
          </Grid>
          <Grid id="medicos" />       
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default PageHeaders;
