// About Us page sections
// import Information from "pages/LandingPages/AboutUs/sections/Information";
// import Team from "pages/LandingPages/AboutUs/sections/Team";
// import Featuring from "pages/LandingPages/AboutUs/sections/Featuring";
import Newsletter from "pages/LandingPages/AboutUs/sections/Newsletter";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { Divider } from "@mui/material";


// Material Kit 2 React components
import MKBox from "components/MKBox";
// import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";
import MKTypography from "components/MKTypography";

// Images
import bgImage from "assets/images/bg1.jpg";
import BuiltByDevelopers from "pages/Presentation/components/BuiltByDevelopers";
import Docs from "examples/Cards/docs";
import Featuring from "../AboutUs/sections/Featuring";
// import imagelogo from "assets/images/logos/gray-logos/logols4.png";

function Author() {
  const visibleRoutes = routes.filter((route) => !route.hidden);
  const blueColor = 'f0f0f0'; // Color azul

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
              ¿Quiénes somos?{" "}
            </MKTypography>{" "}
            <MKTypography
              variant="h5"
              color="dark"
              opacity={0.8}
              sx={{
                textAlign: "center",
              }}
            >
              Conoce más sobre nosotros y nuestra historia y nuestras convicciones{" "}
            </MKTypography>{" "}
          </Grid>{" "}
        {/* <Information /> */}
        {/* <Team /> {/* <Featuring /> */}  
        <Newsletter />
        <Divider style={{ backgroundColor: blueColor, height: 5, marginTop: 50, marginBottom: 100 }} />
        <Grid
            item
            xs={12}
            md={0}
            sx={{
              mb: 2,
            }}
            id="politicas"
          >
            <MKTypography
              variant="h2"
              color="info"
              sx={{
                textAlign: "center",
                mb: 3,
                mt: 5
              }}
            >
              Conoce sobre nuestros principios
            </MKTypography>{" "}
            <MKTypography
              variant="body1"
              color="dark"
              opacity={0.8}
              sx={{
                textAlign: "center",
              }}
            >
              Dejamos a tu disposición nuestra misión, visión y políticas empresariales.{" "}
            </MKTypography>{" "}
          </Grid>{" "}
        <Featuring />
        <Docs />
        <Divider style={{ backgroundColor: blueColor, height: 5, marginBottom: 50 }} />
        <BuiltByDevelopers />
      </Card>{" "}
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />{" "}
      </MKBox>{" "}
    </>
  );
}

export default Author;
