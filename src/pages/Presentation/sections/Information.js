
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import { Typography } from "@mui/material";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Images
import bgFront from "assets/images/laboral_3.jpg";
import bgBack from "assets/images/laboral_2.jpg";

function Information() {
  return (
    <MKBox component="section" py={6} my={1}>
      <Container>
        <Grid container item xs={11} spacing={1} mb={8} alignItems="center" sx={{ mx: "auto" }}>
        <Grid
            item
            xs={12}
            md={0}
            sx={{
              mb: 3,
              mt: 1,
            }}
          >
            <MKTypography
              align="justify"
              variant="h6"
              color="dark"
              opacity={0.8}
              sx={{
                textAlign: "center",
              }}
            >
              Soluciones óptimas para la salud de tu empresa, contamos con conocimiento, afiliaciones y personal para ofrecerte los mejores servicios:
            </MKTypography>{" "}
          </Grid>{" "}
          <Grid item xs={12} lg={4} mt={3} sx={{ ml: "auto" }}>
            <Grid container spacing={1}>
              <Grid item xs={12} md={12}>
                <DefaultInfoCard
                  icon="medical_services"
                  title="Médico en tu empresa"
                  description="Servicio bajo coordinación de un médico con conocimiento y experiencia en salud laboral."
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4} mt={3} sx={{ ml: "auto" }}>
            <Grid container spacing={1}>
              <Grid item xs={12} md={12}>
                <DefaultInfoCard
                  icon="inventory"
                  title="Exámenes médicos"
                  description="Exámenes médicos de primer nivel para nuevo ingreso, reincorporación y periodicos."
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4} mt={3} sx={{ ml: "auto" }}>
            <Grid container spacing={1}>
              <Grid item xs={12} md={12}>
                <DefaultInfoCard
                  icon="paid"
                  title="Descuentos exclusivos"
                  description="Descuentos exclusivos para su empresa en servicios médicos privados e insumos médicos."
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg="12" sx={{ mx: "auto", my: 2 }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                icon="health_and_safety"
                title={<Typography variant="h4" color="#ffffff" component="p">
                Somos una empresa comprometida con la saluda y el bienestar de las empresas y sus trabajadores{" "}
              </Typography>}
              />
              <RotatingCardBack
                image={bgBack}
                title={<Typography variant="h4" color="#ffffff" component="p">
                ¡Conoce más sobre nuestros servicios!{" "}
              </Typography>}                
                description="Descubre los servicios y facilidades que tenemos para ofrecerte"
                action={{
                  type: "internal",
                  route: "/servicios",
                  label: "Conoce Nuestros Servicios",
                }}
              />
            </RotatingCard>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
