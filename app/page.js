

export default function Home() {
  return (
    <div className="w-full h-screen bg-sky-100 flex flex-col items-center justify-center">
      <div className="flex items-center justify-center w-full ">
        <h2 className="font-medium text-4xl text-orange-500">Kaç Yaşında Emekli Oluyorum? </h2>
      </div>
      <div className="flex items-center justify-center mt-10">
        <div >
        <div className="flex items-center justify-between my-6">
        <label htmlFor="giris" className="mr-4">Sigorta Başlangıcınız</label>
        <input type="text" id="giris" className="border-black" />
      </div>
      <div className="flex items-center justify-between my-6">
        <label htmlFor="gun" className="mr-4">Toplam Sigorta Gününüz</label>
        <input type="text" id="gun" className="border-black"/>
      </div>
      <div className="flex items-center justify-between my-6">
        <label htmlFor="yas" className="mr-4">Yaşınız</label>
        <input type="text" id="yas" className="border-black"/>
      </div>
        </div>
      
      </div>
      <div className="flex items-center justify-center mt-10">
        <button className="border-none bg-slate-50 py-1 px-6 text-red-500">
          Sorgula
        </button>
      </div>
      
    </div>
  )
}
