import { FooterContainer } from './styles';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <FooterContainer>
      Copyright &copy; {year} <a href="https://ucandoit.io">ucandoit.io</a> All Rights Reserved
    </FooterContainer>
  );
};

export default Footer;
