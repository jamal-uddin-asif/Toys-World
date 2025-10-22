import React from "react";
import Container from "./Container";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <div className="bg-linear-to-b from-gray-700 to-black text-white mt-5">
      <Container>
        <div className="md:flex px-4 lg:px-0 space-y-4 justify-between py-7">
          {/* sectinon 1  */}
          <div className="space-y-3">
            <h3 className="text-2xl "> Others Address</h3>
            <ul>
              <li>Feni</li>
              <li>Cumilla</li>
              <li>Borishal</li>
              <li>Mirpur</li>
              <li>Chattagram</li>
              <li>Shajek</li>
            </ul>
          </div>

            {/* section 2  */}
          <div>
                <h3 className="text-2xl mb-3">Useful Links</h3>
                <p>Home</p>
                <p>Profile</p>
                <p>View More</p>
          </div>

            {/* section 3 */}
          <div>
                <h3>Follow Us On</h3>
                <div className="flex space-x-3 mt-2">
                    <Facebook />
                    <Instagram></Instagram>
                    <Twitter></Twitter>

                </div>
                    
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
