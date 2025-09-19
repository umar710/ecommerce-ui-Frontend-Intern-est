import React from "react";
// Import images from assets
import imgIcon from "../assets/images/img_icon.svg";
import imgFacebook from "../assets/images/img_facebook.svg";
import imgTwitter from "../assets/images/img_twitter.svg";
import imgWesternUnion from "../assets/images/img_western_union.svg";
import imgShape327 from "../assets/images/img_shape_327.svg";
import imgShape329 from "../assets/images/img_shape_329.svg";
import imgShape329Orange from "../assets/images/img_shape_329_orange_a200.svg";
import imgPaypal from "../assets/images/img_paypal.svg";
import imgShape327Png from "../assets/images/img_shape_327_23x38.png";
import imgShape328Indigo from "../assets/images/img_shape_328_indigo_600.svg";
import imgShape328 from "../assets/images/img_shape_328.svg";
import imgShape327Visa from "../assets/images/img_shape_327_23x38.png";

const Footer = () => {
  return (
    <footer className="w-full bg-[#bcddfd] mt-5">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[56px] py-12 sm:py-16 lg:py-[80px]">
        <div className="flex flex-col gap-8 sm:gap-12 lg:gap-[56px]">
          {/* Top Section */}
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-0">
            {/* Left Column - Brand & Description */}
            <div className="flex flex-col gap-6 lg:gap-[10px] w-full lg:w-[68%]">
              {/* Brand Row */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 w-full lg:w-[84%]">
                {/* Logo & Brand */}
                <div className="flex items-center gap-[6px]">
                  <img
                    src="/images/img_icon.svg"
                    alt="E-Comm Icon"
                    className="w-[38px] h-[34px]"
                  />
                  <h2
                    className="text-lg font-bold"
                    style={{
                      fontFamily: "Poppins",
                      fontWeight: "700",
                      lineHeight: "27px",
                      color: "#22262a",
                    }}
                  >
                    E-Comm
                  </h2>
                </div>

                {/* Follow Us */}
                <h3
                  className="text-lg font-medium"
                  style={{
                    fontFamily: "Poppins",
                    fontWeight: "500",
                    lineHeight: "27px",
                    color: "#22262a",
                  }}
                >
                  Follow Us
                </h3>
              </div>

              {/* Description Row */}
              <div className="flex flex-col lg:flex-row justify-between items-start gap-6 lg:gap-0 w-full">
                {/* Company Description */}
                <p
                  className="text-xs leading-tight w-full lg:w-[30%]"
                  style={{
                    fontFamily: "Proxima Nova",
                    fontWeight: "400",
                    lineHeight: "14px",
                    color: "#22262a",
                  }}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever.Since the 1500s, when an unknown
                  printer.
                </p>

                {/* Social Media Section */}
                <div className="flex flex-col gap-4 lg:gap-[18px] w-full lg:w-[28%]">
                  <p
                    className="text-xs leading-tight"
                    style={{
                      fontFamily: "Proxima Nova",
                      fontWeight: "400",
                      lineHeight: "14px",
                      color: "#22262a",
                    }}
                  >
                    Since the 1500s, when an unknown printer took a galley of
                    type and scrambled.
                  </p>

                  {/* Social Icons */}
                  <div className="flex items-center gap-6 lg:gap-[47px]">
                    <img
                      src="/images/img_facebook.svg"
                      alt="Facebook"
                      className="w-[6px] h-[12px] hover:opacity-80 cursor-pointer transition-opacity"
                    />
                    <img
                      src="/images/img_twitter.svg"
                      alt="Twitter"
                      className="w-[14px] h-[10px] hover:opacity-80 cursor-pointer transition-opacity"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact */}
            <div className="flex flex-col gap-3 lg:gap-[12px] w-full lg:w-[12%]">
              <h3
                className="text-lg font-medium"
                style={{
                  fontFamily: "Poppins",
                  fontWeight: "500",
                  lineHeight: "27px",
                  color: "#22262a",
                }}
              >
                Contact Us
              </h3>
              <address
                className="text-sm not-italic"
                style={{
                  fontFamily: "Poppins",
                  fontWeight: "400",
                  lineHeight: "21px",
                  color: "#22262a",
                }}
              >
                E-Comm , 4578 Marmora Road, Glasgow D04 89GR
              </address>
            </div>
          </div>

          {/* Bottom Section - Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:justify-between w-full">
            {/* Information */}
            <div className="flex flex-col gap-2 lg:gap-[10px]">
              <h4
                className="text-lg"
                style={{
                  fontFamily: "Poppins",
                  fontWeight: "400",
                  lineHeight: "27px",
                  color: "#22262a",
                }}
              >
                Infomation
              </h4>
              <ul className="flex flex-col gap-1">
                <li>
                  <a
                    href="#"
                    className="text-sm hover:text-blue-600 transition-colors"
                    style={{
                      fontFamily: "Poppins",
                      fontWeight: "400",
                      lineHeight: "21px",
                      color: "#262626",
                    }}
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm hover:text-blue-600 transition-colors"
                    style={{
                      fontFamily: "Poppins",
                      fontWeight: "400",
                      lineHeight: "21px",
                      color: "#262626",
                    }}
                  >
                    Infomation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm hover:text-blue-600 transition-colors"
                    style={{
                      fontFamily: "Poppins",
                      fontWeight: "400",
                      lineHeight: "21px",
                      color: "#262626",
                    }}
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm hover:text-blue-600 transition-colors"
                    style={{
                      fontFamily: "Poppins",
                      fontWeight: "400",
                      lineHeight: "21px",
                      color: "#262626",
                    }}
                  >
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>

            {/* Service */}
            <div className="flex flex-col gap-2 lg:gap-[10px]">
              <h4
                className="text-lg"
                style={{
                  fontFamily: "Poppins",
                  fontWeight: "400",
                  lineHeight: "27px",
                  color: "#22262a",
                }}
              >
                Service
              </h4>
              <ul className="flex flex-col gap-1">
                <li>
                  <a
                    href="#"
                    className="text-sm hover:text-blue-600 transition-colors"
                    style={{
                      fontFamily: "Poppins",
                      fontWeight: "400",
                      lineHeight: "21px",
                      color: "#262626",
                    }}
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm hover:text-blue-600 transition-colors"
                    style={{
                      fontFamily: "Poppins",
                      fontWeight: "400",
                      lineHeight: "21px",
                      color: "#262626",
                    }}
                  >
                    Infomation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm hover:text-blue-600 transition-colors"
                    style={{
                      fontFamily: "Poppins",
                      fontWeight: "400",
                      lineHeight: "21px",
                      color: "#262626",
                    }}
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm hover:text-blue-600 transition-colors"
                    style={{
                      fontFamily: "Poppins",
                      fontWeight: "400",
                      lineHeight: "21px",
                      color: "#262626",
                    }}
                  >
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>

            {/* My Account */}
            <div className="flex flex-col gap-2 lg:gap-[10px]">
              <h4
                className="text-lg"
                style={{
                  fontFamily: "Poppins",
                  fontWeight: "400",
                  lineHeight: "27px",
                  color: "#22262a",
                }}
              >
                My Account
              </h4>
              <ul className="flex flex-col gap-1">
                <li>
                  <a
                    href="#"
                    className="text-sm hover:text-blue-600 transition-colors"
                    style={{
                      fontFamily: "Poppins",
                      fontWeight: "400",
                      lineHeight: "21px",
                      color: "#262626",
                    }}
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm hover:text-blue-600 transition-colors"
                    style={{
                      fontFamily: "Poppins",
                      fontWeight: "400",
                      lineHeight: "21px",
                      color: "#262626",
                    }}
                  >
                    Infomation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm hover:text-blue-600 transition-colors"
                    style={{
                      fontFamily: "Poppins",
                      fontWeight: "400",
                      lineHeight: "21px",
                      color: "#262626",
                    }}
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm hover:text-blue-600 transition-colors"
                    style={{
                      fontFamily: "Poppins",
                      fontWeight: "400",
                      lineHeight: "21px",
                      color: "#262626",
                    }}
                  >
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>

            {/* Our Offers */}
            <div className="flex flex-col gap-2 lg:gap-[10px]">
              <h4
                className="text-lg font-medium"
                style={{
                  fontFamily: "Poppins",
                  fontWeight: "500",
                  lineHeight: "27px",
                  color: "#22262a",
                }}
              >
                Our Offers
              </h4>
              <ul className="flex flex-col gap-1">
                <li>
                  <a
                    href="#"
                    className="text-sm hover:text-blue-600 transition-colors"
                    style={{
                      fontFamily: "Poppins",
                      fontWeight: "400",
                      lineHeight: "21px",
                      color: "#262626",
                    }}
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm hover:text-blue-600 transition-colors"
                    style={{
                      fontFamily: "Poppins",
                      fontWeight: "400",
                      lineHeight: "21px",
                      color: "#262626",
                    }}
                  >
                    Infomation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm hover:text-blue-600 transition-colors"
                    style={{
                      fontFamily: "Poppins",
                      fontWeight: "400",
                      lineHeight: "21px",
                      color: "#262626",
                    }}
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm hover:text-blue-600 transition-colors"
                    style={{
                      fontFamily: "Poppins",
                      fontWeight: "400",
                      lineHeight: "21px",
                      color: "#262626",
                    }}
                  >
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="flex flex-col gap-6 lg:gap-[28px] items-center w-full ml-0 lg:ml-[14px]">
            {/* Divider Line */}
            <div className="w-full h-[1px] bg-[#f6f7f8]"></div>

            {/* Copyright & Payment Methods */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 w-full pr-0 lg:pr-[24px]">
              {/* Copyright */}
              <p
                className="text-sm text-center sm:text-left"
                style={{
                  fontFamily: "Proxima Nova",
                  fontWeight: "400",
                  lineHeight: "18px",
                  color: "#c1c8ce",
                }}
              >
                © 2018 Ecommerce theme by www.bisenbaev.com
              </p>

              {/* Payment Methods */}
              <div className="flex items-center gap-3 lg:gap-[18px]">
                {/* Western Union */}
                <img
                  src={imgWesternUnion}
                  alt="Western Union"
                  className="w-[38px] h-[22px]"
                />

                {/* MasterCard */}
                <div className="relative w-[38px] h-[22px]">
                  <img
                    src={imgShape327}
                    alt="MasterCard Background"
                    className="absolute inset-0 w-full h-full"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex items-center">
                      <img
                        src={imgShape329}
                        alt="MasterCard Circle 1"
                        className="w-[16px] h-[16px]"
                      />
                      <img
                        src={imgShape329Orange}
                        alt="MasterCard Circle 2"
                        className="w-[16px] h-[16px] -ml-1"
                      />
                    </div>
                  </div>
                  <span
                    className="absolute bottom-1 left-1/2 transform -translate-x-1/2 text-white text-[6px] leading-[6px]"
                    style={{ fontFamily: "Arial" }}
                  >
                    MasterCard
                  </span>
                </div>

                {/* PayPal */}
                <img
                  src={imgPaypal}
                  alt="PayPal"
                  className="w-[38px] h-[22px]"
                />

                {/* Visa */}
                <div className="relative w-[38px] h-[22px]">
                  <img
                    src={imgShape327Visa}
                    alt="Visa Background"
                    className="absolute inset-0 w-full h-full"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src={imgShape328Indigo}
                      alt="Visa Background Pattern"
                      className="w-[26px] h-[8px]"
                    />
                    <img
                      src={imgShape328}
                      alt="Visa Logo"
                      className="absolute w-[4px] h-[4px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
