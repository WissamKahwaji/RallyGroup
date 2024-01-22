import React from "react";
import { useSelector } from "react-redux";
import Container from "../UI/Container";
import secondFont from "../../SharedCSS/secondFont.module.css";
import thirdFont from "../../SharedCSS/thirdFont.module.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlineWhatsApp,
  AiOutlineYoutube,
} from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { BsWhatsapp } from "react-icons/bs";
import { FOOTER_NAV_LINKS, MAP_INDICATOR_ICON } from "../../constant/navLinks";
import { useTranslation } from "react-i18next";
import useSelectDataDependOnLang from "../../Hooks/useSelectDataDependOnLang";

const Footer = () => {
  const { handleSelectDataDependOnLang, t } = useSelectDataDependOnLang();

  const contactData = useSelector((state) => state.contactSlice);
  const colorsData = useSelector((state) => state.colorsSlice);
  const homeData = useSelector((state) => state.homeSlice);
  const footerStyle = {
    borderTop: `1px solid ${colorsData.data.mainColor}`,
  };
  const socialMediaStyle = {
    color: "#EAD665",
  };
  console.log(contactData);
  return (
    <Container
      style={footerStyle}
      className={`mt-10 flex w-full flex-col py-4 md:flex-row md:justify-between`}
    >
      <div className={`flex flex-row items-center md:w-1/2`}>
        <ul
          className={`flex w-full flex-col flex-wrap items-start justify-between md:w-auto md:justify-center`}
        >
          {FOOTER_NAV_LINKS.map((nav, index) => (
            <li
              key={index}
              className={`py-1 text-lg underline md:py-2 md:text-2xl`}
            >
              <Link to={nav.href}>{t(nav.title)}</Link>
            </li>
          ))}
        </ul>
        <div
          className={`mt-4 flex flex-1 flex-col-reverse items-center justify-center md:mt-0`}
        >
          <ul
            style={socialMediaStyle}
            className={`my-2 hidden items-center justify-between text-5xl  md:flex`}
          >
            <li className={`mx-2`}>
              <a
                href={contactData.data.content.instagram}
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineInstagram className={`text-5xl`} />
              </a>
            </li>{" "}
            <li className={`mx-2`}>
              <a
                href={contactData.data.content.linkedIn}
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineLinkedin className={`text-5xl`} />
              </a>
            </li>
            <li className={`mx-2`}>
              <a
                href={`https://api.whatsapp.com/send?phone=971${contactData.data.content.whatsApp}`}
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineWhatsApp className={`text-5xl`} />
              </a>
            </li>
          </ul>
          <div className={`mt-2 flex flex-col items-center justify-center`}>
            <div>
              <p className={`my-1`}>{contactData.data.content.email}</p>
            </div>
            <div className={` my-1 mt-2 flex flex-col`}>
              <div className={`my-1 flex flex-col items-center`}>
                <h5>
                  {handleSelectDataDependOnLang(
                    contactData.data.content,
                    "titleOne",
                  )}
                </h5>
                <span>{contactData.data.content.emailOne}</span>
                <p
                  dir="ltr"
                  style={{
                    whiteSpace: "nowrap",
                    fontFeatureSettings: '"tnum"',
                  }}
                >
                  +971{" "}
                  {contactData.data.content.mobileOne.replace(
                    /(\d{3})(\d{3})(\d{3})/,
                    "$1 $2 $3",
                  )}
                </p>
              </div>
              <div className={`my-1 flex flex-col items-center`}>
                <h5>
                  {handleSelectDataDependOnLang(
                    contactData.data.content,
                    "titleTwo",
                  )}
                </h5>
                <span>{contactData.data.content.emailTwo}</span>
                <p
                  dir="ltr"
                  style={{
                    whiteSpace: "nowrap",
                    fontFeatureSettings: '"tnum"',
                  }}
                >
                  +971{" "}
                  {contactData.data.content.mobileTwo.replace(
                    /(\d{3})(\d{3})(\d{3})/,
                    "$1 $2 $3",
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`mt-5 md:hidden`}>
        <ul
          style={socialMediaStyle}
          className={`mx-20 my-2 flex items-center justify-evenly text-5xl`}
        >
          <li className={`mx-2`}>
            <a
              href={contactData.data.content.instagram}
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineInstagram className={`text-5xl`} />
            </a>
          </li>{" "}
          <li className={`mx-2`}>
            <a
              href={contactData.data.content.linkedIn}
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineLinkedin className={`text-5xl`} />
            </a>
          </li>
          <li className={`mx-2`}>
            <a
              href={`https://api.whatsapp.com/send?phone=971${contactData.data.content.whatsApp}`}
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineWhatsApp className={`text-5xl`} />
            </a>
          </li>
        </ul>
      </div>
      <div
        className={`mt-10 flex items-center justify-center md:mt-0 md:w-1/2 md:flex-col`}
      >
        <img
          src={homeData.data.logoImg}
          alt={homeData.data.brandName}
          className={`w-36 md:w-[30rem]`}
        />
        <div className={``}>
          <h3
            className={`mb-4 text-center text-lg font-semibold  md:text-5xl ${secondFont["second-font"]}`}
          >
            {homeData.data.brandName}
          </h3>
          <p
            className={`text-xs font-medium md:text-lg ${thirdFont["third-font"]} text-center`}
          >
            {homeData.data.brandDesc}
          </p>
        </div>
      </div>
      <div className=" m-auto w-1/2">
        <MapContainer
          key="pathname"
          className="aspect-video h-full w-full"
          center={[Number(25.18527714295704), Number(55.26207377231094)]}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker
            icon={MAP_INDICATOR_ICON}
            position={[Number(25.18527714295704), Number(55.26207377231094)]}
          >
            <Popup>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://linkprotect.cudasvc.com/url?a=https%3a%2f%2fmaps.app.goo.gl%2fKyQMZ3uvtuV3eiWe7&c=E,1,35zYXQzWgfkE6XOU5OAkISfOCFHp3q2zfWMtJ2YyH-2Ei6dIxkclo1A8T0i38VYePGo7vSf2UeGu_KP_iXY_SeRQjAF32Yiwym9tejgZ_SE,&typo=1"
              >
                {"Rally Group"}
              </a>
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </Container>
  );
};

export default Footer;
