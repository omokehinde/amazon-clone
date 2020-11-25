import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <img className="home__image" 
            src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg" 
            alt=""/>
            {/* Product id, title, price, rating, image */}
            <div className="home__row">
                <Product 
                    id="12456"
                    title="Slim jean"
                    price={13000}
                    rating={5}
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ7y4ajZxGLtfQgNS4n-XIMBBXSOE8HC_Pqvg&usqp=CAU" 
                />
                 <Product 
                    id="21456"
                    title="Red Nike Sneakers"
                    price={78650}
                    rating={4}
                    image= "data:image/jpeg;base64,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"
                /><Product 
                id="23456"
                title="Slim jean"
                price={13000}
                rating={5}
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ7y4ajZxGLtfQgNS4n-XIMBBXSOE8HC_Pqvg&usqp=CAU" 
            />
            <Product 
                    id="12346"
                    title="Slim jean"
                    price={13000}
                    rating={5}
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ7y4ajZxGLtfQgNS4n-XIMBBXSOE8HC_Pqvg&usqp=CAU" 
                />
            </div>
            <div className="home__row">
                <Product 
                    id="124563"
                    title="Slim jean"
                    price={13000}
                    rating={5}
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ7y4ajZxGLtfQgNS4n-XIMBBXSOE8HC_Pqvg&usqp=CAU" 
                />
                 <Product 
                    id="123564"
                    title="Slim jean"
                    price={13000}
                    rating={5}
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ7y4ajZxGLtfQgNS4n-XIMBBXSOE8HC_Pqvg&usqp=CAU" 
                /><Product 
                id="123456"
                title="Slim jean"
                price={13000}
                rating={5}
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ7y4ajZxGLtfQgNS4n-XIMBBXSOE8HC_Pqvg&usqp=CAU" 
            />
            <Product 
                    id="345612"
                    title="Slim jean"
                    price={13000}
                    rating={5}
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ7y4ajZxGLtfQgNS4n-XIMBBXSOE8HC_Pqvg&usqp=CAU" 
                />
            </div>
            {/* Product */}
        </div>
    )
}

export default Home;