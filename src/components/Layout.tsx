import { Breadcrumb, Container } from 'react-bootstrap';

type LayoutProps = {
  children: React.ReactChild | React.ReactChild[];
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <header className="pt-2" style={{ height: '10dvh' }}>
        <Container>
          <h2 className="text-center">1Warehouse</h2>
          <Breadcrumb>
            <Breadcrumb.Item>Company</Breadcrumb.Item>
            <Breadcrumb.Item active>User</Breadcrumb.Item>
          </Breadcrumb>
        </Container>
      </header>
      <main style={{ height: '90dvh' }} className="d-flex flex-column">
        {children}
      </main>
    </>
    // <div className="container">
    //   <div className="row">
    //     <div className="col-12 min-vh-100 align-items-center">
    //       <header className="text-center">header</header>
    //       <main>main</main>
    //     </div>
    //   </div>
    // </div>
  );
};
