import { useZxing } from 'react-zxing';
import { BarcodeScannerProps } from './barCodeScanner.types';

const BarcodeScanner = ({ width, height, setBarCode }: BarcodeScannerProps) => {
  const { ref } = useZxing({
    onDecodeResult(result) {
      console.log('result', result);

      setBarCode(result.getText());
    },
  });

  return <video ref={ref} width={width} height={height} autoPlay muted playsInline />;
};

export default BarcodeScanner;
