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
import MKTypography from "components/MKTypography";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import {
  Card,
  Divider,
  CardContent,
  Typography,
  CardHeader,
} from "@mui/material";
// Material Kit 2 React examples
// import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";
import bgImage from "assets/images/bg3.jpg"
import us from "assets/images/bg4.jpg"

// Images
// import coinbase from "assets/images/logos/gray-logos/logo-coinbase.svg";
// import nasa from "assets/images/logos/gray-logos/logo-nasa.svg";
// import netflix from "assets/images/logos/gray-logos/logo-netflix.svg";
// import pinterest from "assets/images/logos/gray-logos/logo-pinterest.svg";
// import spotify from "assets/images/logos/gray-logos/logo-spotify.svg";
// import vodafone from "assets/images/logos/gray-logos/logo-vodafone.svg";

function Featuring() {
  const blueColor = 'f0f0f0'; // Color azul

  return (
    <MKBox component="section" pt={3} >
        {" "}
        {/* <Grid container spacing={3} sx={{ mb: 12 }}>
                <Grid item xs={6} md={4} lg={2}>
                  <MKBox component="img" src={coinbase} alt="coinbase" width="100%" opacity={0.7} />
                </Grid>
                <Grid item xs={6} md={4} lg={2}>
                  <MKBox component="img" src={nasa} alt="nasa" width="100%" opacity={0.7} />
                </Grid>
                <Grid item xs={6} md={4} lg={2}>
                  <MKBox component="img" src={netflix} alt="netflix" width="100%" opacity={0.7} />
                </Grid>
                <Grid item xs={6} md={4} lg={2}>
                  <MKBox component="img" src={pinterest} alt="pinterest" width="100%" opacity={0.7} />
                </Grid>
                <Grid item xs={6} md={4} lg={2}>
                  <MKBox component="img" src={spotify} alt="spotify" width="100%" opacity={0.7} />
                </Grid>
                <Grid item xs={6} md={4} lg={2}>
                  <MKBox component="img" src={vodafone} alt="vodafone" width="100%" opacity={0.7} />
                </Grid>
              </Grid> */}{" "}
        <MKBox mt={7} sx={{borderRadius: 5}}>
          <MKBox
            variant="gradient"
            bgColor="info"
            position="relative"
            sx={{
              overflow: "hidden",
            }}
          >
            <MKBox
              component="img"
              src={bgImage}
              alt="pattern-lines"
              sx={{ 
                borderRadius: 5,
                backgroundAttachment: "fixed", // Fondo estático
            }}
              position="absolute"
              top={0}
              left={0}
              width="100%"
              zIndex={1}
              opacity={0.5}
            />{" "}
            <Container
              sx={{
                position: "relative",
                zIndex: 2,
                pt: 12,
              }}
            >
              <Grid
                container
                item
                spacing={8}
                xs={12}
                md={12}
                fontWeight="bold"
                justifyContent="center"
                pb={8}
              >
                <Grid item xs={12} md={4}>  
                    <Card
                    >
                    <CardHeader
                      align="center"
                      title={
                        <Typography
                          variant="h2"
                          color="textInfo"
                          align="center"
                          component="p"
                        >
                          Misión
                        </Typography>
                      }
                    />{" "}
                    <CardContent>
                      <Typography
                        variant="h5"
                        color="textSecondary"
                        component="p"
                        my={2}
                        textAlign="justify"
                      >
                        Proporcionar un adecuado servicio de salud ocupacional a las empresas acorde a las normativas vigentes del sistema de salud en México.
                      </Typography>{" "}
                    </CardContent>{" "}
                  </Card>{" "}
                </Grid>{" "}
                <Grid item xs={12} md={4} my={12}>
                  <Card>
                  <CardHeader
                    align="center"
                    title={
                      <Typography
                        variant="h2"
                        color="textInfo"
                        align="center"
                        component="p"
                      >
                        Visión
                      </Typography>
                    }
                  />{" "}
                  <CardContent>
                    <Typography
                      variant="h5"
                      color="textSecondary"
                      component="p"
                      my={2}
                      textAlign="justify"
                    >
                      Ser una empresa líder en salud ocupacional a nivel estatal y federal con la mira a superar las barreras.
                    </Typography>{" "}
                  </CardContent>{" "}

                </Card>{" "}
                </Grid>{" "}
                <Grid item xs={12} md={4}>
                 <Card>
                  <CardHeader
                    align="center"
                    title={
                      <Typography
                        variant="h2"
                        color="textInfo"
                        align="center"
                        component="p"
                      >
                        Política de calidad
                      </Typography>
                    }
                  />{" "}
                  <CardContent>
                    <Typography
                      variant="h5"
                      color="textSecondary"
                      component="p"
                      my={2}
                      textAlign="justify"
                    >
                      Implementar servicios de Salud Laboral especializados que ayuden a organizaciones y empresas a mantener su población de trabajadores sanos y con un buen estilo de vida.
                    </Typography>{" "}
                  </CardContent>{" "}
                </Card>{" "}
                </Grid>{" "}
              </Grid>{" "}
            </Container>{" "}
          </MKBox>{" "}
        </MKBox>{" "}

        <Divider style={{ backgroundColor: blueColor, height: 5, marginTop: 50, marginBottom: 100 }} />
        <Grid
            item
            xs={12}
            md={0}
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
                mt: 5
              }}
            >
            Nuestro servicio
            </MKTypography>{" "}
            <MKTypography
              variant="body1"
              color="dark"
              opacity={0.8}
              sx={{
                textAlign: "center",
              }}
            >
              Conoce sobre nuestro servicio y la manera en que operamos.{" "}
            </MKTypography>{" "}
          </Grid>{" "}
        <MKBox
      minHeight="45rem"
      opacity={0.8}
      width="100%"
      sx={{
        backgroundImage: `url(${us})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "grid",
        placeItems: "center",
      }}
    >
      <Container>
      <Grid container>
  <Grid item md={7} xs={12}>
    <Card variant="outlined" >
      <Grid container className="side-by-side-boxes" position="relative">
        <Grid item xs={12} md={12}>
          <MKBox>
          <MKTypography
              variant="h2"
              color="info"
              px={5}
              sx={{
                lineHeight: 2,
                textAlign: "center",
              }}
            >
            Forma en que opera nuestra empresa
            </MKTypography>
            <MKTypography
              variant="body2"
              color="gray"
              p={5}
              sx={{
                lineHeight: 2,
                textAlign: "justify",
              }}
            >
              Dentro de nuestras labores, nos encargamos de cuidar la salud de los empleados, identificando y abordando los posibles efectos negativos que el trabajo puede tener en su salud física y mental. Esto incluye exámenes médicos periódicos, evaluación de riesgos laborales, consejos de prevención, tratamiento de lesiones laborales y el cumplimiento de regulaciones de salud y seguridad en el lugar de trabajo.
            </MKTypography>
          </MKBox>
        </Grid>
      </Grid>
    </Card>
  </Grid>
</Grid>

      </Container>{" "}
    </MKBox>
    </MKBox>
  );
}

export default Featuring;
