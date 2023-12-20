import { useEffect } from 'react';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import { useGetProducts } from '../hooks/useProducts'

export const HomePage = () => {

    useEffect (() => {
        document.title = "Home";

    }, []);

    const { productsData } = useGetProducts(5);

    return (
        <ItemListContainer productsData={productsData}/>

    );

}

export default HomePage;