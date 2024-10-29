import React, { CSSProperties } from "react";
import "./talents.scss";
import { FaTwitch, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { fetchData, urlFor } from "../db/db";
export default async function TalentsPage({}) {
  const talents = await fetchData<any[]>(`
		*[_type == 'talent_testimonials']{
		...}
	`);
  const talentList = await fetchData<any[]>(`
		*[_type == 'talents']{
		...}
	`);

  const sbtn = (type: "x" | "twitch" | "youtube", url: string) => {
    const selection = {
      youtube: (
        <a href={url} className="btn contact yt">
          <FaYoutube />
        </a>
      ),
      x: (
        <a href={url} className="btn contact x">
          <FaXTwitter />
        </a>
      ),
      twitch: (
        <a href={url} className="btn contact t">
          <FaTwitch />
        </a>
      ),
    };

    return selection[type];
  };

  console.log(talentList[0]);
  return (
    <main id="page_talent">
      <section className="talent-general">
        <div className="talent-general-h">
          <h2 className="common-heading">
            TALENTS
            <img src="/graphic/star1.png" alt="" className="star l" />
            <img src="/graphic/star1.png" alt="" className="star r" />
          </h2>
          <img
            src="/background/traingle_orange1.png"
            alt=""
            className="decor_triangle"
          />
          <p className="common-p">
            {`
					 
						\n

						\n
						
						`}
            This page highlights a selection of talented individuals I&apos;ve
            had the pleasure of working with. While this list represents some of
            my most notable collaborations, it&apos;s important to note that{" "}
            <strong>my portfolio extends beyond these listed</strong> and may be
            missing for various reasons.
          </p>
          <br />
          <p className="common-p">
            {`
							
						`}
            As a token of gratitude for their trust and partnership, all clients
            listed here can <strong>receive a 20% discount</strong> on their
            next service, and situational bonuses.. Additionally, they&apos;re
            invited to request more specialized services, tailored to their
            unique needs.
            <br />
            <br />
            <span className="hl">
              I want to give those I work with good perks and this could be for
              you too!
            </span>
          </p>
        </div>
        <div className="talent-general-c">
          {talents &&
            talents.slice(0, 3).map((t: any, i: number) => {
              return (
                <div
                  className="testimonials-card"
                  key={"testimonial-card" + t._id}
                >
                  <div className="info">
                    <div className="pfp">
                      <img src={urlFor(t.pfp).url()} alt="" />
                    </div>
                    <a href="#" className="name">
                      {t.name}
                    </a>
                  </div>
                  <div className="testimonials">
                    <p>
                      {' " '}
                      {t.testimonial}
                      {' " '}
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
      </section>

      <section className="talent-list">
        {talentList &&
          talentList.map((t: any, i: number) => {
            return (
              <a
                className="talent-card"
                style={
                  { "--color": t.panel_color ?? "#5ABCF3" } as CSSProperties
                }
                key={"talent-card-" + t._id}
              >
                <div className="pfp">
                  <img src={urlFor(t.pfp).url()} alt="" />
                </div>
                <div className="info">
                  <h3>{t.name}</h3>
                  <div className="contacts">
                    {t.socials &&
                      t.socials.map((s: any) => {
                        return sbtn(s.type, s.link);
                      })}
                    {/* {sbtn(t.socials[0], "https://google.com")} */}
                  </div>
                </div>
              </a>
            );
          })}
        {/* <div className="talent-card">
          <div className="pfp">
            <img
              src="https://img.freepik.com/free-photo/white-cloud-blue-sky-sea_74190-4488.jpg"
              alt=""
            />
          </div>
          <div className="info">
            <h3>@person_name</h3>
            <div className="contacts">
              <a href="#" className="btn contact">
                <FaYoutube />
              </a>
              <a href="#" className="btn contact">
                <FaYoutube />
              </a>
              <a href="#" className="btn contact">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
        <div className="talent-card">
          <div className="pfp">
            <img
              src="https://img.freepik.com/free-photo/white-cloud-blue-sky-sea_74190-4488.jpg"
              alt=""
            />
          </div>
          <div className="info">
            <h3>@person_name</h3>
            <div className="contacts">
              <a href="#" className="btn contact">
                <FaYoutube />
              </a>
              <a href="#" className="btn contact">
                <FaYoutube />
              </a>
              <a href="#" className="btn contact">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
        <div className="talent-card">
          <div className="pfp">
            <img
              src="https://img.freepik.com/free-photo/white-cloud-blue-sky-sea_74190-4488.jpg"
              alt=""
            />
          </div>
          <div className="info">
            <h3>@person_name</h3>
            <div className="contacts">
              <a href="#" className="btn contact">
                <FaYoutube />
              </a>
              <a href="#" className="btn contact">
                <FaYoutube />
              </a>
              <a href="#" className="btn contact">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
        <div className="talent-card">
          <div className="pfp">
            <img
              src="https://img.freepik.com/free-photo/white-cloud-blue-sky-sea_74190-4488.jpg"
              alt=""
            />
          </div>
          <div className="info">
            <h3>@person_name</h3>
            <div className="contacts">
              <a href="#" className="btn contact">
                <FaYoutube />
              </a>
              <a href="#" className="btn contact">
                <FaYoutube />
              </a>
              <a href="#" className="btn contact">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
        <div className="talent-card">
          <div className="pfp">
            <img
              src="https://img.freepik.com/free-photo/white-cloud-blue-sky-sea_74190-4488.jpg"
              alt=""
            />
          </div>
          <div className="info">
            <h3>@person_name</h3>
            <div className="contacts">
              <a href="#" className="btn contact">
                <FaYoutube />
              </a>
              <a href="#" className="btn contact">
                <FaYoutube />
              </a>
              <a href="#" className="btn contact">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
        <div className="talent-card">
          <div className="pfp">
            <img
              src="https://img.freepik.com/free-photo/white-cloud-blue-sky-sea_74190-4488.jpg"
              alt=""
            />
          </div>
          <div className="info">
            <h3>@person_name</h3>
            <div className="contacts">
              <a href="#" className="btn contact">
                <FaYoutube />
              </a>
              <a href="#" className="btn contact">
                <FaYoutube />
              </a>
              <a href="#" className="btn contact">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
        <div className="talent-card">
          <div className="pfp">
            <img
              src="https://img.freepik.com/free-photo/white-cloud-blue-sky-sea_74190-4488.jpg"
              alt=""
            />
          </div>
          <div className="info">
            <h3>@person_name</h3>
            <div className="contacts">
              <a href="#" className="btn contact">
                <FaYoutube />
              </a>
              <a href="#" className="btn contact">
                <FaYoutube />
              </a>
              <a href="#" className="btn contact">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div> */}
      </section>
    </main>
  );
}
