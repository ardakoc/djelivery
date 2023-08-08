// Bootstrap Components
import Alert from 'react-bootstrap/Alert';

export default function InfoText(props) {
  return (
    <Alert key="success" variant="success">
      {props.msg}
    </Alert>
  );
}
