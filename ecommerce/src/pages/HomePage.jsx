import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "../store/actions/cartActions";
import  HomeSlider1  from "../components/HomeSlider1";
import React from 'react';
import { ShopCards } from "../components/ShopCards";
import { ProductCards } from "../components/ProductCards";
import HomeSlider2 from "../components/HomeSlider2";
import { Blog1 } from "../components/Blog1";
import { Blogs } from "../components/Blogs";



export const HomePage = () => {

    const dispatch = useDispatch();
    const items = useSelector((store)=> store.cart.items);
    ///redux denendi ve çalışıyor.

    return (

        <>
            <HomeSlider1/>

            {/*
            REDUX İÇİN DENEME DE KULLANDIM.
            <div>
                <button onClick={()=>dispatch(addToCart({id:1,name:"tshirt"}))}>
                    Add
                </button>
                <div className="mt-4 text-sm">{JSON.stringify(items)}</div>
            </div>*/}
            <ShopCards/>
            <ProductCards/>
            <HomeSlider2/>
            <Blog1/>
            <Blogs/>
            
        </>
    )
}