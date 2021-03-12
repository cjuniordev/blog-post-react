import { Btn } from './style';

function Button(props) {
  return (
    <Btn height={props.height} width={props.width}>
     {props.children}
    </Btn>
  );
}

export default Button;
