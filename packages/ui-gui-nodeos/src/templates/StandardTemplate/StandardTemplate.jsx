import './StandardTemplate.scss';
import React from 'react';
import { Container } from 'reactstrap';

import { Footer, Header } from 'components';

import {
  AppFooter,
  AppHeader
} from '@coreui/react';

const StandardTemplate = ({
  children = undefined,
}) => (
  <div className="StandardTemplate app">
    <AppHeader fixed>
      <Header />
    </AppHeader>
    <div className="app-body">
      <main className="main">
        <Container fluid>
          {children}
        </Container>
      </main>
    </div>
    <AppFooter>
      <Footer/>
    </AppFooter>
  </div>
)

export default StandardTemplate;