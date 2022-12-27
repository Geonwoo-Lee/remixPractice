import { Link } from "@remix-run/react";
import styled from "styled-components"


  export const Container =  styled.div`
    text-align: center;
    margin-top: 500px;

    && img{
      width: 100px;
    }
  `

export default function Index() {

  
  return (
    <Container>
      <Link to="remixtamain">
        <img src={"https://ifh.cc/g/jd5MrN.png"}/>
      </Link>
    </Container>
    
  );
}
