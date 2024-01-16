import styled from 'styled-components'
type Props = {
  imagens: string[]
}
export const ImagemProduto = styled.div<Props>`
  background-image: url(${(props) => props.imagens[0]});
  background-position: top;
  background-size: cover;
  max-width: 300px;
  width: 100%;
  height: 280px;
  transition: background-image 0.2s ease-in;
  position: relative;
  overflow: hidden;

  &:hover {
    background-image: url(${(props) => props.imagens[1]});
  }

  &:hover div {
    display: flex;
  }
`
