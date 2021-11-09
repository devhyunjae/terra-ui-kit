import React from 'react';
import { Card } from '../../cards/Card';
import { Row, Col } from '../Row';

export default {
  title: 'station-ui/Row',
};

export const Basic = () => {
  return (
    <>
      {/* <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }}>
      <div>111</div>
      <div>222</div>
    </div> */}
      <Row gap="10px">
        <Col flex={2} gap="20px">
          <Card style={{ height: 160 }}>card1</Card>
          <Card>card2</Card>
        </Col>
        <Col flex={1} gap="20px">
          <Card style={{ lineHeight: 10 }}>card3</Card>
          <Card style={{ lineHeight: 10 }}>
            asdfsdafsf <br />
            asdfsdafsf <br />
            asdfsdafsf <br />
            asdfsdafsf <br />
            asdfsdafsf <br />
          </Card>
        </Col>
      </Row>
    </>
  );
};
