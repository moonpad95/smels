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
import Icon from "@mui/material/Icon";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function BuiltByDevelopers() {
const bgImage = "https://www.grupocmdsalud.com/wp-content/uploads/2015/10/servicio-empresas-3.jpg"
  return (
    <MKBox
      display="flex"
      alignItems="center"
      borderRadius="xl"
      my={1}
      py={12}
      sx={{
        backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
          `${linearGradient(
            rgba(gradients.dark.main, 0.8),
            rgba(gradients.dark.state, 0.8)
          )}, url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container>
        <Grid container item xs={12} lg={6} sx={{ ml: { xs: 0, lg: 6 } }}>
          <MKTypography variant="h1" color="white" mb={1}>
           ¡Disfruta de grandes beneficios solo con nosotros!
          </MKTypography>
          <MKTypography variant="body1" color="white" opacity={0.8} mb={2}>
            Contamos con varios convenios para ofrecerte beneficios exclusivos.{" "}
          </MKTypography>
          <MKTypography
            component="a"
            href="/convenios"
            target="_self"
            rel="noreferrer"
            variant="body2"
            color="white"
            fontWeight="bold"
            sx={{
              display: "flex",
              alignItems: "center",

              "& .material-icons-round": {
                fontSize: "1.125rem",
                transform: `translateX(3px)`,
                transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
              },

              "&:hover .material-icons-round, &:focus .material-icons-round": {
                transform: `translateX(6px)`,
              },
            }}
          >
            Conoce nuestros convenios<Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
          </MKTypography>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default BuiltByDevelopers;
