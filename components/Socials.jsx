import Link from "next/link";
import { FaGithub, FaLinkedin, FaYoutube, FaTwitter} from "react-icons/fa";

const socials = [
  {
    icons: <FaGithub />,
    path: 'https://github.com/Madusanka-max'
  },
  {
    icons: <FaLinkedin />,
    path: 'https://www.linkedin.com/in/Isuru-Madusanka-Rodrigo/'
  },
  {
    icons: <FaYoutube />,
    path: 'https://www.youtube.com/user/yourusername'
  },
  {
    icons: <FaTwitter />,
    path: 'https://twitter.com/IsuruMadu1023'
  },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link href={item.path} key={index} className={iconStyles}>
          {item.icons}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
