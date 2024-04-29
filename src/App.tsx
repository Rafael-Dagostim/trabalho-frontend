import { useState } from "react";
import "./App.css";
import ProductTable from "./components/ProductTable";
import { ProductType } from "./domain/types";
import ProductForm from "./components/ProductForm";

function App() {
  const [products, setProducts] = useState<Array<ProductType>>([
    { id: 1, name: "Produto A", price: 35, quantity: 20 },
    { id: 2, name: "Produto B", price: 40, quantity: 30 },
    { id: 3, name: "Produto C", price: 56, quantity: 24 },
    { id: 4, name: "Produto D", price: 4, quantity: 26 },
    { id: 5, name: "Produto E", price: 24, quantity: 12 },
    { id: 6, name: "Produto F", price: 24, quantity: 12 },
  ]);

  const [toEditProduct, setToEditProduct] = useState<ProductType | null>(null);

  const handleDeleteProduct = (productId: number) => {
    setProducts(products.filter((p) => p.id !== productId));
    if (productId === toEditProduct?.id) setToEditProduct(null);
  };

  const handleEditProduct = (productId: number) => {
    setToEditProduct(products.find((p) => p.id === productId) ?? null);
  };

  const handleProductSave = (data: ProductType) => {
    if (data.id) {
      const changedIdx = products.findIndex((p) => p.id === data.id);
      products[changedIdx] = data;
      setProducts(products);
      setToEditProduct(null);
      return;
    }
    const nextId = Math.max(...products.map((p) => p.id)) + 1;
    setProducts([...products, { ...data, id: nextId }]);
  };

  return (
    <>
      <h2>Tabela de Produtos</h2>

      <ProductTable
        products={products}
        handleDeleteProduct={handleDeleteProduct}
        handleEditProduct={handleEditProduct}
      />

      <ProductForm
        handleProductSave={handleProductSave}
        productEdit={toEditProduct}
      />
    </>
  );
}

export default App;
