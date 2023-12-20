import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import { useGetProductByCategory } from '../hooks/useProducts';
import { useParams } from 'react-router-dom';

export const Category = () => {
    
    const { categoryId } = useParams();

    const { productsData } = useGetProductByCategory(categoryId)

    return (
        <ItemListContainer key={categoryId} productsData={productsData} />
    )
}