import CopyBtn from "../CopyBtn";
import PropTypes from "prop-types";

function LinksBox({ className, link, slink }) {
  return (
    <div className={"bg-white-0 rounded-xl " + className}>
      <p className="p-4 truncate border-b border-neutral-gray">{link}</p>
      <div className="p-4 truncate text-primary-cyan">
        <p className="pb-4">{slink}</p>
        <CopyBtn />
      </div>
    </div>
  );
}
LinksBox.propTypes = {
  className: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  slink: PropTypes.string.isRequired,
};

export default LinksBox;
