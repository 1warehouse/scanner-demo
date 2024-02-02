import clsx from 'clsx';
import { Container } from 'react-bootstrap';

import styles from './ScreenRestrictions.module.scss';

const ScreenRestrictions = () => {
  return (
    <Container className="d-flex">
      <div className="d-flex flex-column justify-content-center align-items-center flex-grow-1 vh-100">
        <div className={clsx(styles.screenRestrictions, 'p-5 text-center')}>
          <h2 className="pb-2">Warning</h2>
          <h5>You have to use mobile device</h5>
        </div>
      </div>
    </Container>
  );
};

export default ScreenRestrictions;
