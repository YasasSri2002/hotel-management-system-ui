import React from 'react';
import { IconType } from 'react-icons';
import * as FaIcons from 'react-icons/fa';
import * as FcIcons from 'react-icons/fc';
import * as GiIcons from "react-icons/gi";
import * as MdIcons from 'react-icons/md';
import * as TbIcons from "react-icons/tb";
import * as HiIcons from "react-icons/hi";
import * as CiIcons from "react-icons/ci";
import * as FiIcons from "react-icons/fi"
import * as IoIcons  from "react-icons/io5";
import * as PiIcons from "react-icons/pi";

type IconLibrary = {
  [key: string]: IconType;
};

const ICON_LIBRARY: IconLibrary = {
  ...FaIcons,
  ...MdIcons,
  ...FcIcons,
  ...GiIcons,
  ...TbIcons,
  ...HiIcons,
  ...CiIcons,
  ...FiIcons,
  ...IoIcons,
  ...PiIcons

};

interface DynamicIconProps extends React.SVGAttributes<SVGElement> {
  name: string;
}

const DynamicIcon: React.FC<DynamicIconProps> = ({ name, ...props }) => {
  const IconComponent = ICON_LIBRARY[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  return <IconComponent {...props} />;
};

export default DynamicIcon;