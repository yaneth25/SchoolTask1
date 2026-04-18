"use client";

import { useState } from "react";
import Image from "next/image";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import type { Product } from "./types/product";

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);

  const onAddProduct = (payload: Omit<Product, "id">) => {
    setProducts((current) => [
      {
        id: Date.now(),
        ...payload
      },
      ...current
    ]);
  };

  return (
    <main className="min-h-screen bg-[var(--color-bg)] text-[var(--color-black)]">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-8 md:px-8">
        <header className="rounded-2xl bg-white p-6 shadow-md">
          <div className="flex flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
            <div className="flex items-center gap-4">
              <div className="rounded-full border-4 border-[var(--color-primary)] p-2">
                <Image
                  src="/logo-schooltask.png"
                  alt="Logo de SchoolTask"
                  width={96}
                  height={96}
                  priority
                />
              </div>
              <div>
                <h1 className="text-3xl font-extrabold text-[var(--color-primary)]">SchoolTask</h1>
                <p className="text-sm text-[var(--color-muted)]">
                  Tu agenda en orden, tu vida en orden.
                </p>
              </div>
            </div>
          </div>
        </header>

        <section className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <ProductForm onAddProduct={onAddProduct} />
          <ProductList products={products} />
        </section>
      </div>

      <footer className="mt-8 bg-[var(--color-primary)] px-4 py-5 text-center text-sm text-white">
        Integrante del proyecto: Martell Jimenez Karla Yaneth 6CPGM
      </footer>
    </main>
  );
}
