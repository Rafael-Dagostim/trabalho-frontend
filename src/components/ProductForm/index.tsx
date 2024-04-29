import { useEffect, useState } from "react";
import { ProductType } from "../../domain/types";
import "./style.css";

interface Props {
  handleProductSave: (data: ProductType) => void;
  productEdit: ProductType | null;
}

export default function ProductForm({ handleProductSave, productEdit }: Props) {
  const [product, setProduct] = useState<Partial<ProductType>>({});

  const handleProductPropChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value, name } = event.target;
    setProduct({ ...product, [name]: name === "name" ? value : Number(value) });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (product) handleProductSave(product as ProductType);
    setProduct({});
  };

  useEffect(() => {
    setProduct(productEdit ?? {});
  }, [productEdit]);

  return (
    <div className="container">
      <h2>Cadastro de Produtos</h2>
      <form action="#" method="post" onSubmit={handleSubmit}>
        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          name="name"
          onChange={handleProductPropChange}
          value={product.name ?? ""}
          required
        />
        <label htmlFor="preco">Preço:</label>
        <input
          type="number"
          name="price"
          onChange={handleProductPropChange}
          value={product.price ?? 0}
          required
        />
        <label htmlFor="quantity">Estoque:</label>
        <input
          type="number"
          name="quantity"
          onChange={handleProductPropChange}
          value={product.quantity ?? 0}
          required
        />
        <input type="submit" value="Cadastrar" />
      </form>
    </div>
  );
}
