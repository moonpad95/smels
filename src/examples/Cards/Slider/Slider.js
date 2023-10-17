import React from "react";
import { Carousel, Container } from "react-bootstrap";
import styled from "@emotion/styled";
import "bootstrap/dist/css/bootstrap.min.css";
import img1 from "assets/images/fondo3.jpg"
import img2 from "assets/images/fondo4.jpg"
import img3 from "assets/images/fondo5.png"


const GradientImage = styled("div")(({ theme }) => ({
  backgroundImage: `linear-gradient(to bottom, rgba(41, 255, 242,0.2) 0%, rgba(41, 73, 255,0.8) 100%), url(${img1})`,
  backgroundSize: "cover",
  borderRadius: "2%",
  backgroundPosition: "bottom",
  height: "400px", // Ajusta la altura según tus necesidades
  width: "100%",
  position: "relative",
  "& h3": {
    position: "absolute",
    bottom: theme.spacing(3),
    left: theme.spacing(4),
    right: theme.spacing(4),
    color: "#fff",
    textAlign: "justify",
    textShadow: "#ffffff90 1px 1px 2px"
  },
  "& h1": {
    position: "absolute",
    bottom: theme.spacing(15),
    left: theme.spacing(4),
    right: theme.spacing(4),
    fontSize: "3vmax",
    fontWeight: "bold",
    color: "#fff",
    textAlign: "justify",
    textShadow: "#ffffff50 1px 1px 2px"
  },
}));

function Carrusel() {
  return (
    <Container fluid>
      <Carousel fluid>
        <Carousel.Item>
          <GradientImage>
            <h1>Atención Médica Primaria y Consulta General</h1>
            <h3>Consulta medicina general y atención de primer contacto.</h3>
          </GradientImage>
        </Carousel.Item>
        <Carousel.Item>
          <GradientImage style={{backgroundImage: `linear-gradient(to bottom, rgba(41, 73, 255,0.2) 0%, rgba(41, 73, 255,0.8) 100%), url(${img2})`, borderRadius: "2%"}}>
            <h1>Asesoría Médico Ocupacional</h1>
            <h3>Servicio de estadística y otros beneficios para tu empresa.</h3>
          </GradientImage>
        </Carousel.Item>
        <Carousel.Item>
        <GradientImage style={{backgroundImage: `linear-gradient(to bottom, rgba(41, 73, 255,0.2) 0%, rgba(41, 73, 255,0.8) 100%), url(${img3})`, borderRadius: "2%"}}>
            <h1>Exámenes Médicos</h1>
            <h3>Exámenes médicos por perfil, de admisión o de reingreso.</h3>
          </GradientImage>
        </Carousel.Item>
      </Carousel>
    </Container>

  );
};

export default Carrusel;