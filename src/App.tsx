import { useState } from "react";
import "./App.css";
import ProductTable from "./components/ProductTable";
import { ProductType } from "./domain/types";

function App() {
  const [products, setProducts] = useState<Array<ProductType>>([
    { id: 1, name: "Produto A", price: 35, quantity: 20 },
    { id: 2, name: "Produto B", price: 40, quantity: 30 },
    { id: 3, name: "Produto C", price: 56, quantity: 24 },
    { id: 4, name: "Produto D", price: 4, quantity: 26 },
    { id: 5, name: "Produto E", price: 24, quantity: 12 },
    { id: 6, name: "Produto F", price: 24, quantity: 12 },
  ]);

  const handleDeleteProduct = (productId: number) => {
    setProducts(products.filter((p) => p.id !== productId));
  };

  return (
    <>
      <h2>Tabela de Produtos</h2>

      <ProductTable
        products={products}
        handleDeleteProduct={handleDeleteProduct}
      />
    </>
  );
}

export default App;
