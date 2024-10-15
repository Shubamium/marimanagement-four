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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillu
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
          {/* <div className="testimonials-card">
            <div className="info">
              <div className="pfp">
                <img
                  // src="https://img.freepik.com/free-photo/white-cloud-blue-sky-sea_74190-4488.jpg"
                  src=""
                  alt=""
                />
              </div>
              <a href="#" className="name">
                @PERSON_NAME
              </a>
            </div>
            <div className="testimonials">
              <p>
                {' " '} Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim
                {' " '}
              </p>
            </div>
          </div>
          <div className="testimonials-card">
            <div className="info">
              <div className="pfp">
                <img
                  src="https://img.freepik.com/free-photo/white-cloud-blue-sky-sea_74190-4488.jpg"
                  alt=""
                />
              </div>
              <a href="#" className="name">
                @PERSON_NAME
              </a>
            </div>
            <div className="testimonials">
              <p>
                {' " '} Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut e{' " '}
              </p>
            </div>
          </div> */}
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
