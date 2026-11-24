import type { CartItem } from "../../types/cart";
import { formatMoney } from "../../utils/pricing";
import { Icon } from "../ui/Icon";

export function CartDrawer({
  open,
  close,
  items,
}: {
  open: boolean;
  close: () => void;
  items: CartItem[];
}) {
  return (
    <div className={`cart-layer ${open ? "is-open" : ""}`} aria-hidden={!open}>
      <button className="cart-layer__backdrop" aria-label="Cerrar carrito" onClick={close} />
      <aside className="cart-drawer" role="dialog" aria-modal="true" aria-label="Bolsa de compra">
        <div className="cart-drawer__head">
          <h2>Tu bolsa</h2>
          <button aria-label="Cerrar" onClick={close}>
            <Icon name="close" />
          </button>
        </div>
        {items.length > 0 ? (
          <>
            {items.map(({ product, quantity }) => (
              <div className="cart-item" key={product.id}>
                <img src={product.images[0].src} alt={product.images[0].alt} />
                <div>
                  <b>{product.name}</b>
                  <span>{product.attributes.colorPattern}</span>
                  <p>
                    {quantity} × {formatMoney(product.priceAmount, product.currency)}
                  </p>
                </div>
              </div>
            ))}
            <div className="cart-drawer__total">
              <span>Subtotal</span>
              <b>
                {formatMoney(
                  items.reduce(
                    (total, item) => total + item.product.priceAmount * item.quantity,
                    0,
                  ),
                )}
              </b>
            </div>
            <button className="button">Ir al checkout</button>
            <small>Impuestos y envío calculados en checkout.</small>
          </>
        ) : (
          <div className="cart-empty">
            <p>Tu bolsa está vacía.</p>
            <small>Explora la colección Tierra RSM.</small>
          </div>
        )}
      </aside>
    </div>
  );
}
