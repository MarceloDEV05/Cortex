import Img from '/src/assets/1187525.png'
import ButtonPlus from './components/ButtonPlus'

function List(){
    return(
        <div className="text-white flex w-full h-full text-center justify-center items-center">
         
         <div className='justify-center text-center flex flex-col items-center'>
            <img className='mt-[120px]' src={ Img } alt="imagemlista.png" />
            <p className='text-2xl font-bold'>Adicione sua primeira tarefa</p>
         </div>

      
                <ButtonPlus/>
         
        </div>
    )
}

export default List