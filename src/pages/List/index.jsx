import Img from '/src/assets/1187525.png'

function List(){
    return(
        <div className="text-white flex flex-col">
         
         <div>
            <img src={ Img } alt="imagemlista.png" />
         </div>

        <div className="text-center align-bottom">
            <button className="border rounded-full w-[50px] h-[50px] text-3xl bg-green-700">+</button>
        </div>

        </div>
    )
}

export default List