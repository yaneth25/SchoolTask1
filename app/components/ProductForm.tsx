"use client";

import { useState } from "react";

interface ProductFormProps {
  onAddProduct: (payload: {
    title: string;
    description: string;
    price: number;
  }) => void;
}

export default function ProductForm({ onAddProduct }: ProductFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedTitle = title.trim();
    const trimmedDescription = description.trim();
    const numericPrice = Number(price);

    if (!trimmedTitle || !trimmedDescription || Number.isNaN(numericPrice)) {
      return;
    }

    onAddProduct({
      title: trimmedTitle,
      description: trimmedDescription,
      price: numericPrice
    });

    setTitle("");
    setDescription("");
    setPrice("");
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-md">
      <h2 className="text-2xl font-bold text-[var(--color-primary)]">Alta de producto</h2>

      <label className="flex flex-col gap-2">
        <span className="text-sm font-semibold text-[var(--color-primary)]">Producto</span>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Ej. Cuaderno universitario"
          className="rounded-lg border border-[var(--color-muted-2)] px-3 py-2 outline-none transition focus:border-[var(--color-accent)]"
          required
        />
      </label>

      <label className="flex flex-col gap-2">
        <span className="text-sm font-semibold text-[var(--color-primary)]">Detalle/descripcion</span>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Describe el producto..."
          rows={4}
          className="rounded-lg border border-[var(--color-muted-2)] px-3 py-2 outline-none transition focus:border-[var(--color-accent)]"
          required
        />
      </label>

      <label className="flex flex-col gap-2">
        <span className="text-sm font-semibold text-[var(--color-primary)]">Valor o precio</span>
        <input
          type="number"
          min="0"
          step="0.01"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Ej. 89.99"
          className="rounded-lg border border-[var(--color-muted-2)] px-3 py-2 outline-none transition focus:border-[var(--color-accent)]"
          required
        />
      </label>

      <button
        type="submit"
        className="mt-2 rounded-lg bg-[var(--color-accent)] px-4 py-3 font-semibold text-white transition hover:brightness-95"
      >
        Agregar producto
      </button>
    </form>
  );
}
