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

  return (
    <main id="page_home">
      <section className="s-hero">
        <div className="hero-title">
          <h1>VTuber Manager Services!</h1>
          <div className="stars">
            <img src="/graphic/star1.png" alt="" className="star r" />
            <img src="/graphic/star1.png" alt="" className="star l" />
            <img src="/graphic/star1.png" alt="" className="star c" />
          </div>
          <h2 className="common-heading">
            Held back from your true potential? <br />
            Let me help change that!{" "}
          </h2>
          <img
            src="/graphic/triangle_grey1.png"
            alt=""
            className="decor_triangle"
          />
        </div>
        <p className="main-desc">
          This service is a luxury and NOT a requirement to be a creator! If you
          are brand new, consider doing some self research! This is an optional
          clarity of mind as I will assist you in your content creation. I
          provide you support and ensure all your needs and goals are met!
        </p>

        <div className="cta">
          <a
            href="https://x.com/messages/1379171069043564552-1608144670852534272?recipient_id=1379171069043564552&text=Hi%2C%20I%27m%20interested%20in%20hiring%20you%20as%20my%20manager.%20Could%20we%20discuss%20further%20details%3F%20%F0%9F%AA%84%F0%9F%8C%9F%20%F0%9F%93%8B"
            target="_blank"
            className="btn btn-primary"
          >
            {" "}
            Contact Me Here!<span className="extra">Free Consultations</span>
          </a>
          <a href="#service" className="btn btn-secondary">
            Learn more
          </a>
        </div>
        <div className="next">
          <img src="/graphic/scroll_arrow.svg" alt="" className="arrow" />
        </div>
      </section>

      <div id="service" className="service-container">
        <section className="service">
          <div className="heading">
            <div className="left">
              <img
                src="/background/traingle_orange1.png"
                alt=""
                className="decor_triangle"
              />
              <h2 className="common-heading">SERVICE</h2>
              <p className="common-p">
                Take your VTuber career to the next level with my comprehensive
                management services, tailored to your needs. Tier 1 is ideal for
                those seeking a hands-off, advisory approach like a guidance
                counselor , Tier 2 adds collaborative coaching in similarities
                to an assistant, and Tier 3 is full-service management where I
                take care of all logistics like true management. What you see is
                what you get—no hidden fees, no price changes, just
                straightforward and transparent pricing.
              </p>
            </div>

            <div className="right">
              {/* <button className="btn btn-secondary">Some button</button> */}
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
                    {s.main_price && (
                      <div className="price"> {s.main_price}</div>
                    )}
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
                                key={s._key + "service-point" + i}
                              >
                                {point}
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
      </div>
      <section className="talent-current">
        <div className="talent-current-h">
          <h2 className="common-heading">Current Talents</h2>
        </div>
        <TalentCards tList={testimonials} />
        {/* <div className="talent-current-f">
          <p className="common-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis
          </p>
          <a href="#" className="btn btn-primary">
            View Talents
          </a>
        </div> */}
      </section>
    </main>
  );
}
