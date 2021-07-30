import styled from 'styled-components';
import { Image } from 'react-bootstrap'


export const ImgContainer = styled.div`
  height: 274px;
  width: 274px;
  background-color: #00000055;

`

export const ImgCustom = styled(Image)`
  height: 100%;
`

export const IconContainer = styled.div`
    width: 60px !important;
    height: 60px !important;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    background: linear-gradient(-180deg, rgb(109, 219, 154) 0%, rgb(73, 175, 115) 96%);
    box-shadow: none;
    border-radius: 50%;
`

export const ContainerHabilidades = styled.div`

#RowHabilidades{

  .col :first-child{
    color:#49af73;
    font-size: 56px;
    font-weight: 700;
    align-items: center;
    justify-content: center;
    display: flex;
  }
  .col :nth-child(2){
    color:#1c1c1d;
    font-size: 16px;
    font-weight: 700;
    align-items: center;
    justify-content: center;
    display: flex;
  }
}
`