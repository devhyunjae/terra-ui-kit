import React from 'react';
import { Content } from '../Content';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { Layout } from '../Layout';
import { Sider } from '../Sider';

export default {
  title: 'station-ui/Layout',
};

export const Basic = () => {
  return (
    <>
      <Layout>
        <Header
          style={{
            backgroundColor: 'pink',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          this is header
        </Header>
        <Content
          style={{
            minHeight: 120,
            backgroundColor: 'blue',
          }}
        >
          this is content
        </Content>
        <Footer
          style={{
            backgroundColor: 'pink',
          }}
        >
          this is footer
        </Footer>
      </Layout>
      <div style={{ margin: 30 }} />
      <Layout hasSider>
        <Sider>
          <div
            style={{
              height: '64px',
              borderBottom: '1px solid #f3f3f3',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            Terra Station
          </div>
        </Sider>
        <div style={{ height: 300, overflowY: 'scroll' }}>
          <Layout>
            <Header
              fixed
              style={{
                backgroundColor: 'pink',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              this is fixed header
            </Header>
            <Content
              style={{
                minHeight: 120,
                backgroundColor: 'blue',
              }}
            >
              this is content this is content this is content
              <br />
              this is content this is content this is content
              <br />
              this is content this is content this is content
              <br />
              this is content this is content this is content
              <br />
              this is content this is content this is content
              <br />
              this is content this is content this is content
              <br />
              this is content this is content this is content
              <br />
              this is content this is content this is content
              <br />
              this is content this is content this is content
              <br />
              this is content this is content this is content
              <br />
              this is content this is content this is content
              <br />
              this is content this is content this is content
              <br />
            </Content>
            <Footer
              style={{
                backgroundColor: 'pink',
              }}
            >
              this is footer
            </Footer>
          </Layout>
        </div>
      </Layout>
    </>
  );
};
