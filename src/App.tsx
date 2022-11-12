import { AppWrapper, BgImageWrapper } from './assets/GlobalStyles';
import { ReactComponent as BgImage } from './assets/icon/shape.svg'
import { Form } from './components/Form/Form'

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
