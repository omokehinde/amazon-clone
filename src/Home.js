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
                    id="123456"
                    title="Slim jean"
                    price={13000}
                    rating={5}
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ7y4ajZxGLtfQgNS4n-XIMBBXSOE8HC_Pqvg&usqp=CAU" 
                />
                 <Product 
                    id="123456"
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
                    id="123456"
                    title="Slim jean"
                    price={13000}
                    rating={5}
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ7y4ajZxGLtfQgNS4n-XIMBBXSOE8HC_Pqvg&usqp=CAU" 
                />
            </div>
            <div className="home__row">
                <Product 
                    id="123456"
                    title="Slim jean"
                    price={13000}
                    rating={5}
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ7y4ajZxGLtfQgNS4n-XIMBBXSOE8HC_Pqvg&usqp=CAU" 
                />
                 <Product 
                    id="123456"
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
                    id="123456"
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