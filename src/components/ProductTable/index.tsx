import { ProductType } from "../../domain/types";

import "./style.css";

interface Props {
  products: Array<ProductType>;
  handleDeleteProduct: (productId: number) => void;
  handleEditProduct: (productId: number) => void;
}

export default function ProductTable({
  products,
  handleDeleteProduct,
  handleEditProduct,
}: Props) {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Preço</th>
          <th>Estoque (kg)</th>
          <th style={{ textAlign: "center" }}>Ações</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>
              {product.price.toLocaleString("pt-Br", {
                style: "currency",
                currency: "BRL",
              })}
            </td>
            <td>{product.quantity}</td>
            <td className="actions">
              <button onClick={() => handleEditProduct(product.id)}>
                Editar
              </button>
              <button onClick={() => handleDeleteProduct(product.id)}>
                Excluir
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
