import { fetchData } from "../db/db";
import "./faq.scss";
import FaqDropdown from "./faqDropdown/FaqDropdown";
export default async function FaqPage() {
  const faq = await fetchData<any[]>(`
		*[_type == 'faq']{
		...}
	`);
  console.log(faq);
  return (
    <main id="page_faq">
      <section className="faq-title">
        <div className="faq-title-h">
          <h2 className="common-heading">
            Frequently ASked Question
            <img src="/graphic/star1.png" alt="" className="star l" />
            <img src="/graphic/star1.png" alt="" className="star c" />
            <img src="/graphic/star1.png" alt="" className="star r" />
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
        {faq &&
          faq.map((data: any, index: number) => {
            return (
              <FaqDropdown
                key={index}
                answer={data.answer}
                question={data.question}
              />
            );
          })}
      </section>
    </main>
  );
}
