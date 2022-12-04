import { useState } from 'react';

function FormRegalos() {
    const [gift, setGift] = useState('');
    const [giftsList, setGiftsList] = useState([]);

    const handleChange = (e) => {
        setGift(e.target.value);
    }

    const handleSubmit = (e) => {
        setGiftsList([...giftsList, gift])
        setGift('');
        e.preventDefault();
    };

    return (
    <div>
        <form className='max-w-[400px] w-full mx-auto p-8 py-8 bg-red-900 rounded-lg' onSubmit={handleSubmit}>
            <div className='flex justify-evenly'>
                <input type="text" name="gift" value={gift} onChange={handleChange} className='w-8/12 rounded-lg p-2 focus:outline-none bg-green-700 focus:bg-green-800 text-lg ' />
                <button type="submit" className='w-3/12 py-2 bg-green-900 shadow-lg hover:shadow-green-500/10 text-white font-semibol rounded-lg tracking-widest text-lg'>Agregar</button>
            </div>
            <ul className='flex flex-col p-4 mt-4 '>
                {giftsList.map( (gift, index) =>  (
                    <li key={index} className='text-lg text-left'> 🎄 {gift} </li>
                ))}
            </ul>
        </form>
    </div>
    )
}

export default FormRegalos