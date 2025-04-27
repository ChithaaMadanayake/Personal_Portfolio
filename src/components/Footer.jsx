import React from "react";

const socialLinks = [

  {
    href: "https://www.linkedin.com/in/chithaa-mithmaa-madanayake-a3814a293/",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
    alt: "LinkedIn",
  },
  {
    href: "https://tryhackme.com/p/here..cta",
    img: "https://assets.tryhackme.com/img/favicon.png",
    alt: "TryHackMe",
  },
  {
    href: "https://github.com/ChithaaMadanayake",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    alt: "GitHub",
  },
  {
    href: "https://www.instagram.com/_here_cta___/#",
    img: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png",
    alt: "Instagram",
  },
  {
    href: "https://web.facebook.com/people/Chithaa-Madanayake/pfbid02WfwMa4CAuwCW2mC3boYX13n5n3qU4srH2TcGB9qCA2Ziqtax6JKDojiHWYQyj4BWl/?mibextid=LQQJ4d",
    img: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
    alt: "Facebook",
  },
  {
    href: "https://www.youtube.com/@its_chiko",
    img: "https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg",
    alt: "YouTube",
  },
];

const Footer = () => {
  return (
    <footer className="w-full py-4 bg-transparent text-white flex items-center justify-between px-8 shadow-md shadow-black/70">
      
      {/* Center Text */}
      <div className="flex-1 text-center text-sm md:text-base"  style={{ fontFamily:'Bahnschrift'  }}>
      &copy; 2025 Chithaa Madanayake. All rights reserved.
      </div>

      {/* Social Icons on Right */}
      <div className="flex gap-5">
        {socialLinks.map((link) => (
          <a
            key={link.alt}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <img
              src={link.img}
              alt={link.alt}
              width={28}
              height={28}
              className="filter grayscale group-hover:grayscale-0 transition-all duration-300"
            />
          </a>
        ))}
      </div>

    </footer>
  );
};

export default Footer;
