import type { Page } from "../../types/navigation";
import { Newsletter } from "../ui/Newsletter";
import { assetUrl } from "../../asset-url";

export function Footer({ navigate }: { navigate: (page: Page) => void }) {
  return (
    <>
      <Newsletter />
      <footer>
        <div className="footer__brand">
          <img src={assetUrl("/assets/rsm-logo-white.png")} alt="RSM" />
          <p>
            Nuestro origen nos define.
            <br />
            No nos limita.
          </p>
        </div>
        <div className="footer__nav">
          <span>Explorar</span>
          <button onClick={() => navigate("collection")}>Colección Core</button>
          <button onClick={() => navigate("special")}>Special Edition</button>
          <button onClick={() => navigate("story")}>Nuestra historia</button>
          <button onClick={() => navigate("care")}>
            Cuidado de tus gorras
          </button>
        </div>
        <div className="footer__nav">
          <span>Legales</span>
          <button>Aviso de privacidad</button>
          <button>Términos y condiciones</button>
          <button>Política de devolución</button>
          <button>Contacto</button>
        </div>
        <div className="footer__meta footer__nav">
          <span>Propuesta conceptual</span>
          <p>
            Contenido y precios demostrativos. Sujeto a catálogo y políticas
            oficiales.
          </p>
          <button onClick={() => navigate("system")}>Design System</button>
          <button onClick={() => navigate("compare")}>Comparativa UX/UI</button>
        </div>
        <div className="footer__bottom">
          <span>© 2026 Rancho San Marco</span>
          <span>Monterrey · México · El mundo</span>
        </div>
      </footer>
    </>
  );
}
