import React from "react";
import socialLogo from "../../assets/Icons/Group 9969.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-32 bg-black">
      <section className="container py-16 md:py-32">
        <div className="grid lg:grid-cols-4 md:grid-cols-3 border-b border-b-gray-600 pb-12  gap-10 md:gap-16 lg:gap-32">
          <div className="space-y-5 lg:col-span-1 md:col-span-3">
            <h2 className="text-white font-bold text-4xl">Job Cafe</h2>
            <p className="text-gray-400 text-sm">
              There are many variations of passages of Lorem Ipsum , but the
              majority have suffered alteration in some form.
            </p>
            <img src={socialLogo} alt="" />
          </div>
          <div className="space-y-5">
            <h2 className="text-white font-semibold text-3xl">Company</h2>
            <ul className="text-gray-400 font-medium space-y-3">
              <li>
                <Link to="#">About Us</Link>
              </li>
              <li>
                <Link to="#">Work</Link>
              </li>
              <li>
                <Link to="#">Latest News</Link>
              </li>
              <li>
                <Link to="#">Careers</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-5">
            <h2 className="text-white font-semibold text-3xl">Product</h2>
            <ul className="text-gray-400 font-medium space-y-4">
              <li>
                <Link to="#">Prototype</Link>
              </li>
              <li>
                <Link to="#">Plans & Pricing</Link>
              </li>
              <li>
                <Link to="#">Customers</Link>
              </li>
              <li>
                <Link to="#">Integrations</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-5">
            <h2 className="text-white font-semibold text-3xl">Support</h2>
            <ul className="text-gray-400 font-medium space-y-4">
              <li>
                <Link to="#">Help Desk</Link>
              </li>
              <li>
                <Link to="#">Sales</Link>
              </li>
              <li>
                <Link to="#">Become a Partner</Link>
              </li>
              <li>
                <Link to="#">Developers</Link>
              </li>
            </ul>
          </div>

        </div>
        <div className="pt-12 text-sm md:text-base text-gray-500 flex flex-col md:flex-row justify-between items-center">
            <p>@2023 <strong>Job Cafe</strong>. All Rights Reserved</p>
            <p>Powered by <strong>Job Cafe</strong></p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
