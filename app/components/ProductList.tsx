import type { Product } from "../types/product";

interface ProductListProps {
  products: Product[];
}

export default function ProductList({ products }: ProductListProps) {
  return (
    <section className="rounded-2xl bg-white p-6 shadow-md">
      <h2 className="text-2xl font-bold text-[var(--color-primary)]">Productos registrados</h2>

      {products.length === 0 ? (
        <p className="mt-4 text-sm text-[var(--color-muted)]">
          Aun no hay productos dados de alta.
        </p>
      ) : (
        <ul className="mt-5 space-y-4">
          {products.map((product) => (
            <li
              key={product.id}
              className="rounded-xl border border-[var(--color-soft)] bg-[var(--color-bg)] p-4"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold text-[var(--color-primary)]">{product.title}</h3>
                <span className="rounded-md bg-[var(--color-accent)] px-3 py-1 text-sm font-bold text-white">
                  ${product.price.toFixed(2)}
                </span>
              </div>
              <p className="mt-2 text-sm text-[var(--color-black)]">{product.description}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
