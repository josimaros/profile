import styled from 'styled-components';
import {Col} from 'react-bootstrap'

export const ContainerContent = styled.div`
  max-width: 650px;
  padding: 50px 45px 0 45px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: ${props => props.left ? 'flex-start' : 'flex-end'};
  
`

export const Title = styled.p`
  text-align: ${props => props.left ? 'left' : 'right'};
  color: rgb(28, 28, 29);
  font-size: 24px;
  margin-bottom: 24px;
  font-weight: 800;
`
export const Content = styled.p`
  text-align: justify;
  color: rgb(66, 84, 117);
    line-height: 1.4;
`

export const CustomCol = styled(Col)`
  border-left: none;
  border-right: 1px solid rgb(215, 222, 244);
  position: relative;
`

export const ColImage = styled.div`
  position: relative;
  padding: 0 40px;
`

export const Indicado = styled.div`
  width: 34px;
  height: 34px;
  text-align: center;
  line-height: 34px;
  background-color: rgb(248, 251, 255);
  color: rgb(73, 175, 115);
  position: absolute;
  left: unset;
  right: -16px;
  top: ${props => props.left ? '20px' : '48px'};
`