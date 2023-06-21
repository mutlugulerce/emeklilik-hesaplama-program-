import { useSelector,useDispatch } from "react-redux";
import {setEmeklilikDurumu } from '../store/emeklilikSlice';


export default function EmeklilikProgramı() {

const dispatch=useDispatch();
const {girisYili,primGun,yas} =useSelector((state) => state.emeklilik)

const hesapla= () =>{


  if ((yas >= 65 && primGun >= 7200 && girisYili >= 2010) ||
  (yas >= 52 && primGun >= 6200 && girisYili >= 2000) ||
  (girisYili <= 1999 && primGun >= 5100)) {
dispatch(setEmeklilikDurumu('Mevcut Durumda Emekli Olduğunuz Değerlendirilmektedir.'));


}else if( primGun<=7200 && girisYili>= 2010){
let kalanGun= 7200 - primGun
let kalanYil= 65 - yas

dispatch(setEmeklilikDurumu(`Emekli Olmanıza ${kalanGun} prim gününüz ve  ${kalanYil} yıl süreniz kaldı. `))
}else if(primGun<=6200 && girisYili>=2000){
  let kalanGun= 6200 - primGun
let kalanYil= 52 - yas

dispatch(setEmeklilikDurumu(`Emekli Olmanıza ${kalanGun} prim gününüz ve ${kalanYil} yıl süreniz kaldı. `))

}else if(girisYili<=1999 && primGun<=5100){
  let kalanGun= 5100 - primGun

  dispatch(setEmeklilikDurumu(`Emekli Olmanıza ${kalanGun} prim gününüz kaldı. `))
}else if(primGun>= 7200 && girisYili>=2010 && yas<= 65){
  let kalanYil= 65- yas
  dispatch(setEmeklilikDurumu(`Emekli Olmanıza ${kalanYil} yıl süreniz kaldı. `))
}else if(primGun>=6200 && girisYili>=2000 && yas<=52){
  let kalanYil= 52- yas
  dispatch(setEmeklilikDurumu(`Emekli Olmanıza ${kalanYil} yıl süreniz kaldı. `))
}else {
  dispatch(setEmeklilikDurumu('Bilgilerinizi kontrol ediniz'))
}

}







  return (

    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-orange-500 to-yellow-500">

      <div className="flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md mx-4">
        <label className="block mb-2 text-lg font-bold">
          Sigorta Giriş Yılı:
        </label>
        <input
          type="number"
          className="border border-gray-300 p-2 mb-4 rounded-sm"
        />
      </div>

      <div className="bg-white p-8 rounded-lg shadow-md mx-4">
        <label className="block mb-2 text-lg font-bold">
          Sigorta Prim Günü:
        </label>
        <input
          type="number"
          className="border border-gray-300 p-2 mb-4 rounded-sm"
        />
      </div>

      <div className="bg-white p-8 rounded-lg shadow-md mx-4">
        <label className="block mb-2 text-lg font-bold">Yaş:</label>
        <input
          type="number"
          className="border border-gray-300 p-2 mb-4 rounded-sm"
        />
      </div>
      </div>
      

      <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg mt-12">
        Hesapla
      </button>
    </div>
   
  );
}
