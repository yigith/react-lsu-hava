function SayiKutusu(props) {

  function handleChange(event) {
    props.degistiginde(props.indeks, Number(event.target.value));
  }

  return (
    <span>
      <strong>#{props.indeks + " "}</strong>
      <input type="number" style={{ width: "80px" }} value={props.deger} onChange={handleChange} />
    </span>
  );
}
export default SayiKutusu;