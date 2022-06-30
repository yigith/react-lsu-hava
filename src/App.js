import { useState } from 'react';
import './App.css';
import HavaDurumu from './HavaDurumu';
import Kutu from './Kutu';
import SayiKutusu from './SayiKutusu';

function App() {
  const [sayilar, setSayilar] = useState([1, 2, 3]);

  const sayiDegisti = function (indeks, yeniDeger) {
    const yeniSayilar = [...sayilar];
    yeniSayilar[indeks] = yeniDeger;
    setSayilar(yeniSayilar);
  };

  const yeniSayiEkle = () => {
    const yeniSayilar = [...sayilar, 0];
    setSayilar(yeniSayilar);
  };

  const sil = (indeks) => {
    const yeniSayilar = [...sayilar];
    yeniSayilar.splice(indeks, 1);
    setSayilar(yeniSayilar);
  };

  return (
    <div className="App">
      <HavaDurumu />
      <Kutu>
        <button onClick={yeniSayiEkle}>Yeni Sayı</button>
        {sayilar.map((s, i) => (
          <div key={i} style={{ margin: ".5rem 0" }}>
            <SayiKutusu indeks={i} deger={s} degistiginde={sayiDegisti} />{" "}
            <button onClick={() => sil(i)}>&times;</button>
          </div>
        ))}
      </Kutu>
      <Kutu>
        {sayilar.length && <div>
          {sayilar.join(" + ")} = {sayilar.reduce((sum, x) => sum + x)}
        </div>}
      </Kutu>
    </div>
  );
}

export default App;
