import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoYoutube,
} from "react-icons/io5";

const Social = ({ source, className }) => {
  const { facebook, instagram, youtube, linkedin } = source;
  return (
    <ul className={className}>
      {facebook && (
        <li className="inline-block">
          <a
            aria-label="facebook"
            href={facebook}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <IoLogoFacebook />
          </a>
        </li>
      )}
      {instagram && (
        <li className="inline-block">
          <a
            aria-label="instagram"
            href={instagram}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <IoLogoInstagram />
          </a>
        </li>
      )}
      {youtube && (
        <li className="inline-block">
          <a
            aria-label="youtube"
            href={youtube}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <IoLogoYoutube />
          </a>
        </li>
      )}
      {linkedin && (
        <li className="inline-block">
          <a
            aria-label="linkedin"
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <IoLogoLinkedin />
          </a>
        </li>
      )}
    </ul>
  );
};

export default Social;
