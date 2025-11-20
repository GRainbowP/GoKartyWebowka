import { useRef, useState } from 'react'
import './App.css'

function App() {
  const selectRefs = []

  const [gokarty, setGokarty] = useState([
    {id: 1, typ: "9hp", silnik: "spalinowy", wymagania: "wzrost", numer: 13, jezdzi: "Tak", usterka: "Mniejsza moc"},
    {id: 2, typ: "9hp", silnik: "spalinowy", wymagania: "wzrost", numer: 15, jezdzi: "Tak", usterka: ""},
    {id: 3, typ: "9hp", silnik: "spalinowy", wymagania: "wzrost", numer: 16, jezdzi: "Tak", usterka: "Zapowietrza się"},
    {id: 4, typ: "9hp", silnik: "spalinowy", wymagania: "wzrost", numer: 17, jezdzi: "Tak", usterka: ""},
    {id: 5, typ: "9hp", silnik: "spalinowy", wymagania: "wzrost", numer: 18, jezdzi: "Nie", usterka: "Wyciek oleju, przewody paliwowe urwane, tłok wystrzelił górą, komora silnika pęknięta"},
    {id: 7, typ: "6,5hp", silnik: "spalinowy", wymagania: "wzrost, wiek", numer: 1, jezdzi: "Tak", usterka: ""},
    {id: 8, typ: "6,5hp", silnik: "spalinowy", wymagania: "wzrost, wiek", numer: 6, jezdzi: "Nie", usterka: "Pedał gazu do regulacji, zacina się"},
    {id: 9, typ: "6,5hp", silnik: "spalinowy", wymagania: "wzrost, wiek", numer: 7, jezdzi: "Tak", usterka: ""},
    {id: 10, typ: "1,5hp", silnik: "elektryczny", wymagania: "wzrost, wiek", numer: 2, jezdzi: "Nie", usterka: "Popsute akumulatory"}])

  gokarty.forEach((gokart) => {
    selectRefs[gokart.id] = useRef(null);
  })

  function handleSelectChange(id) {
    if(selectRefs[id].current.value === "Tak") {
      setGokarty(gokarty.map((gokart) => gokart.id == id ? {...gokart, jezdzi: "Tak", usterka: ""} : gokart))
    }else if(selectRefs[id].current.value === "Nie") {
      setGokarty(gokarty.map((gokart) => gokart.id == id ? {...gokart, jezdzi: "Nie"} : gokart))
    }
  }

  return (
    <>
      <div>
        <h1 className='titleText'>Panel praconików — Lista gokartów</h1>
        <table>
          <thead>
            <tr>
              <th>Numer</th>
              <th>Typ</th>
              <th>Silnik</th>
              <th>Wymagania</th>
              <th>Jeździ</th>
              <th>Usterka</th>
            </tr>
          </thead>
          <tbody>
            {gokarty.map(gokart => (
              <tr key={gokart.id}>
                <td>{gokart.numer}</td>
                <td>{gokart.typ}</td>
                <td>{gokart.silnik}</td>
                <td>{gokart.wymagania}</td>
                <td>
                  <select ref={selectRefs[gokart.id]} defaultValue={gokart.jezdzi} onChange={() => handleSelectChange(gokart.id)}>
                    <option value="Tak">Tak</option>
                    <option value="Nie">Nie</option>
                  </select>
                </td>
                <td>
                  {gokart.jezdzi === "Nie" &&
                    <input type='text' defaultValue={gokart.usterka} required/>
                  }
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button>Kontakt do szefa</button>
      </div>
    </>
  )
}

export default App
