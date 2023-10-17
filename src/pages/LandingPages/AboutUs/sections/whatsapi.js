import { FacebookProvider, Page } from 'react-facebook';

function Whatsapi() {
  const pageStyles = {
    width: '100%',
    borderRadious: '50%'
  };

  return (
    <>
      <FacebookProvider appId="716244130372865">
        <Page
          href="https://www.facebook.com/profile.php?id=100064278240012"
          tabs="timeline"
          width="450" // Ancho personalizado (puedes ajustarlo)
          style={pageStyles} // Aplicar estilos adicionales si es necesario
        />
      </FacebookProvider>

    </>
  );
}

export default Whatsapi