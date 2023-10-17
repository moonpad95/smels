import React from "react";
import { Button, Grid, TextField } from "@mui/material";
import MKTypography from "components/MKTypography";

function Formulario() {
  return (
    <div className="container">
        <MKTypography variant="h3" color="info" my={4}>Envianos un correo</MKTypography>
        <MKTypography variant="body2" mb={3}>
        En caso de estar interesado, dejamos a su disposición el siguiente formulario para enviarnos un correo. Responderemos a su solicitud lo más pronto posible.
        </MKTypography>
      <form
      target="_self"
      action="https://formsubmit.co/luna-gaytan@hotmail.com"
      method="POST"
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <TextField
          label="Ingresa tu nombre para contactarte"
          name="name"
          variant="outlined"
          required
          style={{ marginBottom: "15px" }}
        />
        <TextField
          label="Ingresa tu correo electrónico"
          name="email"
          variant="outlined"
          required
          style={{ marginBottom: "15px" }}
        />
      </div>

      <div style={{ marginBottom: "15px" }}>
      <TextField
          name="message"
          id="outlined-multiline-static"
          variant="outlined"
          label="Ingresa tu mensaje completo"
          multiline
          rows={4}
          style={{ width: "100%"}}
          defaultValue="Quiero una cotización"
          required
        />
      </div>
      <Grid  my={5}>
      <Button
        type="submit"
        variant="outlined"
        color="primary"
      >
        <MKTypography color="info" variant="body2">
        Enviar mi solicitud
        </MKTypography>
      </Button>
      </Grid>
    </form>
    </div>
  );
}
export default Formulario;
