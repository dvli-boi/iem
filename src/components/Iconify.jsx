import PropTypes from "prop-types";
import { forwardRef } from "react";
import { Icon } from "@iconify/react";

// ----------------------------------------------------------------------

const Iconify = forwardRef(({ icon, width = 22, style }, ref) => (
  <Icon ref={ref} icon={icon} style={{ width, height: width, ...style }} />
));

export default Iconify;
