import 'react';
import Header from './Header';
import Footer from './Footer';
import ProductRow from './ProductRow';
import axios from "axios";
import { useEffect, useState } from "react";

function HomePage() {
    const [rows, setRows] = useState(0);

    useEffect(() => {
        axios.get("https://localhost:7086/api/Product/GetProducts").then((response) => {
            
            console.log("Response", response.data);
            let products = response.data;
            if (response.data.length) {
                let numrows = Math.ceil(response.data.length / 4);
                setRows(numrows);
                let pRows = [];
                for (let i = 0; i < numrows; i++) {
                    let start = i * 4;
                    let end = start + 4;
                    let ps = products.slice(start, end);
                    console.log(i,ps);
                    pRows.push(<ProductRow key={i} products={ps} />);
                }

                setRows(pRows);
                
            }
        });

    }, []);



    return (
        <>
        <Header/>
            <section>
                <div className="container-xl">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-title">
                                <h2>Featured Product</h2>
                            </div>
                            <div className="shopping">
                                { rows}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        <Footer />
        </>
  );
}

export default HomePage;