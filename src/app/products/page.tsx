import { getProducts } from '@/shared/data/product/get-products';
import { AddProductButton } from './_components/add-product-button';
import { DeleteProductButton } from './_components/delete-product-button';
import { EditProductButton } from './_components/edit-product-button';

export default async function ProductsPage() {
  const data = await getProducts();

  return (
    <div className="flex w-full max-w-[1000px] flex-col gap-2 p-10">
      <div className="flex justify-between">
        <h1 className="text-2xl">List of Products</h1>
        <AddProductButton />
      </div>
      <table className="w-full border-collapse border">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map(product => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>
                <div className="flex justify-center gap-2">
                  <EditProductButton product={product} />
                  <DeleteProductButton product={product} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
