import React from "react";
import socialLogo from "../../assets/Icons/Group 9969.png";
import { Line } from "recharts";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-32 bg-black">
      <section className="container py-32">
        <div className="grid lg:grid-cols-4 md:grid-cols-3  gap-10 md:gap-16 lg:gap-32">
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
                <Link>About Us</Link>
              </li>
              <li>
                <Link>Work</Link>
              </li>
              <li>
                <Link>Latest News</Link>
              </li>
              <li>
                <Link>Careers</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-5">
            <h2 className="text-white font-semibold text-3xl">Product</h2>
            <ul className="text-gray-400 font-medium space-y-4">
              <li>
                <Link>Prototype</Link>
              </li>
              <li>
                <Link>Plans & Pricing</Link>
              </li>
              <li>
                <Link>Customers</Link>
              </li>
              <li>
                <Link>Integrations</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-5">
            <h2 className="text-white font-semibold text-3xl">Support</h2>
            <ul className="text-gray-400 font-medium space-y-4">
              <li>
                <Link>Help Desk</Link>
              </li>
              <li>
                <Link>Sales</Link>
              </li>
              <li>
                <Link>Become a Partner</Link>
              </li>
              <li>
                <Link>Developers</Link>
              </li>
            </ul>
          </div>

        </div>
      </section>
    </footer>
  );
};

export default Footer;
