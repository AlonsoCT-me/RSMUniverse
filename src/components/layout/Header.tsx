import type { Page } from "../../types/navigation";
import { Icon } from "../ui/Icon";
import { useState } from "react";
import { assetUrl } from "../../asset-url";

export function Header({
  page,
  navigate,
  cartCount,
  openCart,
}: {
  page: Page;
  navigate: (page: Page) => void;
  cartCount: number;
  openCart: () => void;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const overlay =
    page === "home" ||
    page === "story" ||
    page === "special" ||
    page === "care";
  const dark = page === "special" || page === "nocturna";
  const links: [string, Page][] = [
    ["Inicio", "home"],
    ["Colección", "collection"],
    ["Special Edition", "special"],
    ["Nuestra historia", "story"],
  ];

  const go = (target: Page) => {
    setMenuOpen(false);
    navigate(target);
  };

  return (
    <>
      <header
        className={`site-header ${overlay ? "site-header--overlay" : ""} ${dark ? "site-header--dark" : ""}`}
      >
        <button
          className="logo-button"
          onClick={() => go("home")}
          aria-label="Ir al inicio"
        >
          <img
            className="brand-logo"
            src={
              overlay || dark
                ? assetUrl("/logo/RSM-logo-white.png")
                : assetUrl("/logo/RSM-logo-black.png")
            }
            alt="RSM"
            style={{ width: 120, height: "fit-content" }}
          />
        </button>
        <nav className="desktop-nav" aria-label="Navegación principal">
          {links.map(([label, target]) => (
            <button
              key={target}
              className={page === target ? "is-active" : ""}
              onClick={() => go(target)}
            >
              {label}
            </button>
          ))}
        </nav>
        <div className="header-actions">
          <button aria-label="Buscar">
            <Icon name="search" />
          </button>
          <button className="desktop-only" aria-label="Mi cuenta">
            <Icon name="user" />
          </button>
          <button
            className="bag-button"
            aria-label={`Bolsa, ${cartCount} artículos`}
            onClick={openCart}
          >
            <Icon name="bag" />
            {cartCount > 0 && <span>{cartCount}</span>}
          </button>
          <button
            className="mobile-menu-button"
            aria-label="Abrir menú"
            onClick={() => setMenuOpen(true)}
          >
            <Icon name="menu" />
          </button>
        </div>
      </header>
      <div
        className={`mobile-nav ${menuOpen ? "is-open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <div className="mobile-nav__top">
          <img src={assetUrl("/logo/RSM-logo-white.png")} alt="RSM" />
          <button aria-label="Cerrar menú" onClick={() => setMenuOpen(false)}>
            <Icon name="close" size={24} />
          </button>
        </div>
        <nav>
          <button onClick={() => go("home")}>Inicio</button>
          {links.map(([label, target]) => (
            <button key={target} onClick={() => go(target)}>
              {label}
            </button>
          ))}
        </nav>
        <p>
          De dónde venimos importa.
          <br />
          Hacia dónde vamos, también.
        </p>
      </div>
    </>
  );
}
