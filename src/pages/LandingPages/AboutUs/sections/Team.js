/*
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import PublicIcon from "@mui/icons-material/Public";

import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardHeader,
  CardMedia,
  Icon,
} from "@mui/material";

// Images
import team1 from "assets/images/team1.jpg";
import team2 from "assets/images/team2.jpeg";
import team3 from "assets/images/team3.jpeg";
import team4 from "assets/images/team4.jpeg";
import team5 from "assets/images/team5.png";
import team6 from "assets/images/team6.jpg";
import team7 from "assets/images/team7.jpg";
import team8 from "assets/images/biotest.webp";

function Team() {
  return (
    <MKBox
      component="section"
      backgroundColor="success"
      position="relative"
      py={6}
      px={{
        xs: 2,
        lg: 0,
      }}
      mx={-2}
    >
      <Container>
        <Grid container>
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
              }}
            >
              Convenios y colaboración{" "}
            </MKTypography>{" "}
            <MKTypography
              variant="h5"
              color="dark"
              opacity={0.8}
              sx={{
                textAlign: "center",
              }}
            >
              Actualmente, contamos con los siguientes convenios con empresas y
              organizaciones de caracter público y privado.{" "}
            </MKTypography>{" "}
            <MKTypography
              variant="h5"
              color="info"
              opacity={0.8}
              sx={{
                textAlign: "center",
              }}
            >
              Para nuestros socios, contamos también con beneficios exclusivos
              bajo convenio.{" "}
            </MKTypography>{" "}
          </Grid>{" "}
        </Grid>{" "}
        <Grid container spacing={2}>
          <Grid item xs={12} sm={8} md={6} lg={4}>
            <MKBox mb={5}>
              <Card>
                <CardMedia
                  component="img"
                  height="250"
                  image={team1}
                  alt="MC. CARLOS FELIX CONTRERAS"
                />
                <CardHeader
                  align="center"
                  title={
                    <Typography
                      variant="h3"
                      color="textSecondary"
                      align="center"
                      component="p"
                    >
                      MC.Carlos Feliz Contreras{" "}
                    </Typography>
                  }
                  subheader={
                    <Typography variant="h5" color="blue" component="p" mx={1}>
                      Nutriólogo{" "}
                    </Typography>
                  }
                />{" "}
                <CardContent>
                  <Typography
                    variant="h5"
                    color="textSecondary"
                    component="p"
                    my={2}
                  >
                   <a href="tel:6181276637">
                    <Icon> call </Icon> (618) 1-27-66-37{" "}
                    </a>
                  </Typography>{" "}
                  <Typography variant="h5" color="textSecondary" component="p">
                    <a href="https://maps.app.goo.gl/wGAp8DunaoRCpGmW9">
                    <Icon> location_on </Icon> Las Palmas 218, Fracc. Los
                    Álamos., Durango, Mexico{" "}
                    </a>
                  </Typography>{" "}
                </CardContent>{" "}
                <CardActions>
                  {" "}
                  <Button size="small" href="https://www.facebook.com/people/Nutri%25C3%25B3logo-Carlos-F%25C3%25A9lix/100063458441604/" target="_blank"><PublicIcon />{" "}  Ir a sitio web</Button>{" "}{" "}
                </CardActions>{" "}
              </Card>{" "}
            </MKBox>{" "}
          </Grid>{" "}
          <Grid item xs={12} sm={8} md={6} lg={4}>
            <MKBox mb={5}>
              <Card content="center">
                <CardMedia
                  component="img"
                  height="250"
                  image={team2}
                  alt="MC ILIANA BUSTAMANTE"
                />
                <CardHeader
                  align="center"
                  title={
                    <Typography
                      variant="h3"
                      color="textSecondary"
                      align="center"
                      component="p"
                      mx={1}
                    >
                      MC.Liliana Bustamante{" "}
                    </Typography>
                  }
                  subheader={
                    <Typography variant="h5" color="blue" component="p" mx={1}>
                      Psicóloga y docente{" "}
                    </Typography>
                  }
                />{" "}
                <CardContent>
                  <Typography
                    variant="h5"
                    color="textSecondary"
                    component="p"
                    my={2}
                  >
                     <a href="tel:6188231460">
                    <Icon> call </Icon> (618) 8-23-14-60{" "}
                    </a>
                  </Typography>{" "}
                  <Typography variant="h5" color="textSecondary" component="p">
                    <a href="https://maps.app.goo.gl/bjQccKjJuVyjEzdV7">
                    <Icon> location_on </Icon> Las Palmas 218, Fracc. Los
                    Álamos., Durango, Mexico{" "}
                    </a>
                  </Typography>{" "}
                </CardContent>{" "}
                <CardActions>
                  {" "}
                  <Button size="small" href="https://www.facebook.com/psicolistic/?locale=es_LA" target="_blank"><PublicIcon />{" "}  Ir a sitio web</Button>{" "}{" "}
                </CardActions>{" "}
              </Card>{" "}
            </MKBox>{" "}
          </Grid>{" "}
          <Grid item xs={12} sm={8} md={6} lg={4}>
            <MKBox mb={5}>
              <Card>
                <CardMedia
                  component="img"
                  height="250"
                  image={team3}
                  alt="UNIVERSO ÓPTICO"
                />
                <CardHeader
                  align="center"
                  title={
                    <Typography
                      variant="h4"
                      color="textSecondary"
                      component="p"
                      mx={1}
                    >
                      UNIVERSO ÓPTICO{" "}
                    </Typography>
                  }
                  subheader={
                    <Typography variant="h5" color="blue" component="p" mx={1}>
                      Optometrista{" "}
                    </Typography>
                  }
                />
                <CardContent>
                  <Typography
                    variant="h5"
                    color="textSecondary"
                    component="p"
                    my={2}
                  >
                    <a href="tel:6188177710">
                    <Icon> call </Icon> (618) 817-7710{" "}
                    </a>
                  </Typography>{" "}
                  <Typography variant="h5" color="textSecondary" component="p">
                    <a href="https://goo.gl/maps/qP7hu8m9uY8kfsGC7">
                      <Icon> location_on </Icon> Av. 20 de Noviembre 403, Zona
                      Centro, 34000 Durango, Dgo.{" "}
                    </a>{" "}
                  </Typography>{" "}
                </CardContent>{" "}
                <CardActions>
                  <Button
                    size="small"
                    href="https://www.facebook.com/UniversoOpticoDurango/"
                    target="_blank"
                  >
                    {" "}
                    <PublicIcon /> Ir a sitio web{" "}
                  </Button>{" "}
                </CardActions>{" "}
              </Card>{" "}
            </MKBox>{" "}
          </Grid>{" "}
          <Grid item xs={12} sm={8} md={6} lg={4}>
            <MKBox mb={5}>
              <Card>
                <CardMedia
                  component="img"
                  height="250"
                  image={team4}
                  alt="CLINICA SANTA ELENA"
                />
                <CardHeader
                  align="center"
                  title={
                    <Typography
                      variant="h4"
                      color="textSecondary"
                      component="p"
                      mx={1}
                    >
                      CLINICA SANTA ELENA{" "}
                    </Typography>
                  }
                  subheader={
                    <Typography variant="h5" color="blue" component="p" mx={1}>
                      Servicios hospitalarios{" "}
                    </Typography>
                  }
                />
                <CardContent>
                  <Typography
                    variant="h5"
                    color="textSecondary"
                    component="p"
                    my={2}
                  >
                    <a href="tel:6188133031">
                    <Icon> call </Icon> (618) 813 3031{" "}
                    </a>
                  </Typography>{" "}
                  <Typography variant="h5" color="textSecondary" component="p">
                    <a href="https://goo.gl/maps/8CzJpajQvcEr9KTJ8">
                      <Icon> location_on </Icon>Blvd. Cnel. Enrique Carrola Antuna 711, Ciénega, 34090 Durango, Dgo.{" "}
                    </a>{" "}
                  </Typography>{" "}
                </CardContent>{" "}
                <CardActions>
                  <Button
                    size="small"
                    href="https://www.facebook.com/pages/Clinica%20Santa%20Elena/114820925370193/"
                    target="_blank"
                  >
                    {" "}
                    <PublicIcon /> Ir a sitio web{" "}
                  </Button>{" "}
                </CardActions>{" "}
              </Card>{" "}
            </MKBox>{" "}
          </Grid>{" "}
          <Grid item xs={12} sm={8} md={6} lg={4}>
            <MKBox mb={5}>
              <Card>
                <CardMedia
                  component="img"
                  height="250"
                  image={team5}
                  alt="LABORATORIOS RIVERA"
                />
                <CardHeader
                  align="center"
                  title={
                    <Typography
                      variant="h4"
                      color="textSecondary"
                      component="p"
                      mx={1}
                    >
                      LABORATORIOS RIVERA{" "}
                    </Typography>
                  }
                  subheader={
                    <Typography variant="h5" color="blue" component="p" mx={1}>
                      Laboratorio de estudios clínicos{" "}
                    </Typography>
                  }
                />
                <CardContent>
                  <Typography
                    variant="h5"
                    color="textSecondary"
                    component="p"
                    my={2}
                  >
                    <a href="tel:6184540235">
                    <Icon> call </Icon> (618) 4-54-02-35{" "}
                    </a>
                  </Typography>{" "}
                  <Typography variant="h5" color="textSecondary" component="p">
                    <a href="https://goo.gl/maps/HjqqGXaBQAd1osXK8">
                      <Icon> location_on </Icon>Blvd. Domingo Arrieta 906, Juan de la Barrera, 34150 Durango, Dgo.{" "}
                    </a>{" "}
                  </Typography>{" "}
                </CardContent>{" "}
                <CardActions>
                  <Button
                    size="small"
                    href="https://www.laboratoriorivera.com"
                    target="_blank"
                  >
                    {" "}
                    <PublicIcon /> Ir a sitio web{" "}
                  </Button>{" "}
                </CardActions>{" "}
              </Card>{" "}
            </MKBox>{" "}
          </Grid>{" "}
          <Grid item xs={12} sm={8} md={6} lg={4}>
            <MKBox mb={5}>
              <Card >
                <CardMedia
                  component="img"
                  height="250"
                  image={team6}
                  alt="CENTRO H&T"
                />
                <CardHeader
                  align="center"
                  title={
                    <Typography
                      variant="h4"
                      color="textSecondary"
                      component="p"
                      mx={1}
                    >
                      CENTRO H&T{" "}
                    </Typography>
                  }
                  subheader={
                    <Typography variant="h5" color="blue" component="p" mx={1}>
                      Centro de ultrasonido y diagnóstico{" "}
                    </Typography>
                  }
                />
                <CardContent>
                  <Typography
                    variant="h5"
                    color="textSecondary"
                    component="p"
                    my={2}
                  >
                    <a href="tel:6181442738">
                    <Icon> call </Icon> (618) 1-44-27-38{" "}
                    </a>
                  </Typography>{" "}
                  <Typography variant="h5" color="textSecondary" component="p">
                    <a href="https://goo.gl/maps/Pa43YQy2aKr8EnLG7">
                      <Icon> location_on </Icon>C. Francisco Zarco 304B, Zona Centro, 34000 Durango, Dgo.{" "}
                    </a>{" "}
                  </Typography>{" "}
                </CardContent>{" "}
                <CardActions>
                  <Button
                    size="small"
                    href="https://www.facebook.com/UltrasonidoEnDurango/?locale=es_LA"
                    target="_blank"
                  >
                    {" "}
                    <PublicIcon /> Ir a sitio web{" "}
                  </Button>{" "}
                </CardActions>{" "}
              </Card>{" "}
            </MKBox>{" "}
          </Grid>{" "}
          <Grid item xs={12} sm={8} md={6} lg={4}>
            <MKBox mb={5}>
              <Card >
                <CardMedia
                  component="img"
                  height="250"
                  image={team7}
                  alt="DENTAREA"
                />
                <CardHeader
                  align="center"
                  title={
                    <Typography
                      variant="h4"
                      color="textSecondary"
                      component="p"
                      mx={1}
                    >
                      DENTAREA{" "}
                    </Typography>
                  }
                  subheader={
                    <Typography variant="h5" color="blue" component="p" mx={1}>
                      Clínica dental{" "}
                    </Typography>
                  }
                />
                <CardContent>
                  <Typography
                    variant="h5"
                    color="textSecondary"
                    component="p"
                    my={2}
                  >
                    <a href="tel:6188113416">
                    <Icon> call </Icon> (618) 8-11-34-16{" "}
                    </a>
                  </Typography>{" "}
                  <Typography variant="h5" color="textSecondary" component="p">
                    <a href="https://goo.gl/maps/oDWGo9ztBRfCgBbS7">
                      <Icon> location_on </Icon>C. Isauro Venzor 1219, Zona Centro, 34000 Durango, Dgo.{" "}
                    </a>{" "}
                  </Typography>{" "}
                </CardContent>{" "}
                <CardActions>
                  <Button
                    size="small"
                    href="https://www.facebook.com/clinicadentarea/?locale=es_LA"
                    target="_blank"
                  >
                    {" "}
                    <PublicIcon /> Ir a sitio web{" "}
                  </Button>{" "}
                </CardActions>{" "}
              </Card>{" "}
            </MKBox>{" "}
          </Grid>{" "}
          <Grid item xs={12} sm={8} md={6} lg={4}>
            <MKBox mb={5}>
              <Card >
                <CardMedia
                  component="img"
                  height="250"
                  image={team8}
                  alt="BioTest"
                />
                <CardHeader
                  align="center"
                  title={
                    <Typography
                      variant="h4"
                      color="textSecondary"
                      component="p"
                      mx={1}
                    >
                      BioTest{" "}
                    </Typography>
                  }
                  subheader={
                    <Typography variant="h5" color="blue" component="p" mx={1}>
                      Análisis clínicos en Durango{" "}
                    </Typography>
                  }
                />
                <CardContent>
                  <Typography
                    variant="h5"
                    color="textSecondary"
                    component="p"
                    my={2}
                  >
                    <a href="tel:6181001249">
                    <Icon> call </Icon> (618)-100-1249{" "}
                    </a>
                  </Typography>{" "}
                  <Typography variant="h5" color="textSecondary" component="p">
                    <a href="https://maps.app.goo.gl/RpcixtNpqUd5BQUq9">
                      <Icon> location_on </Icon>Felipe Pescador 835, Zona Centro , Durango 34000{" "}
                    </a>{" "}
                  </Typography>{" "}
                </CardContent>{" "}
                <CardActions>
                  <Button
                    size="small"
                    href="https://www.biotestanalisisclinicos.com"
                    target="_blank"
                  >
                    {" "}
                    <PublicIcon /> Ir a sitio web{" "}
                  </Button>{" "}
                </CardActions>{" "}
              </Card>{" "}
            </MKBox>{" "}
          </Grid>{" "}
        </Grid>{" "}
      </Container>{" "}
    </MKBox>
  );
}

export default Team;
