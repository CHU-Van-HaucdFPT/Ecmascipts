import { getAll } from "../api/products";
import Header from "../component/Header";


const ProductPage = {
    async render(){
        const productList = (await getAll()).data;
        
        console.log(productList);
        return `
            <div class="container">
                <header>
                    ${Header.render()}
                </header>
                <main>
                    <h1>Product Page</h1>
                    
                    <div className="products">
                        ${
                            productList.map((item)=>{
                                return `
                                    <div className="item">
                                        <a href="/products/${item.id}"><img src="${item.image}" alt="" /></a>
                                        <h3>${item.title}</h3>
                                        <p>${item.content}</p>
                                    </div>
                                `
                            }).join("")
                        }
                    </div>
                </main>
                <footer>
                    <div className="logo">
                        <img src="https://picsum.photos/100/50" alt="" />
                    </div>
                    <ul>
                        <li>Site Map</li>
                        <li>Site Map</li>
                        <li>Site Map</li>
                    </ul>
                </footer>
            </div>
        `
    }
}
export default ProductPage;