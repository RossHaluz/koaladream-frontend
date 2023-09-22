import styled from "@emotion/styled";

export const ItemSlide = styled.div`
    background-origin: border-box;
  background-repeat: no-repeat;
  overflow: hidden;
background-size: cover;
      
    @media only screen and (-webkit-min-device-pixel-ratio: 2),
      only screen and (min--moz-device-pixel-ratio: 2),
      only screen and (-o-min-device-pixel-ratio: 2/1),
      only screen and (min-resolution: 192dpi),
      only screen and (min-resolution: 2dppx) {
        background-image: linear-gradient(90deg, rgba(255, 255, 255, 0.70) 0%, rgba(255, 255, 255, 0.70) 46.62%, rgba(255, 255, 255, 0.07) 100%), url(${props => props?.image});
    }
    background-image: linear-gradient(90deg, rgba(255, 255, 255, 0.70) 0%, rgba(255, 255, 255, 0.70) 46.62%, rgba(255, 255, 255, 0.07) 100%), url(${props => props?.image});

`