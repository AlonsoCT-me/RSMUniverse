import { resolveRouteState, routes } from "./utils/navigation";
import type { Page, NavigateFn } from "./types/navigation";
import type { CartItem, AddToCartFn } from "./types/cart";
import {
  DEFAULT_SPECIAL_PRODUCT_ID,
  DEFAULT_CORE_PRODUCT_ID,
  productsById,
} from "./data/products";
import { Collection } from "./pages/Collection/CollectionPage";
import { CorePdp } from "./pages/Product/CorePdp";
import { SpecialLanding } from "./pages/SpecialEdition/SpecialEditionPage";
import { NocturnaPdp } from "./pages/Product/NocturnaPdp";
import { Story } from "./pages/OurStory/OurStoryPage";
import { CarePage } from "./pages/Care/CarePage";
import { DesignSystem } from "./pages/DesignSystem/DesignSystemPage";
import { Comparison } from "./pages/Comparison/ComparisonPage";
import { Home } from "./pages/Home/HomePage";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { CartDrawer } from "./components/cart/CartDrawer";
import { useState, useCallback, useEffect, useMemo } from "react";

export default function App() {
  const hashPath = window.location.hash.replace(/^#\/?/, "");
  const initialRoute = resolveRouteState(hashPath);
  const [page, setPage] = useState<Page>(initialRoute.page);
  const [selectedProductId, setSelectedProductId] = useState<string>(
    initialRoute.productId,
  );
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);
  const [cartOpen, setCartOpen] = useState(false);

  const addToCart = useCallback<AddToCartFn>((product, quantity) => {
    setCartItems((items) => {
      const existing = items.find((item) => item.product.id === product.id);
      return existing
        ? items.map((item) =>
            item.product.id === product.id
              ? { ...item, quantity: item.quantity + quantity }
              : item,
          )
        : [...items, { product, quantity }];
    });
    setCartOpen(true);
  }, []);

  const navigate: NavigateFn = (next, productId) => {
    const resolvedId =
      productId ||
      (next === "nocturna"
        ? DEFAULT_SPECIAL_PRODUCT_ID
        : next === "caliza"
          ? DEFAULT_CORE_PRODUCT_ID
          : selectedProductId);
    setPage(next);
    if (productId || next === "caliza" || next === "nocturna") {
      setSelectedProductId(resolvedId);
    }
    const route =
      next === "caliza" || next === "nocturna"
        ? `producto/${resolvedId}`
        : routes[next];
    window.location.hash = `/${route}`;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const syncRoute = () => {
      const hash = window.location.hash.replace(/^#\/?/, "");
      const path = hash;
      const resolved = resolveRouteState(path);
      setPage(resolved.page);
      if (path.startsWith("producto/")) {
        setSelectedProductId(resolved.productId);
      }
      window.scrollTo(0, 0);
    };
    window.addEventListener("hashchange", syncRoute);
    window.addEventListener("popstate", syncRoute);
    return () => {
      window.removeEventListener("hashchange", syncRoute);
      window.removeEventListener("popstate", syncRoute);
    };
  }, []);

  const content = useMemo(() => {
    const activeProduct = productsById[selectedProductId];
    const coreProduct =
      activeProduct?.collectionId === "core"
        ? activeProduct
        : productsById[DEFAULT_CORE_PRODUCT_ID];
    const specialProduct =
      activeProduct?.collectionId === "special-edition"
        ? activeProduct
        : productsById[DEFAULT_SPECIAL_PRODUCT_ID];
    switch (page) {
      case "collection":
        return <Collection navigate={navigate} onAdd={addToCart} />;
      case "caliza":
        return (
          <CorePdp
            product={coreProduct}
            navigate={navigate}
            onAdd={(quantity) =>
              addToCart(
                activeProduct?.collectionId === "core"
                  ? activeProduct
                  : productsById[DEFAULT_CORE_PRODUCT_ID],
                quantity,
              )
            }
            onQuickAdd={addToCart}
          />
        );
      case "special":
        return <SpecialLanding navigate={navigate} />;
      case "nocturna":
        return (
          <NocturnaPdp
            product={specialProduct}
            navigate={navigate}
            onAdd={(quantity) =>
              addToCart(
                activeProduct?.collectionId === "special-edition"
                  ? activeProduct
                  : productsById[DEFAULT_SPECIAL_PRODUCT_ID],
                quantity,
              )
            }
          />
        );
      case "story":
        return <Story />;
      case "care":
        return <CarePage navigate={navigate} />;
      case "system":
        return <DesignSystem navigate={navigate} />;
      case "compare":
        return <Comparison />;
      default:
        return <Home navigate={navigate} onAdd={addToCart} />;
    }
  }, [page, selectedProductId, addToCart]);

  return (
    <div className={`app app--${page}`}>
      <Header
        page={page}
        navigate={navigate}
        cartCount={cartCount}
        openCart={() => setCartOpen(true)}
      />
      {content}
      <Footer navigate={navigate} />
      <CartDrawer
        open={cartOpen}
        close={() => setCartOpen(false)}
        items={cartItems}
      />
    </div>
  );
}
