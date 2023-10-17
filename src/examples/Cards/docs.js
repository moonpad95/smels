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
import MKTypography from "components/MKTypography";
import folder from "assets/images/folder.svg";
import { Divider } from "@mui/material";


function Docs() {
  const blueColor = '#dfdfdf'; // Color azul

  const [isZoomed, setIsZoomed] = useState(false);
  const [isZoomed1, setIsZoomed1] = useState(false);
  const [isZoomed2, setIsZoomed2] = useState(false);
//   const [isZoomed3, setIsZoomed3] = useState(false);


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
//   const handleMouseEnter3 = () => {
//     setIsZoomed3(true);
//   };

//   const handleMouseLeave3 = () => {
//     setIsZoomed3(false);
//   };

//   const imageStyle3 = {
//     maxWidth: '100%',
//     borderRadius: '100%',
//     transition: 'transform 0.3s ease',
//     transform: isZoomed3 ? 'scale(1.3)' : 'scale(1)',
//   };

  
  return (
    <MKBox component="section" py={{ xs: 0, sm: 12 }}>
      <Divider style={{ backgroundColor: blueColor, height: 5, marginTop: 0, marginBottom: 100 }} />
      <Container>
        <Grid container item xs={12} lg={8} mx="auto">
          <MKBox textAlign="center">
          <Grid container>
          <Grid
            item
            xs={12}
            sx={{
              mb: 10,
            }}
          >
            <MKTypography
              variant="h2"
              color="info"
              sx={{
                textAlign: "center",
                mb: 3,
              }}
            >
              Marco legal y reglamento{" "}
            </MKTypography>{" "}
            <MKTypography
              variant="body1"
              color="dark"
              opacity={0.8}
              sx={{
                textAlign: "center",
              }}
            >
              Para más información sobre las disposiciones oficiales, dejamos a su alcance los siguientes documentos.
            </MKTypography>{" "}
          </Grid>{" "}
        </Grid>{" "}
            <Grid container spacing={12} justifyContent="center">
              <Grid item xs={7} lg={3}>
                <Tooltip title="Marco Legal Federal">
                  <MKBox
                    opacity={0.8}
                    component="a"
                    href="http://www.diputados.gob.mx/LeyesBiblio/ref/lft.htm"
                    target="_blank"
                  >
                    <MKBox
                      style={imageStyle}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      component="img"
                      src={folder}
                      width="100%"
                    />
                    <MKTypography color="info">Marco legal federal</MKTypography>
                  </MKBox>
                </Tooltip>
              </Grid>
              <Grid item xs={7} lg={3}>
                <Tooltip title="Normas y reglamentos mexicanos en salud laboral">
                  <MKBox
                    opacity={0.8}
                    component="a"
                    href="http://asinom.stps.gob.mx:8145/Centro/CentroMarcoNormativo.aspx"
                    target="_blank"
                  >
                    <MKBox
                      style={imageStyle1}
                      onMouseEnter={handleMouseEnter1}
                      onMouseLeave={handleMouseLeave1}
                      component="img"
                      src={folder}
                      width="100%"
                    />
                      <MKTypography color="info">Normas y reglamentos en salud laboral</MKTypography>
                  </MKBox>
                </Tooltip>
              </Grid>
              <Grid item xs={7} lg={3}>
                <Tooltip title="Reglamento federal">
                  <MKBox
                    opacity={0.8}
                    component="a"
                    href="/"
                    target="_blank"
                  >
                    <MKBox
                      style={imageStyle2}
                      onMouseEnter={handleMouseEnter2}
                      onMouseLeave={handleMouseLeave2}
                      component="img"
                      src={folder}
                      width="100%"
                    />
                  <MKTypography color="info">Reglamento federal</MKTypography>
                  </MKBox>
                </Tooltip>
              </Grid>
              {/* <Grid item xs={4} lg={3}>
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
                      src={folder}
                      width="100%"
                    />
                  </MKBox>
                </Tooltip>
              </Grid> */}
            </Grid>
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Docs;
