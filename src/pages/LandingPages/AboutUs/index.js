// About Us page sections
// import Information from "pages/LandingPages/AboutUs/sections/Information";
import Team from "pages/LandingPages/AboutUs/sections/Team";
// import Featuring from "pages/LandingPages/AboutUs/sections/Featuring";
// import Newsletter from "pages/LandingPages/AboutUs/sections/Newsletter";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
// import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/bg1.jpg";
// import imagelogo from "assets/images/logos/gray-logos/logols4.png";

function AboutUs() {
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
        <Container>
          <Grid container item xs={12} lg={4} justifyContent="center" mx="auto">
            {/* <MKTypography
              variant="h1"
              color="white"
              style={customStyles}
              backgroundColor="#ffffff99"
              textAlign="center"
              boxShadow="3px 3px 1px #f0f0f095"
              borderRadius={12}
              padding={0}
              pr={0}
              mt={-6}
              mb={1}
              zIndex={5}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              <img
                src={imagelogo}
                alt="Servicio Médico Empresarial L.S."
                width="80%"
              />
              <MKBox>
                <MKTypography
                  component="a"
                  variant="body1"
                  color="white"
                  href="https://www.facebook.com/profile.php?id=100064278240012&mibextid=ZbWKwL"
                  mr={3}
                >
                  <i className="fab fa-facebook" />
                </MKTypography>{" "}
                <MKTypography
                  component="a"
                  variant="body1"
                  color="white"
                  href="https://instagram.com/smels.mx?igshid=YmMyMTA2M2Y="
                  mr={3}
                >
                  <i className="fab fa-instagram" />
                </MKTypography>{" "}
                <MKTypography
                  component="a"
                  variant="body1"
                  color="white"
                  href="#"
                  mr={3}
                >
                  <i className="fab fa-twitter" />
                </MKTypography>{" "}
              </MKBox>{" "}
            </MKTypography>{" "} */}
          </Grid>{" "}
        </Container>{" "}
      </MKBox>{" "}
      <Card
        sx={{
          p: 2,
          mx: {
            xs: 2,
            lg: 3,
          },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) =>
            rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        {/* <Information /> */}
        <Team /> {/* <Featuring /> */} 
        {/* <Newsletter /> */}
      </Card>{" "}
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />{" "}
      </MKBox>{" "}
    </>
  );
}

export default AboutUs;
