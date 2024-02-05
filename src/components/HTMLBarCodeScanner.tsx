import { useEffect } from 'react';
import { Html5Qrcode } from 'html5-qrcode';

type HTMLBarCodeScannerProps = {
  fps: number;
  qrbox: { width: number; height: number };
  qrCodeSuccessCallback: (decodedText: string) => void;
};

const HTMLBarCodeScanner = ({ fps, qrbox, qrCodeSuccessCallback }: HTMLBarCodeScannerProps) => {
  let html5QrCode: Html5Qrcode | null = null;

  useEffect(() => {
    if (html5QrCode !== null) return;

    html5QrCode = new Html5Qrcode('barcode-reader');

    html5QrCode.start(
      { facingMode: 'environment' },
      {
        fps,
        qrbox,
      },
      (decodedText) => {
        qrCodeSuccessCallback(decodedText);
      },
      (error) => console.log('error', error),
    );
  }, []);

  return <div id="barcode-reader" />;
};

export default HTMLBarCodeScanner;
