// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";


// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Images
import bgImage from "assets/images/bgus.jpg";
import Formulario from "./form";

function Cont() {
  return (
    <MKBox component="section" py={{ xs: 0, lg: 6 }}>
      <Container>
        <Grid container item>
          <MKBox
            width="100%"
            bgColor="white"
            borderRadius="xl"
            shadow="xl"
            mb={6}
            sx={{ overflow: "hidden" }}
          >
            <Grid container spacing={2}>
              <Grid
                item
                xs={12}
                lg={5}
                position="relative"
                px={0}
                sx={{
                  backgroundImage: ({
                    palette: { gradients },
                    functions: { rgba, linearGradient },
                    
                  }) =>
                    `${linearGradient(
                      rgba(gradients.dark.main, 0.7),
                      rgba(gradients.info.state, 0.9)
                    )}, url(${bgImage})`,
                  backgroundSize: "cover",
                  backgroundAttachment: "fixed", // Fondo estático

                }}
              >
                <MKBox
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  width="100%"
                  height="100%"
                >
                  <MKBox py={6} pr={6} pl={{ xs: 6, sm: 12 }} my="auto">
                    <MKTypography variant="h2" color="white" sx={{fontWeight: "bold"}} textAlign="center" mb={5}>
                      Información de contacto
                    </MKTypography>
                    <MKTypography variant="h5" color="white" textAlign="justify" opacity={0.9} mb={3}>
                      Dejamos a tu disposición nuestros datos de contacto o si lo prefieres envianos un correo llenando los datos correspondientes del formulario.
                    </MKTypography>
                    <MKBox display="flex" color="white" p={1}>
                    <MKTypography variant="h6" color="white">
                        <i className="fa fa-whatsapp" aria-hidden="true" />
                    </MKTypography>
                      <MKTypography
                        component="span"
                        variant="h6"
                        color="white"
                        opacity={0.8}
                        ml={2}
                        fontWeight="bold"
                      >
                        (+52) 618 112 8866
                      </MKTypography>
                    </MKBox>
                    <MKBox display="flex" color="white" p={1}>
                      <MKTypography variant="h6" color="white">
                        <i className="fas fa-envelope" />
                      </MKTypography>
                      <MKTypography
                        component="span"
                        variant="h6"
                        color="white"
                        opacity={0.8}
                        ml={2}
                        fontWeight="bold"
                      >
                        israellermass@gmail.com
                      </MKTypography>
                    </MKBox>
                    <MKBox display="flex" color="white" p={1}>
                      <MKTypography variant="h6" color="white">
                        <i className="fas fa-map-marker-alt" />
                      </MKTypography>
                      <MKTypography
                        component="span"
                        variant="h6"
                        color="white"
                        opacity={0.8}
                        ml={2}
                        fontWeight="bold"
                      >
                        Calle  Isauro Venzor 1219, Durango, Mexico, 34000.
                      </MKTypography>
                    </MKBox>
                  </MKBox>
                </MKBox>
              </Grid>
              <Grid item xs={12} lg={7} mt={6}>
                <Formulario /> 
              </Grid>
            </Grid>
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Cont;
