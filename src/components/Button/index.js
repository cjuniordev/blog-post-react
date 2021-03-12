import { Btn } from './style';

function Button(props) {
  return (
    <Btn>
     {props.children}
    </Btn>
  );
}

export default Button;
