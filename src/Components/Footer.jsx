import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@mui/icons-material";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })};
  background-color: #006ca0;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  display: contents;
  
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  color: black;
  :hover {
    box-shadow: 1px 1px 10px ;
    color:#FFEFC5;
    transition:0.3s;
    
  }
  
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Digital World</Logo>

        <Desc>
          We offer our customers a personalized attention, providing the
          necessary advice, so that they can necessary advice, so that they can
          make their purchases in the most comfortable way and the most
          comfortable way and satisfy their needs.
        </Desc>

        <SocialContainer>
        <SocialIcon color="3B5999">
        <a target="_framename" href="https://es-la.facebook.com/"><Facebook/></a> 
          </SocialIcon>
          <SocialIcon color="E4405F">
          <a target="_framename" href="https://www.instagram.com/"><Instagram/></a> 
          </SocialIcon>
          <SocialIcon color="55ACEE">
          <a target="_framename" href="https://twitter.com/?lang=es"><Twitter/></a>
          </SocialIcon>
          <SocialIcon color="E60023">
          <a target="_framename" href="https://ar.pinterest.com/"><Pinterest/></a>
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
        <a href="/">
        <ListItem>Home</ListItem>
          </a>

          <a href="/Cart">
            <ListItem>Cart</ListItem>
          </a>

          <a href="/Products">
            <ListItem>Products</ListItem>
          </a>

          <a href="/My Account">
            <ListItem>My Account</ListItem>
          </a>
          <a href="/Terms">
            <ListItem>Terms</ListItem>
          </a>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> Córdoba, Argentina.
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> +54 3584319187
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} />
          mauroezebiassi@gmail.com
        </ContactItem>

        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
