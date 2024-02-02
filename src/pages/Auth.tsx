import clsx from 'clsx';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Layout } from 'src/components/Layout';

import styles from './auth.module.scss';

const AuthPage = () => {
  return (
    <Layout>
      <div className="d-flex flex-column flex-grow-1 justify-content-between">
        <Container className="">
          <p className="text-center fs-22">Enter you 4-digit pincode</p>
          <Form.Control placeholder="Pincode" aria-label="Pincode" />
        </Container>
        <div className="">
          <Row className="g-0 text-center">
            <Col className={clsx(styles.key)}>
              <Button type="button">1</Button>
            </Col>
            <Col className={clsx(styles.key)}>
              <Button type="button">2</Button>
            </Col>
            <Col className={clsx(styles.key)}>
              <Button type="button">3</Button>
            </Col>
          </Row>
          <Row className="g-0 text-center">
            <Col className={clsx(styles.key)}>
              <Button type="button">1</Button>
            </Col>
            <Col className={clsx(styles.key)}>
              <Button type="button">2</Button>
            </Col>
            <Col className={clsx(styles.key)}>
              <Button type="button">3</Button>
            </Col>
          </Row>
          <Row className="g-0 text-center">
            <Col className={clsx(styles.key)}>
              <Button type="button">1</Button>
            </Col>
            <Col className={clsx(styles.key)}>
              <Button type="button">2</Button>
            </Col>
            <Col className={clsx(styles.key)}>
              <Button type="button">3</Button>
            </Col>
          </Row>
          <Row className="g-0 text-center">
            <Col className={clsx(styles.key)}>
              <Button type="button">1</Button>
            </Col>
            <Col className={clsx(styles.key)}>
              <Button type="button">2</Button>
            </Col>
            <Col className={clsx(styles.key)}>
              <Button type="button">3</Button>
            </Col>
          </Row>
          {/* <div className="row g-0 text-center flex-grow-1">
            <div className="col-4">
              <Button type="button" className={styles.key}>
                4
              </Button>
            </div>
            <div className="col-4">
              <Button type="button" className={styles.key}>
                5
              </Button>
            </div>
            <div className="col-4">
              <Button type="button" className={styles.key}>
                6
              </Button>
            </div>
          </div>
          <div className="row g-0 text-center flex-grow-1">
            <div className="col-4">
              <Button type="button">1</Button>
            </div>
            <div className="col-4">
              <Button type="button">1</Button>
            </div>
            <div className="col-4">
              <Button type="button">1</Button>
            </div>
          </div> */}
        </div>
        {/* <div className="keyboard d-flex flex-wrap text-center">
          <div className={clsx(styles.key)}>1</div>
          <div className={clsx(styles.key)}>2</div>
          <div className={clsx(styles.key)}>3</div>
          <div className={clsx(styles.key)}>4</div>
          <div className={clsx(styles.key)}>5</div>
          <div className={clsx(styles.key)}>6</div>
          <div className={clsx(styles.key)}>7</div>
          <div className={clsx(styles.key)}>8</div>
          <div className={clsx(styles.key)}>9</div>
          <div className={clsx(styles.key)}></div>
          <div className={clsx(styles.key)}>0</div>
          <div className={clsx(styles.key)}>-</div>
        </div> */}
      </div>
    </Layout>
  );
};

export default AuthPage;
