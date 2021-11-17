import React, { CSSProperties } from 'react';

interface MenuItem {
  permissionId?: string | string[];
  label: string;
  href?: string;
  onClick?: (event: React.MouseEvent<Element, MouseEvent>) => void;
  icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  submenu?: MenuItem[];
  className?: string;
  style?: CSSProperties;
  activeClassName?: string;
  activeStyle?: CSSProperties;
  disabled?: boolean;
}
export default MenuItem;
