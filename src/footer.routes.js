// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import YouTubeIcon from "@mui/icons-material/YouTube";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Images
import logoCT from "assets/images/logos/gray-logos/logols3.png";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "Servicio Médico Empresarial LS",
    image: logoCT,
    route: "/",
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: "https://www.facebook.com/profile.php?id=100064278240012&mibextid=ZbWKwL",
    },
  ],
  menus: [
    {
      name: "¿Quienes Somos?",
      items: [
        { name: "Nosotros", href: "nosotros" },
        { name: "Políticas empresariales", href: "nosotros#politicas" },
      ],
    },
    {
      name: "Nuestros servicios",
      items: [
        { name: "Beneficios de afiliarte con nosotros", href: "servicios" },
        { name: "Funciones del médico en tu empresa", href: "servicios#medicos" },
      ],
    },
    {
      name: "Convenios y acuerdos",
      items: [
        { name: "Convenios", href: "convenios" },

      ],
    },
    {
      name: "Contacto",
      items: [
        { name: "Donde nos ubicamos", href: "contacto" },
        { name: "Datos de contacto", href: "contacto#contacto" },
        { name: "Envianos un mensaje", href: "contacto#mensaje" },

      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      Derechos Reservados Copyright &copy; {date} SIAC{" "}
      <MKTypography
        component="a"
        href="/"
        target="_self"
        variant="button"
        fontWeight="regular"
      >
        Desarrollos
      </MKTypography>
      .
    </MKTypography>
  ),
};
