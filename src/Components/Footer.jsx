import React from "react";
import Container from "./Container";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="bg-cyan-950 text-white ">
      <Container>
        <div className="md:flex px-4 lg:px-0 space-y-4 justify-between py-7">
          {/* section 1  */}
          <div className="flex justify-center items-center">
             <img className="w-12" src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/external-toys-black-friday-cyber-monday-flaticons-flat-flat-icons.png" alt="" />
            <Link to={'/'} className="btn hidden md:block btn-ghost text-2xl bg-linear-to-r from-purple-300 to-purple-900 text-transparent bg-clip-text">
              Toys World
            </Link>
          </div>
          {/* sectinon 2 */}
          <div className="space-y-3">
            <h3 className="text-2xl "> Others Address</h3>
            <ul>
              <li className="text-yellow-400">Feni</li>
              <li className="text-yellow-400">Cumilla</li>
              <li className="text-yellow-400">Borishal</li>
              <li className="text-yellow-400">Mirpur</li>
              <li className="text-yellow-400">Chattagram</li>
              <li className="text-yellow-400">Shajek</li>
            </ul>
          </div>

            {/* section 2  */}
          <div>
                <h3 className="text-2xl mb-3">Useful Links</h3>
                <div className="flex flex-col ">
                  
                <Link to={'/'} className="text-yellow-400">Home</Link>
                <Link to={'/toys'} className="text-yellow-400">Toys</Link>
                <Link to={'/discount'} className="text-yellow-400">Discount</Link>
                <Link to={'/about_us'} className="text-yellow-400">About Us</Link>
                <Link to='/contact_us' className="text-yellow-400">Contact Us</Link>
                </div>
          </div>

            {/* section 3 */}
          <div>
                <h3>Follow Us On</h3>
                <div className="flex space-x-3 mt-2">
                  <Link to={'https://www.facebook.com/share/16dg4YGerd/'}>
                    <Facebook />
                  </Link>
                  <Link to={'https://www.instagram.com/asif_zehen76?igsh=MTB0bGoxNzN4M2Y5bA=='}>
                    <Instagram></Instagram>
                  </Link>
                    <Twitter></Twitter>

                </div>
                    
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
