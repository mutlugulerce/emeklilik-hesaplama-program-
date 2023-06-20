import { useSelector,useDispatch } from "react-redux";
import {setEmeklilikDurumu } from '../store/emeklilikSlice';


export default function EmeklilikProgramı() {

const dispatch=useDispatch();
const {girisYili,primGun,yas} =useSelector((state) => state.emeklilik)

const hesapla= () =>{

const girisYiliInt = parseInt(girisYili);
const primGunInt = parseInt(primGun);
    const yasInt = parseInt(yas);

    if(girisYiliInt < 1999 && primGunInt>= 5100) {
      dispatch(setEmeklilikDurumu('Emekli Olmuş Durumdasınız'))
    }else if(girisYiliInt >=2000 && girisYiliInt <=2009 && primGunInt>= 6200 && yasInt >= 58){
      dispatch(setEmeklilikDurumu('Emekli Olmuş Durumdasınız'))
    }else if(girisYiliInt>= 2010 && primGunInt >= 7200 && yasInt>=65 ){
      dispatch(setEmeklilikDurumu('Emekli Olmuş Durumdasınız'))
    }else if{
      let message = '';

      if(girisYiliInt<1999 && primGunInt < 5100){
        const eksikPrimGun = 5100 - primGunInt;
        message = `Emekli olmak için ${eksikPrimGun} gün prim yapmanız gerekiyor.`;
      }
      if(girisYiliInt>= 2000 && girisYiliInt<=2009 && primGunInt <6200){
        const eksikPrimGun = 6200 - primGunInt;
        message = `Emekli olmak için ${eksikPrimGun} gün prim yapmanız gerekiyor.`;
      }
      if(girisYiliInt>= 2010 && primGunInt < 7200 ){
        const eksikPrimGun = 6200 - primGunInt;
        message = `Emekli olmak için ${eksikPrimGun} gün prim yapmanız gerekiyor.`;
      }
    
      dispatch(setEmeklilikDurumu(message))

    }
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
