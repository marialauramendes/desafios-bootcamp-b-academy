import styled from 'styled-components'

function Footer () {
  return (
    <FooterContainer>
      <FooterText>desenvolvido por Maria Laura</FooterText>
      <Address>
        <ContactLink href="https://github.com/marialauramendes/" target="_blank">
          <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.8462 18.7919V15.5173C12.8779 15.1138 12.8234 14.7082 12.6862 14.3274C12.5491 13.9466 12.3325 13.5994 12.0508 13.3088C14.7077 13.0127 17.5 12.0057 17.5 7.38575C17.4998 6.20437 17.0454 5.0683 16.2308 4.21267C16.6165 3.1791 16.5892 2.03666 16.1546 1.02267C16.1546 1.02267 15.1562 0.726517 12.8462 2.27498C10.9068 1.74937 8.86245 1.74937 6.92308 2.27498C4.61308 0.726517 3.61462 1.02267 3.61462 1.02267C3.18001 2.03666 3.15274 3.1791 3.53846 4.21267C2.7178 5.07465 2.2629 6.22099 2.26923 7.41113C2.26923 11.9973 5.06154 13.0042 7.71846 13.3342C7.44007 13.6219 7.22538 13.9649 7.08834 14.3411C6.9513 14.7172 6.89499 15.118 6.92308 15.5173V18.7919M6.92308 16.2534C2.69231 17.5227 2.69231 14.1381 1 13.715L6.92308 16.2534Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </ContactLink>
        <ContactLink href="https://www.polywork.com/marialaura" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 250 250" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 199.219V50.7813C0 22.6563 22.6562 0 50.7812 0H199.219C227.344 0 250 22.6563 250 50.7813V122.656C250 150.781 227.344 173.437 199.219 173.437H170.312V199.219C170.312 227.344 147.656 250 119.531 250H50.7812C22.6562 250 0 227.344 0 199.219ZM78.1249 78.9063H13.2812V50C13.2812 29.6875 29.6875 12.5 50.7812 12.5H78.1249V78.9063ZM199.219 160.937H171.875V93.7498H236.719V123.437C236.719 143.75 220.312 160.937 199.219 160.937ZM119.531 237.5H92.1871V175.781H157.031V200C157.031 220.312 140.625 237.5 119.531 237.5ZM92.1871 160.937H157.031V93.7498H92.1871V160.937ZM171.875 78.9063H236.719V50.7813C236.719 29.6875 219.531 13.2813 199.219 13.2813H171.875V78.9063ZM157.031 78.9063H92.1871V12.5H157.031V78.9063ZM12.5 175V199.219C12.5 220.312 29.6875 236.719 50 236.719H78.1249V175H12.5ZM78.1249 160.937H12.5V93.7498H78.1249V160.937Z" fill="#fff"/>
        </svg>
        </ContactLink>
        <ContactLink href="https://www.linkedin.com/in/maria-laura-costa-235981115/" target="_blank">
        <svg id="linkedin" title="linkedin" data-name="linkedin" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24.201 24.201" fill="#fff">
        <path id="Caminho_19" data-name="Caminho 19" d="M0,0H24.2V24.2H0Z" fill="none"></path>
        <path id="Caminho_20" data-name="Caminho 20" d="M20.525,20.53H17.48V15.756c0-1.138-.023-2.6-1.589-2.6-1.587,0-1.83,1.239-1.83,2.52V20.53H11.015V10.714H13.94v1.337h.04a3.213,3.213,0,0,1,2.889-1.585c3.086,0,3.657,2.032,3.657,4.675V20.53ZM7.575,9.371A1.769,1.769,0,1,1,9.344,7.6,1.767,1.767,0,0,1,7.575,9.371ZM9.1,20.53H6.047V10.714H9.1V20.53ZM22.051,3H4.519A1.5,1.5,0,0,0,3,4.482V22.089a1.5,1.5,0,0,0,1.518,1.482H22.046a1.505,1.505,0,0,0,1.525-1.482V4.482A1.505,1.505,0,0,0,22.046,3h0Z" transform="translate(-1.185 -1.185)"></path>
        </svg>
        </ContactLink>
      </Address>
    </FooterContainer>
  )
}

const FooterContainer = styled.footer`
  grid-area: footer;
  text-align: center;
`

const FooterText = styled.p`
  display: flex;
  align-items: center;
  justify-content:center;
  font-family: Georgia;
  font-size: 16px;
  line-height: 18px;
  font-weight: 400;
  letter-spacing: 0.01em;
  text-transform: lowercase;
  color: #000000;
  margin-bottom: 15px;
`
const Address = styled.address`
  display: flex;
  align-items:center;
  justify-content:center;
`

const ContactLink = styled.a`
  display:flex;  
  align-items:center;
  justify-content:center;
  background-color: #202B24;
  width: 40px;
  height: 40px;
  border-radius:100%;
  -webkit-transition:.3s;
  transition:.3s;
  :not(:last-child){
    margin-right: 20px;
  }
  &:hover{
    background-color: #5E7461;
    -webkit-transition:.3s;
    transition:.3s;
  }
`

export { Footer }
