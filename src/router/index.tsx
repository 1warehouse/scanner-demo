import { Route, Routes } from 'react-router-dom';
import HtmlScannerPage from 'src/pages/htmlScanner';
import RootPage from 'src/pages/Root';
import ScannerPage from 'src/pages/Scanner';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<RootPage />} />
      <Route path="/scanner1" element={<ScannerPage />} />
      <Route path="/scanner2" element={<HtmlScannerPage />} />
    </Routes>
  );
};

export default Router;
