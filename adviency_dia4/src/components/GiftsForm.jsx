import React, { useState } from 'react'

const GiftsForm = () => {

    const [gift, setGift] = useState('');
    const [giftsList, setGiftsList] = useState([]);

    const handleChange = (e) =>  setGift(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        gift !== '' && setGiftsList([...giftsList, gift]);
        setGift('');
    }

    const handleTrash = (indexTrash) => {
        setGiftsList( giftsList.filter( (gift, i) => i !== indexTrash ) );
    }



    return (
        <div className='max-w-[25rem] w-full mx-auto p-8 py-8 bg-red-900 rounded-lg'>
            <form onSubmit={handleSubmit} className='flex justify-evenly' >
                <input className='w-8/12 text-lg p-2 rounded bg-green-800 focus:outline-none focus:bg-green-700' type='text' name= 'gift' value={gift} onChange={handleChange} />
                <button className='w-3/12 text-lg p-2 rounded bg-green-600 shadow-lg tracking-wide hover:shadow-green-500/10 font-semibol' type='submit'>Agregar</button>
            </form>
            <ul className='text-left p-4 mt-4'>
                {giftsList.map( (gift, index) => (
                    <li key={index} className='text-lg flex justify-between'>
                        🎁 {gift} 
                        <button onClick={() => handleTrash(index)}>🗑️</button>
                    </li>
                    ))}
            </ul>

        </div>
    )
}

export default GiftsForm;