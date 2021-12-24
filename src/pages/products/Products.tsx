import React, {useEffect, useState} from "react";
import {Product} from "../../models/product";
import axios from "axios";

const Products = () => {
    const [products, setProducts] = useState<Product[]>();

    useEffect(() => {
        (
            async () => {
                const {data} = await axios.get('products');

                setProducts(data);
            }
        )();
    }, [])

    return (
        <div>

        </div>
    );
};

export default Products;