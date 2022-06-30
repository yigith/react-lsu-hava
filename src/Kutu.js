import './Kutu.css';

function Kutu(props) {
  return (
    <div className="Kutu">
      {props.children}
    </div>
  );
}
export default Kutu;