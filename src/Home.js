// ProductPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products');
                const productsDescription = response.data.map(product => ({
                    ...product,
                    showFullDescription: false
                }));
                setProducts(productsDescription);
            } catch (error) {
                console.error('Something went wrong: ', error);
            }
        };

        fetchProducts();
    }, []);

    const toggleDescription = (index) => {
        const updatedProducts = [...products];
        updatedProducts[index].showFullDescription = !updatedProducts[index].showFullDescription;
        setProducts(updatedProducts);
    };

    return (
        <div className="container mx-auto">
            <h1 className="text-3xl font-bold mb-8">Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {products.map((product, index) => (
                    <div key={product.id} className="bg-white shadow-md p-4 rounded-lg">

                        <img src={product.image} alt={product.title} className="w-full h-40 mb-4" />

                        <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
                        <p className="bold">Category: {product.category}</p>
                        <p className="font-semibold mb-2">Price: {product.price}</p>
                        {product.showFullDescription ? (
                            <div>
                                <p className="text-gray-500 mb-2">{product.description}</p>
                                <button onClick={() => toggleDescription(index)} className="text-blue-500">Read Less</button>
                            </div>
                        ) : (
                            <div>
                                <p className="text-gray-500 mb-2">{product.description.slice(0, 60)}...</p>
                                <button onClick={() => toggleDescription(index)} className="text-blue-500">Read More</button>
                            </div>
                        )}
                       
                        <div className='flex'>
                        <button className='outlined-btn'>Add to Card</button>
                        <button className='contained-btn'>Buy</button>
                        </div>
                      
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
