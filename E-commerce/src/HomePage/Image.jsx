import PropTypes from "prop-types";
import Image from "react-bootstrap/Image";

const Img = (props) => {
  console.log(props.url);
  return <Image src={props.url} rounded alt={props.alt} fluid></Image>;
};
Img.propTypes = {
  url: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

export default Img;
