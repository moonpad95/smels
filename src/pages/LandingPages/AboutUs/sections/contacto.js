import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { Divider } from "@mui/material";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";
import MKTypography from "components/MKTypography";

// Images
import bgImage from "assets/images/bg1.jpg";
import Whatsapi from "./whatsapi";
import Maps from "./maps";
import Cont from "./cont";
import WhatsAppButton from "./whatsbtn";

function Contacto() {
  const visibleRoutes = routes.filter((route) => !route.hidden);
  const blueColor = "f0f0f0"; // Color azul

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
          placeItems: "center",
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
              mt: 5,
            }}
          >
            Contactanos{" "}
          </MKTypography>{" "}
          <MKTypography
            variant="h5"
            color="dark"
            opacity={0.8}
            sx={{
              textAlign: "center",
            }}
          >
            Dejamos a tu disposición un mapa con nuestra ubicación.{" "}
          </MKTypography>{" "}
        </Grid>{" "}
        <Maps />
        <Divider
          style={{
            backgroundColor: blueColor,
            height: 5,
            marginTop: 50,
            marginBottom: 100,
          }}
        />{" "}
        <Container>
          <Grid
            item
            xs={12}
            sx={{
              mb: 12,
            }}
          >
            <MKTypography
              variant="h2"
              color="info"
              sx={{
                textAlign: "center",
                mb: 3,
                mt: 1,
              }}
            >
              Siguenos en Facebook{" "}
            </MKTypography>{" "}
            <MKTypography
              variant="body1"
              color="dark"
              opacity={0.8}
              sx={{
                textAlign: "center",
              }}
            >
              Conoce las últimas novedades de nuestra página oficial de Facebook.{" "}
            </MKTypography>{" "}
          </Grid>{" "}
          <Grid container spacing={5} id="mensaje">
            <Grid item xs={12} lg={6} mx={3}>
              <MKTypography
                variant="h4"
                color="info"
                opacity={0.8}
                sx={{
                  textAlign: "center",
                }}
              >
                Siguenos en nuestra página de Facebook y mantente el día con las últimas novedades en nuestros beneficios y convenios.{" "}
              </MKTypography>{" "}
              <MKTypography
                variant="body1"
                color="dark"
                opacity={0.8}
                my={10}
                sx={{
                  textAlign: "justify",
                }}
              >
                Tambien dejamos a tu disposición nuestro chat en WhatApp para mayor comodidad.{" "}
              </MKTypography>{" "}
              <Grid>
                <WhatsAppButton />
              </Grid>
            </Grid>{" "}
            <Grid item xs={12} lg={5}>
              <Whatsapi />
            </Grid>{" "}
          </Grid>{" "}
        </Container>
        <Divider
          style={{
            backgroundColor: blueColor,
            height: 5,
            marginTop: 50,
            marginBottom: 100,
          }}
        />{" "}
        <Grid
          item
          xs={12}
          sx={{
            mb: 2,
          }}
          id="contacto"
        >
          <MKTypography
            variant="h2"
            color="info"
            sx={{
              textAlign: "center",
              mb: 3,
              mt: 5,
            }}
          >
            Información de contacto{" "}
          </MKTypography>{" "}
          <MKTypography
            variant="body1"
            color="dark"
            opacity={0.8}
            sx={{
              textAlign: "center",
            }}
          >
            Dejamos a tu disposición la información de contacto oficial y el canal directo para contactarnos via correo electrónico.{" "}
          </MKTypography>{" "}
        </Grid>{" "}
        <Cont />
        <Divider
          style={{
            backgroundColor: blueColor,
            height: 5,
            marginBottom: 50,
          }}
        />
       <MKBox pt={18} pb={6}>
          <Container>
            <Grid container spacing={3}>
              <Grid item xs={12} lg={5} ml="auto" sx={{ textAlign: { xs: "center", lg: "left" } }}>
                <MKTypography variant="h4" fontWeight="bold" mb={0.5}>
                  Gracias por tu preferencia!
                </MKTypography>
                <MKTypography variant="body1" color="text">
                  Soluciones médicas a tú medida
                </MKTypography>
              </Grid>
            </Grid>
          </Container>
        </MKBox> 
      </Card>{" "}
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />{" "}
      </MKBox>{" "}
    </>
  );
}

export default Contacto;
