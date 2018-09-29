import * as React from 'react';
import { H2 } from '@app/components/atm.typography';
import { Button } from '@app/components/atm.button';
import { Col, Grid, Row } from '@app/components/obj.grid';
import { Separator } from '@app/components/obj.box';
import { Icon } from 'react-fa';

export class Home extends React.Component<any, any> {
  render() {
    return (
      <Grid>
        <Separator/>
        <H2>Home</H2>
        <Row>
          <Col xs={12}>
            <Button btnkind='link' to={'/'}><Icon name='home'/> Link to Home</Button>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Button btnkind='link' to={'/farm'}>My Farm </Button>
          </Col>
        </Row>
        <div style={{height: '500px'}}/>
      </Grid>
    );
  }
}
