import { useCallback, useEffect } from 'react';
import { Html5Qrcode } from 'html5-qrcode';

type HTMLBarCodeScannerProps = {
  fps: number;
  qrbox: { width: number; height: number } | undefined;
  qrCodeSuccessCallback: (decodedText: string) => void;
};

const HTMLBarCodeScanner = ({ fps, qrbox, qrCodeSuccessCallback }: HTMLBarCodeScannerProps) => {
  let html5QrCode: Html5Qrcode | null = null;
  let context: AudioContext;
  let oscillator: OscillatorNode;
  let isScannerStarted = false;

  const playSound = useCallback((frequency: number, type: OscillatorType) => {
    if (!context) {
      context = new AudioContext();
      oscillator = context.createOscillator();
      oscillator.connect(context.destination);
    }

    oscillator.frequency.setTargetAtTime(frequency, context.currentTime, 0);
    oscillator.type = type;

    if (!isScannerStarted) {
      oscillator.start(0);
      isScannerStarted = true;
    } else {
      context.resume();
    }
  }, []);

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
        // Frequency might be up to 15000
        playSound(950, 'triangle');

        setTimeout(() => {
          context.suspend();
        }, 200);
      },
      (error) => console.log('error', error),
    );
  }, []);

  return <div id="barcode-reader" />;
};

export default HTMLBarCodeScanner;
