import { FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa';

function Iconos() {
return (
     <div style={{ display: 'flex', gap: '15px', fontSize: '24px' }}>
      <a href="https://wa.me/51XXXXXXXXX" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp color="green" />
      </a>
      <a href="https://instagram.com/tu_cuenta" target="_blank" rel="noopener noreferrer">
        <FaInstagram color="#E1306C" />
      </a>
      <a href="https://facebook.com/tu_cuenta" target="_blank" rel="noopener noreferrer">
        <FaFacebook color="#1877F2" />
      </a>
    </div>
)
}