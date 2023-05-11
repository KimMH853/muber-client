import { styled } from 'styled-components';
import Input from '../../Components/Input/Input';
import { Helmet } from 'react-helmet';
import Header from '../../Components/Header/Header';
import Button from '../../Components/Button/Button';
import Form from '../../Components/Form/Form';


const Container = styled.div``;


const ExtendedForm = styled(Form)`
  padding: 0px 40px;
`;


const ExtendedInput = styled(Input)`
  margin-bottom: 20px;
`;

interface IProps {
  verifyKey: string;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>)=>void;
}

const VerifyPhonePresenter: React.FC<IProps> = ({
  verifyKey,
  onInputChange,
  onSubmit
}) => {
    return (
      <Container>
        <Helmet>
          <title>Verify Phone | Number</title>
        </Helmet>
        <Header backTo={"/phone-login"} title={"Verify Phone Number"} />
        <form >
          <ExtendedInput
            value={verifyKey}
            placeholder={"Enter Verification Code"}
            handleChange={onInputChange}
            name={"verifyKey"}
          />
          <Button  buttonValue='submit' handleClick={onSubmit}/>
        </form>
      </Container>
    );
};

export default VerifyPhonePresenter;