import { Facebook, Instagram, Twitter } from "lucide-react";

export const Footer = ()=>{

     return (
    <footer className="w-full bg-white border-t">
      {/* Top */}
      <div className="flex flex-col gap-10 px-4 md:px-8 py-10 ">
        {/* Brand */}
        <div className="flex flex-col gap-4  md:flex-row md:justify-between">
          <span className="text-2xl font-bold">Bandage</span>

          <div className="flex gap-4">
            <Facebook className="w-5 h-5 text-blue-500 cursor-pointer" />
            <Instagram className="w-5 h-5 text-blue-500 cursor-pointer" />
            <Twitter className="w-5 h-5 text-blue-500 cursor-pointer" />
          </div>
        </div>

        {/* Footer middle*/}
        <div className="flex flex-col gap-4 md:flex-row md:justify-between ">
            {/* Company Info */}
            <div className="flex flex-col gap-3">
            <h4 className="font-semibold">Company Info</h4>
            <span className="text-sm text-gray-600">About Us</span>
            <span className="text-sm text-gray-600">Carrier</span>
            <span className="text-sm text-gray-600">We are hiring</span>
            <span className="text-sm text-gray-600">Blog</span>
            </div>

            {/* Legal */}
            <div className="flex flex-col gap-3">
            <h4 className="font-semibold">Legal</h4>
            <span className="text-sm text-gray-600">About Us</span>
            <span className="text-sm text-gray-600">Carrier</span>
            <span className="text-sm text-gray-600">We are hiring</span>
            <span className="text-sm text-gray-600">Blog</span>
            </div>

            {/* Features */}
            <div className="flex flex-col gap-3">
            <h4 className="font-semibold">Features</h4>
            <span className="text-sm text-gray-600">Business Marketing</span>
            <span className="text-sm text-gray-600">User Analytic</span>
            <span className="text-sm text-gray-600">Live Chat</span>
            <span className="text-sm text-gray-600">Unlimited Support</span>
            </div>

            {/* Resources */}
            <div className="flex flex-col gap-3">
            <h4 className="font-semibold">Resources</h4>
            <span className="text-sm text-gray-600">IOS & Android</span>
            <span className="text-sm text-gray-600">Watch a Demo</span>
            <span className="text-sm text-gray-600">Customers</span>
            <span className="text-sm text-gray-600">API</span>
            </div>

            {/* Get In Touch */}
            <div className="flex flex-col gap-4">
            <h4 className="font-semibold">Get In Touch</h4>

            <div className="flex flex-col">
                <div className="flex">
                    <input
                    type="email"
                    placeholder="Your Email"
                    className="flex-1 border h-12 px-3 py-2 text-sm outline-none"
                    />
                    <button className="bg-blue-500 text-white px-4 py-2 text-sm">
                    Subscribe
                    </button>
                </div>
                <span className="text-xs text-gray-500">
                    Lorem ipsum dolor Amit
                </span>
            </div>
          </div>

          
        </div>
      </div>

      {/* Bottom */}
      <div className="bg-gray-100 text-center text-sm text-gray-600 py-4">
        Made With Love By Finland All Right Reserved
      </div>
    </footer>
  );
}