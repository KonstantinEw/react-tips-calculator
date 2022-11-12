import styled from 'styled-components'
import { ReactComponent as BgImage } from './assets/icon/shape.svg'
import { Form } from './components/Form/Form'

const AppWrapper = styled.div`
  position:relative;
  display: flex;
  justify-content:center;
  width: 1512px;
  background: #EAF2F2;
  padding: 203px 0px 138px 0px;

  @media (max-width: 768px) {
      width: 744px;
    }

    @media (max-width: 480px) {
      width: 414px;
    }
`
const BgImageWrapper = styled.div`
  position:absolute;
  top:0;
  left:0;
`

export const App = () => {
  return (
    <AppWrapper>
      <BgImageWrapper>
        <BgImage />
      </BgImageWrapper>
      <Form />
    </AppWrapper>
  );
}
