import * as React from 'react';
import { Body, H1, H2, H3 } from './typography.component.style';
import { Col, Grid, Row } from '@app/components/obj.grid';
import { storiesOf } from '@storybook/react';

storiesOf('Atoms', module)
  .add('Typography', () => (
  <Grid fluid={true} bgColor={true}>
    <Row mb={true}>
      <Col xs={12}>
        <H1>This is a H1</H1>
      </Col>
    </Row>
    <Row mb={true}>
      <Col xs={12}>
        <H2>This is a H2</H2>
      </Col>
    </Row>
    <Row mb={true}>
      <Col xs={12}>
        <H3>This is a H3</H3>
      </Col>
    </Row>
    <Row mb={true}>
      <Col xs={12}>
        <Body>This is a Body, This is a Body, This is a Body, This is a Body, This is a Body</Body>
      </Col>
    </Row>
  </Grid>
));
