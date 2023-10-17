/*
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Divider } from "@mui/material";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// Presentation page sections

import Information from "pages/Presentation/sections/Information";
import Download from "pages/Presentation/sections/Download";

// Presentation page components
import BuiltByDevelopers from "pages/Presentation/components/BuiltByDevelopers";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";


// Images
import bgImage from "assets/images/bg1.jpg";
import imagelogo from "assets/images/logos/gray-logos/logols3.png";
import Carrusel from "examples/Cards/Slider/Slider";

function Presentation() {
  const customStyles = {
    textShadow: "1px 1px 3px #f0f0f095", // Personaliza estos valores según tus preferencias
    color: "f0f0f0",
  };
  const blueColor = 'f0f0f0'; // Color azul
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
        minHeight="50vh"
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
        <Grid container item xs={9} lg={5} md={6} sm={9} justifyContent="center" mx="auto">
          <Card
            style={customStyles}
            zIndex={5}
            sx={{
              backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
              backdropFilter: "blur(10px)",
              boxShadow: ({ boxShadows: { lg } }) => lg,
              borderRadius: 20,
              display: "flex",
              alignItems: "center",  // Centra verticalmente
              justifyContent: "center"  // Centra horizontalmente
            }}
          >
            <img src={imagelogo} alt="Servicio Médico Empresarial L.S." width="100%" />
          </Card>
        </Grid>
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
        <Carrusel />
        {/* <Container>
          <MKBox xs={12} lg={12}>
            <Grid
              item
              xs={12}
              md={0}
              sx={{
                mb: 10,
                mt: 4,
              }}
            >
              <MKTypography
                variant="h1"
                color="info"
                sx={{
                  textAlign: "center",
                  mb: 3,
                }}
              >
                Servicio Médico Empresarial L.S.{" "}
              </MKTypography>{" "}
              <MKTypography
                variant="h5"
                color="dark"
                opacity={0.8}
                sx={{
                  textAlign: "center",
                }}
              >
                Servicios médicos especializados en soporte empresarial.{" "}
              </MKTypography>{" "}
            </Grid>{" "}
          </MKBox>{" "}
        </Container> */}
        <Divider style={{ backgroundColor: blueColor, height: 5, marginTop: 24 }} />
        <Grid container>
          <Grid
            item
            xs={12}
            md={0}
            sx={{
              mt: 6,
              mb: -6
            }}
          >
            <MKTypography
              variant="h2"
              color="info"
              sx={{
                textAlign: "center",
                mb: 1,
              }}
            >
              ¡Contamos con grandes beneficios!{" "}
            </MKTypography>{" "}
            <MKTypography
              variant="body1"
              color="dark"
              opacity={0.8}
              sx={{
                textAlign: "center",
              }}
            >
              Con más de 10 años de experiencia, ¡Estamos listos para ayudarte!
            </MKTypography>{" "}
            <Information />
          </Grid>{" "}
        </Grid>{" "}
        <Divider style={{ backgroundColor: blueColor, height: 5, marginTop: 50, marginBottom: 100 }} />
        <BuiltByDevelopers />
        <Download />{" "}
      </Card>{" "}
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />{" "}
      </MKBox>{" "}
    </>
  );
}

export default Presentation;
