import { PropsWithChildren } from 'react';
import { isMobile } from 'react-device-detect';
import ScreenRestrictions from 'src/components/ScreenRestrictions';

const CheckDevice = (props: PropsWithChildren) => {
  return isMobile ? <>{props.children}</> : <ScreenRestrictions />;
};

export default CheckDevice;
