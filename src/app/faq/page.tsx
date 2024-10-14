import "./faq.scss";
import FaqDropdown from "./faqDropdown/FaqDropdown";
export default function FaqPage() {
  return (
    <main id="page_faq">
      <section className="faq-title">
        <div className="faq-title-h">
          <h2 className="common-heading">
            Frequently ASked Question
            <img
              src="/background/traingle_orange1.png"
              alt=""
              className="decor_triangle"
            />
          </h2>
          <p className="common-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt.
          </p>
        </div>
      </section>
      <section className="faq-list">
        <FaqDropdown />
        <FaqDropdown />
        <FaqDropdown />
      </section>
    </main>
  );
}
