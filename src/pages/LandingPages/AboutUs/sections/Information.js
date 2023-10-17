/*
 */

// @mui material components

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import {
  Divider,
  Card,
} from "@mui/material";
import bgImage from "assets/images/v870-tang-35.jpg";
import CustomizedAccordions from "./acordeon";

const blueColor = "f0f0f0"; // Color azul

function Information() {

  return (
    <MKBox component="section" pb={12}>
        <Grid container spacing={5} alignItems="center" id="medicos">
          <Grid item sm={12} lg={12} mb={12}>
          <Container>
          <Grid container justifyContent="flex-start">
          <Grid item xs={12} md={4} my={3}>
                <MKBox
                  mb={{
                    xs: 5,
                    md: 0,
                  }}
                >
                  <DefaultInfoCard
                    icon="badge"
                    title="Manejo y Contrato De Médicos Calificados"
                    description="Servicio de contratación y administración del médico proporcionado a tu empresa, incluye pago, prestaciones y su manejo administrativo."
                  />
                </MKBox>{" "}
              </Grid>{" "}
              <Grid item xs={12} md={4} my={3}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon="inventory"
                    title="Servicios Médicos Profesionales"
                    description="Servicio bajo coordinación de un médico con conocimiento y experiencia en salud laboral."
                  />
                </MKBox>{" "}
              </Grid>{" "}
              <Grid item xs={12} md={4} my={3}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon="medical_services"
                    title="Salud En Tu Empresa"
                    description="Programa de salud en tu empresa estandarizado."
                  />
                </MKBox>{" "}
              </Grid>{" "}
              <Grid item xs={12} md={4} my={3}>
                <MKBox
                  mb={{
                    xs: 5,
                    md: 0,
                  }}
                >
                  <DefaultInfoCard
                    icon="payments"
                    title="Deducción de impuestos"
                    description="Servicio deducible de impuestos. "
                  />
                </MKBox>{" "}
              </Grid>{" "}
              <Grid item xs={12} md={4} my={3}>
                <MKBox
                  mb={{
                    xs: 5,
                    md: 0,
                  }}
                >
                  <DefaultInfoCard
                    icon="volunteer_activism"
                    title="Promoción de la Salud y Campañas"
                    description="Campañas de salud y promoción de los habitos de salud y seguridad por parte del médico en labores dentro de tu empresa."
                  />
                </MKBox>{" "}
              </Grid>{" "}
              <Grid item xs={12} md={4} my={3}>
                <MKBox
                  mb={{
                    xs: 5,
                    md: 0,
                  }}
                >
                  <DefaultInfoCard
                    icon="monitoring"
                    title="Estadísticas de Salud Laboral"
                    description="Contamos con servicio de estadísticas de salud laboral."
                  />
                </MKBox>{" "}
              </Grid>{" "}
              <Grid item xs={12} md={4} my={3}>
                <MKBox
                  mb={{
                    xs: 5,
                    md: 0,
                  }}
                >
                  <DefaultInfoCard
                    icon="monitoring"
                    title="Exámenes Médicos"
                    description="Le ofrecemos exámenes médicos de ingreso, exámenes médicos periódicos, consulta de primer nivel de atención."
                  />
                </MKBox>{" "}
              </Grid>{" "}
              <Grid item xs={12} md={4} my={3}>
                <MKBox
                  mb={{
                    xs: 5,
                    md: 0,
                  }}
                >
                  <DefaultInfoCard
                    icon="vaccines"
                    title="Implementos Médicos y Farmacia"
                    description="Por un costo extra, le ofrecemos el servicio de implementos médicos y farmacia para su empresa."
                  />
                </MKBox>{" "}
              </Grid>{" "}
              <Grid item xs={12} md={4} my={3}>
                <MKBox
                  mb={{
                    xs: 5,
                    md: 0,
                  }}
                >
                  <DefaultInfoCard
                    icon="error_med"
                    title="Atención Preferencial Con Especialistas"
                    description="Canalización con especialistas privados para una atención preferencial, enfocada y para disminuir un primer riesgo."
                  />
                </MKBox>{" "}
              </Grid>{" "}
            </Grid>{" "}
          </Container>
            <Divider style={{ backgroundColor: blueColor, height: 5, marginTop: 100 }} />
          </Grid>{" "}
          <Grid
            item
            xs={12}

          >
            <Grid mb={5}>
            <MKTypography
              variant="h2"
              color="info"
              sx={{
                textAlign: "center",
                mb: 3,
              }}
            >
              Funciones del médico en tu empresa{" "}
            </MKTypography>{" "}
            <MKTypography
              variant="body1"
              color="dark"
              opacity={0.8}
              sx={{
                textAlign: "center",
              }}
            >
              Conoce la lista de funciones que desempeñará el médico en tu empresa.{" "}
            </MKTypography>{" "}
            </Grid>
            <MKBox
            minHeight="45rem"
            opacity={0.8}
            width="100%"
            sx={{
              backgroundImage: `url(${bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "cover",
              backgroundAttachment: "fixed", // Fondo estático
              display: "grid",
              placeItems: "center",
            }}
          >
            <Container>
            <Grid>
                <Grid item md={12} xs={12} >
                  <Card variant="outlined">
                    <CustomizedAccordions />
                  </Card>
                </Grid>{" "}
              </Grid> 
            </Container>
          </MKBox>{" "}
          </Grid>{" "}
        </Grid>{" "}
      {/* <Divider
        style={{
          backgroundColor: blueColor,
          height: 5,
          marginTop: 50,
          marginBottom: 100,
        }}
      /> */}
    </MKBox>
  );
}

export default Information;
