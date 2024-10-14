import "./home.scss";
import TalentCards from "./components/home/talentCards/TalentCards";
import { fetchData } from "./db/db";
import { CSSProperties } from "react";

export default async function Home() {
  const services = await fetchData<any[]>(`
		*[_type == 'services']{...}
	`);
  const testimonials = await fetchData<any[]>(`
		*[_type == 'current_talents']{...}
	`);

  console.log(testimonials);

  return (
    <main id="page_home">
      <section className="s-hero">
        <div className="hero-title">
          <h1>Write The Tagline HERE!</h1>
          <h2 className="common-heading">Call To Action Text</h2>
          <img
            src="/graphic/triangle_grey1.png"
            alt=""
            className="decor_triangle"
          />
        </div>
        <p className="main-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>

        <div className="cta">
          <button className="btn btn-primary">
            {" "}
            Consultation Text <span className="extra">Free</span>
          </button>
          <button className="btn btn-secondary">Get In Touch!</button>
        </div>
        <div className="next">
          <img src="/graphic/scroll_arrow.svg" alt="" className="arrow" />
        </div>
      </section>

      <section className="service">
        <div className="heading">
          <div className="left">
            <img
              src="/background/traingle_orange1.png"
              alt=""
              className="decor_triangle"
            />
            <h2 className="common-heading">SERVICE HEADER</h2>
            <p className="common-p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis
            </p>
          </div>

          <div className="right">
            <button className="btn btn-secondary">Some button</button>
          </div>
        </div>
        <div className="service-list">
          {services &&
            services.map((s: any, i: number) => {
              return (
                <div
                  className="service-card"
                  key={"service-card-" + s._id}
                  style={
                    { "--color": s.panel_color || "#67778A" } as CSSProperties
                  }
                >
                  {s.main_price && <div className="price"> {s.main_price}</div>}
                  <div className="service-h">
                    <h3>{s.name}</h3>
                    {s.subtitle && <p className="subs">{s.subtitle}</p>}
                    {s.description && <p className="desc">{s.description}</p>}
                    <ul className="bp">
                      {s.points &&
                        s.points.map((point: string, i: number) => {
                          return (
                            <li
                              className="bp-item"
                              key={s._id + "service-point" + i}
                            >
                              Bullet Points here
                            </li>
                          );
                        })}
                    </ul>
                    {s.footer && (
                      <div className="card-footer">
                        <p className="footer-text">{s.footer.description}</p>
                        <div className="pricing">
                          <div className="price-rate">
                            {s.footer.price}
                            <span className="rate">{s.footer.rate}</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          {/* <div className="service-card">
            <div className="price"> $255</div>
            <div className="service-h">
              <h3>Service Title</h3>
              <p className="subs"> Who this service is for...</p>
              <p className="desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam,
              </p>

              <ul className="bp">
                <li className="bp-item">Bullet Points here</li>
                <li className="bp-item">Bullet Points here</li>
                <li className="bp-item">Bullet Points here</li>
              </ul>
              <div className="card-footer">
                <p className="footer-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam,{" "}
                </p>
                <div className="pricing">
                  <div className="price-rate">
                    $9<span className="rate">/ day</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="service-card"
            style={
              { "--color": "#FF9345", "--bgColor": "#ffd1af" } as CSSProperties
            }
          >
            <div className="price"> $255</div>
            <div className="service-h">
              <h3>Service Title</h3>
              <p className="subs"> Who this service is for...</p>
              <p className="desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam,
              </p>

              <ul className="bp">
                <li className="bp-item">Bullet Points here</li>
                <li className="bp-item">Bullet Points here</li>
                <li className="bp-item">Bullet Points here</li>
              </ul>
              <div className="card-footer">
                <p className="footer-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam,{" "}
                </p>
                <div className="price-rate">
                  $9<span className="rate">/ day</span>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>
      <section className="talent-current">
        <div className="talent-current-h">
          <h2 className="common-heading">Current Talents</h2>
        </div>
        <TalentCards tList={testimonials} />
        <div className="talent-current-f">
          <p className="common-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis
          </p>
          <a href="#" className="btn btn-primary">
            View Talents
          </a>
        </div>
      </section>
    </main>
  );
}
