import React from "react";
import IconGithub from '../imgs/icons/github.svg';
import IconLinkedin from '../imgs/icons/linkedin.svg';
import IconTwitter from '../imgs/icons/twitter.svg';


const mediaSocials = [
  {
    icon:<IconLinkedin />,
    link:"https://www.linkedin.com/in/ariel-fernando-gerónimo-gil-40292517b/",
  },
  {
    icon:<IconGithub />,
    link: "https://www.github.com/ferna2g",
  },
  {
    icon:<IconTwitter/>,
    link:"https://www.twitter.com/ferna_gl",
  }
]


const Socials = (props) => {

  return (
    <div className="social">
      {mediaSocials.map((media, index) => (
        <a
          key={index}
          href={media.link}
          target="_blank"
          rel="noreferrer noopener"
        >
          {media.icon}
        </a>
      ))}
    </div>
  )
}

export default Socials;
