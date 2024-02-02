import { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import clsx from 'clsx';
import { ArrowLeft } from 'react-bootstrap-icons';

import Html5QrcodePlugin from 'src/components/HTMLBarCodeScanner';

import styles from './scanner.module.scss';

const ScannerPage = () => {
  const [barCode, setBarCode] = useState('');
  const navigate = useNavigate();

  const onNewScanResult = (decodedText: string) => {
    setBarCode(decodedText);
  };

  return (
    <div className="dvh-100">
      <Container>
        <header className="d-flex justify-content-center align-items-center pt-2 mb-4 position-relative">
          <div className="position-absolute start-0">
            <Button
              variant="outline-dark"
              className="back-btn text-start"
              onClick={() => navigate(-1)}
            >
              <ArrowLeft size={26} title="Back" />
            </Button>
          </div>
          <h2 className="text-center m-0">Barcode Scanning</h2>
        </header>
      </Container>
      <main className="d-flex flex-column" style={{ height: 'calc(100dvh - 60px)' }}>
        <Container>
          <div className="d-flex justify-content-center pb-2">
            <Form.Control
              placeholder="Type barcode for manual entry"
              aria-label="barcode"
              aria-describedby="barcode"
              value={barCode}
              onChange={(event) => setBarCode(event.target.value)}
              type="text"
              className={clsx(styles.centredInputPlaceholder, 'text-center')}
            />
          </div>
        </Container>
        <div>
          <Html5QrcodePlugin
            fps={10}
            qrbox={250}
            disableFlip={false}
            qrCodeSuccessCallback={onNewScanResult}
          />
        </div>
      </main>
    </div>
  );
};

export default ScannerPage;
