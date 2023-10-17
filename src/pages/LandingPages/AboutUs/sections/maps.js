import Iframe from 'react-iframe'

export default function Maps()  {
    return (
        <div style={{ height: "30vh" }}>
        <Iframe
          url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227.76622086627043!2d-104.65271508651207!3d24.021911397496343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x869bb7e6cc227e1f%3A0xbc79bfd218a68bb1!2zRGVudMOhcmVh!5e0!3m2!1ses-419!2smx!4v1697483056949!5m2!1ses-419!2smx"
          width="100%"
          height="100%"
          frameBorder="0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    );
}
