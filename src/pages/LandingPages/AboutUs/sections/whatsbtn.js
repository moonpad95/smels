import React from "react";
import Button from "@mui/material/Button";
import MKTypography from "components/MKTypography";
import { Grid } from "@mui/material";

function WhatsAppButton() {

    // Handle de procedimientos para enviar mensaje via whatsapp
  const handleWhatsAppClick = () => {

    // Reemplaza  con el número de teléfono de WhatsApp al que deseas redirigir.
    const phoneNumber = "6181128866";

    // Reemplaza con el mensaje que desees enviar en formato URL.
    const message = "Hola,%20necesito%20mas%20informacion";

    // Crea la URL de WhatsApp con el número y el mensaje (opcional).
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

    // Redirige a WhatsApp cuando se hace clic en el botón.
    window.open(whatsappURL, "_blank");
  };

    // Handle de procedimientos para enviar mensaje via messenger
  const handleMessengerClick = () => {

    // Reemplaza con el ID de usuario o nombre de usuario de Facebook Messenger.
    const recipientID = "100064278240012";

    // Crea la URL de Messenger con el ID del destinatario.
    const messengerURL = `https://m.me/${recipientID}`;

    // Redirige a Facebook Messenger cuando se hace clic en el botón.
    window.open(messengerURL, "_blank");
  };

  return (
    <Grid justifyContent="center" alignContent="center" mx="auto"> 
      <Grid>
        <Button
          variant="contained"
          style={{ backgroundColor: "green", color: "white" }}
          onClick={handleWhatsAppClick}
        >
          <MKTypography variant="h6" color="white">
            <i className="fa fa-whatsapp" aria-hidden="true" />
          </MKTypography>
          <MKTypography color="white" variant="h6" ml={1}>
            {" "}
            Enviar un mensaje a WhatsApp
          </MKTypography>
        </Button>
      </Grid>
      <Grid my={3}>
        <Button variant="contained" style={{ backgroundColor: "blue", color: "white" }} onClick={handleMessengerClick}>
        <MKTypography variant="h6" color="white">
            <i className="fab fa-facebook-messenger" />
          </MKTypography>
          <MKTypography color="white" variant="h6" ml={1}>
            {" "}
            Enviar un mensaje a Messenger
          </MKTypography>
        </Button>
        
      </Grid>
    </Grid>
  );
}

export default WhatsAppButton;
