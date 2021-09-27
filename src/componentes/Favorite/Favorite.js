import React from 'react';
import { useHistory } from 'react-router';
import FavoriteCard from '../FavoriteCard/FavoriteCard';

const Favorite = ({ carritoFav, removeItemFromCartFav, clearFav }) => {
    const history = useHistory()
    let amount = carritoFav?.map(a => a.price)
    let totalAmount = amount?.reduce((a, b) => a + b, 0)

    return (
        <div className="card p-4 mt-5 pt-4 mb-5 rounded" style={{minWidth:"460px"}}>
            {carritoFav.length ? <table style={{ width: '100%' }}>
                <thead>
                    <tr>
                        <td style={{ fontWeight: 'bold' }}>Product</td>
                        <td style={{ fontWeight: 'bold' }}>Title</td>
                        <td style={{ fontWeight: 'bold' }}>Price</td>
                        <td style={{ fontWeight: 'bold' }}>Remove</td>
                    </tr>
                </thead>
                <tbody>
                    {carritoFav?.map( (producto, index) => {
                        return (
                            <FavoriteCard key={index + 1} removeItemFromCartFav={removeItemFromCartFav} producto={producto} />
                        )
                    })}
                </tbody>
            </table> : <h4>Nothing in Fav! Please Add some items</h4>}

            {carritoFav.length ? 
                <div  className="mx-auto">
                <div>
                Price: {totalAmount - ((totalAmount * 25) / 100)+ ' kr'}
                    
                </div>
                <div>
                Incl moms: {totalAmount + ' kr'}
                
                </div>
                <div className="text-center mx-auto">
                    <button className="p-1 rounded" style={{ backgroundColor: 'black', color: 'white' }} onClick={() => {
                        clearFav()
                        history.push('/home')
                    }}>Clear Favourites</button>
                </div>
                </div>
            : null}

        </div >
    );
}


export default Favorite;