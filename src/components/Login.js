import React from 'react'
import styled from 'styled-components'
function Login() {
  return (
    <Container>
        <Content>
            <CTA>
                <CTALogoOne src="/images/cta-logo-one.svg"/>
                <SignUp>Roll Camera Action</SignUp>            
                <Description>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tristique luctus augue eget consectetur. Ut cursus pretium ullamcorper. Morbi purus velit, euismod eu justo id, bibendum imperdiet nibh. Donec arcu ex, euismod at ipsum vel, lacinia maximus ipsum. Phasellus orci urna, faucibus a venenatis semper, finibus sollicitudin neque. Duis eget sollicitudin odio. Morbi ornare ipsum vel egestas bibendum. Sed nunc eros, euismod ac interdum nec, aliquam nec nunc. Aliquam erat volutpat.
                </Description>
                <CTALogoTwo src="/images/cta-logo-two.png"/>
            </CTA>
        </Content>
    </Container>
  )
}

export default Login


const Container = styled.div`
    position: relative;
    height: 100vh;
    width: 110%;
    display: flex;
    align-items: top;
    justify-content: center;
    overflow:hidden;

    &:before {

        background-position: top;
        background-size: cover;
        backgroumd-repeat: no-repeat;
        background: url("/images/login-background.jpg") center center / cover
          repeat fixed;
        content: "";
        position: absolute;
        top: 0;
        left:0;
        right:0;
        bottom:0;
        z-index:-1;
        
      }
`
const Content = styled.section`

`

const CTA = styled.div`
      max-width: 850px;
      padding: 80px 40px;
      margin-right: 400px;
      margin-left: 350px;
      margin-top: 150px;
      align: center;
      width: 90%;
      display: flex;
      flex-direction: column;


`

const CTALogoOne = styled.img`

width: 100%;
`

const SignUp = styled.a`
      width: 100%;
      background-color: #0063e5;
      font-weight: bold;
      padding: 17px 0;
      color:#f9f9f9;
      border-radius: 40x;
      text-align: center;
      cursor: pointer;
      transition: all 250ms;
      letter-spacing: 1.5px;
      margin-top: 8px;
      margin-bottom: 12px;
      
      &: hover{
          background: #0483ee;
      }
      `
const Description= styled.p`
      font-size: 11px;
      letter-spacing: 1.5px;
      text-align:center;
      line-height: 1.5;

`

const CTALogoTwo = styled.img`
    width:100%;
    conent-align: center;   
`