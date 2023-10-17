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
import Tooltip from "@mui/material/Tooltip";
import { useState } from "react";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import secretariaSalud from "assets/images/secretaria_salud.png";
import secretariaSaludDgo from "assets/images/salud_durango.png";
import imss from "assets/images/imss.jpg";
import issste from "assets/images/issste.jpg";
import seguroPopular from "assets/images/seguro_popular.jpeg";
import cruzRoja from "assets/images/cruz_roja.png";
import { Divider } from "@mui/material";


// Images
import bgImage from "assets/images/bg-presentation.jpg";


function Download() {
  const blueColor = '#dfdfdf'; // Color azul

  const [isZoomed, setIsZoomed] = useState(false);
  const [isZoomed1, setIsZoomed1] = useState(false);
  const [isZoomed2, setIsZoomed2] = useState(false);
  const [isZoomed3, setIsZoomed3] = useState(false);
  const [isZoomed4, setIsZoomed4] = useState(false);
  const [isZoomed5, setIsZoomed5] = useState(false);

  const handleMouseEnter1 = () => {
    setIsZoomed1(true);
  };

  const handleMouseLeave1 = () => {
    setIsZoomed1(false);
  };


  const handleMouseEnter = () => {
    setIsZoomed(true);
  };

  const handleMouseLeave = () => {
    setIsZoomed(false);
  };

  const imageStyle = {
    maxWidth: '100%',
    borderRadius: '100%',
    transition: 'transform 0.3s ease',
    transform: isZoomed ? 'scale(1.3)' : 'scale(1)',
  };
  const imageStyle1 = {
    maxWidth: '100%',
    borderRadius: '100%',
    transition: 'transform 0.3s ease',
    transform: isZoomed1 ? 'scale(1.3)' : 'scale(1)',
  };

  const handleMouseEnter2 = () => {
    setIsZoomed2(true);
  };

  const handleMouseLeave2 = () => {
    setIsZoomed2(false);
  };

  const imageStyle2 = {
    maxWidth: '100%',
    borderRadius: '100%',
    transition: 'transform 0.3s ease',
    transform: isZoomed2 ? 'scale(1.3)' : 'scale(1)',
  };
  const handleMouseEnter3 = () => {
    setIsZoomed3(true);
  };

  const handleMouseLeave3 = () => {
    setIsZoomed3(false);
  };

  const imageStyle3 = {
    maxWidth: '100%',
    borderRadius: '100%',
    transition: 'transform 0.3s ease',
    transform: isZoomed3 ? 'scale(1.3)' : 'scale(1)',
  };
  const handleMouseEnter4 = () => {
    setIsZoomed4(true);
  };

  const handleMouseLeave4 = () => {
    setIsZoomed4(false);
  };

  const imageStyle4 = {
    maxWidth: '100%',
    borderRadius: '100%',
    transition: 'transform 0.3s ease',
    transform: isZoomed4 ? 'scale(1.3)' : 'scale(1)',
  };
  const handleMouseEnter5 = () => {
    setIsZoomed5(true);
  };

  const handleMouseLeave5 = () => {
    setIsZoomed5(false);
  };

  const imageStyle5 = {
    maxWidth: '100%',
    borderRadius: '100%',
    transition: 'transform 0.3s ease',
    transform: isZoomed5 ? 'scale(1.3)' : 'scale(1)',
  };
  
  return (
    <MKBox component="section" py={{ xs: 0, sm: 12 }}>
     <MKBox
        width="100%"
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundAttachment: "fixed", // Fondo estático
          placeItems: "center"
        }}
      >
     <MKBox
        variant="gradient"
        opacity={0.8}
        bgColor="info"
        position="relative"
        borderRadius="xl"
      >
        <Container sx={{ position: "relative", zIndex: 2, py: 12 }} opacity={1}>
          <Grid container item xs={12} md={7} justifyContent="center" mx="auto" textAlign="center">
            <MKTypography variant="h2" color="light" mb={5}>
              ¿Quieres conocer más sobre nuestros paquetes empresariales?
            </MKTypography>
            <MKTypography variant="h3" color="light" mb={1}>
              ¡CONTACTANOS!{" "}
            </MKTypography>
          </Grid>
          <Grid container item xs={12} md={7} justifyContent="center" mx="auto" textAlign="center">
          <MKButton
              variant="gradient"
              color="info"
              size="large"
              component="a"
              mt={5}
              href="/contacto"
              sx={{ mb: 2 }}
            >
              CONTACTO
            </MKButton>
          </Grid>
        </Container>
        </MKBox>
      </MKBox>
      <Divider style={{ backgroundColor: blueColor, height: 5, marginTop: 100, marginBottom: 100 }} />
      <Container>
        <Grid container item xs={12} lg={8} mx="auto">
          <MKBox textAlign="center">
          <Grid container>
          <Grid
            item
            xs={12}
            md={0}
            sx={{
              mb: 10,
            }}
          >
            <MKTypography
              variant="h2"
              color="dark"
              sx={{
                textAlign: "center",
                mb: 3,
              }}
            >
              Sitios de interés{" "}
            </MKTypography>{" "}
            <MKTypography
              variant="body1"
              color="dark"
              opacity={0.8}
              sx={{
                textAlign: "center",
              }}
            >
              Para más información, dejamos a su disposición sitios web de entidades de salud.
            </MKTypography>{" "}
          </Grid>{" "}
        </Grid>{" "}
            <Grid container spacing={3} justifyContent="center">
              <Grid item xs={4} lg={2}>
                <Tooltip title="Secretaría de Salud Gobierno de México">
                  <MKBox
                    opacity={0.8}
                    component="a"
                    href="https://www.gob.mx/salud"
                    target="_blank"
                  >
                    <MKBox
                      style={imageStyle}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      component="img"
                      src={secretariaSalud}
                      width="100%"
                    />
                  </MKBox>
                </Tooltip>
              </Grid>
              <Grid item xs={4} lg={2}>
                <Tooltip title="Secretaría de Salud del Estado de Durango">
                  <MKBox
                    opacity={0.8}
                    component="a"
                    href="https://salud.durango.gob.mx"
                    target="_blank"
                  >
                    <MKBox
                      style={imageStyle1}
                      onMouseEnter={handleMouseEnter1}
                      onMouseLeave={handleMouseLeave1}
                      component="img"
                      src={secretariaSaludDgo}
                      width="100%"
                    />
                  </MKBox>
                </Tooltip>
              </Grid>
              <Grid item xs={4} lg={2}>
                <Tooltip title="Instituto Mexicano del Seguro Social">
                  <MKBox
                    opacity={0.8}
                    component="a"
                    href="http://www.imss.gob.mx"
                    target="_blank"
                  >
                    <MKBox
                      style={imageStyle2}
                      onMouseEnter={handleMouseEnter2}
                      onMouseLeave={handleMouseLeave2}
                      component="img"
                      src={imss}
                      width="100%"
                    />
                  </MKBox>
                </Tooltip>
              </Grid>
              <Grid item xs={4} lg={2}>
                <Tooltip title="Instituto de Seguridad y Servicios Sociales de los Trabajadores del Estado">
                  <MKBox
                    opacity={0.8}
                    component="a"
                    href="https://www.gob.mx/issste"
                    target="_blank"
                  >
                    <MKBox
                      component="img"
                      style={imageStyle3}
                      onMouseEnter={handleMouseEnter3}
                      onMouseLeave={handleMouseLeave3}
                      src={issste}
                      width="100%"
                    />
                  </MKBox>
                </Tooltip>
              </Grid>
              <Grid item xs={4} lg={2}>
                <Tooltip title="Seguro Popular Mexicano">
                  <MKBox
                    component="a"
                    href="http://www.imss.gob.mx/imss-bienestar"
                    target="_blank"
                  >
                    <MKBox
                      component="img"
                      style={imageStyle4}
                      onMouseEnter={handleMouseEnter4}
                      onMouseLeave={handleMouseLeave4}
                      src={seguroPopular}
                      width="100%"
                    />
                  </MKBox>
                </Tooltip>
              </Grid>
              <Grid item xs={4} lg={2}>
                <Tooltip title="Cruz Roja Mexicana">
                  <MKBox
                    opacity={0.8}
                    component="a"
                    href="https://www.cruzrojamexicana.org.mx"
                    target="_blank"
                  >
                    <MKBox
                      component="img"
                      style={imageStyle5}
                      onMouseEnter={handleMouseEnter5}
                      onMouseLeave={handleMouseLeave5}
                      src={cruzRoja}
                      width="100%"
                    />
                  </MKBox>
                </Tooltip>
              </Grid>
            </Grid>
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Download;
