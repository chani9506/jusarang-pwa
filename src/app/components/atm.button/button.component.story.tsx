import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from './button.component';
import { H2 } from '../atm.typography';
import { Col, Grid, Row } from '../obj.grid';
import { boolean, select, text } from '@storybook/addon-knobs';

const buttonType = {
  primary: 'primary',
  secondary: 'secondary',
  callToAction: 'callToAction',
  link: 'link',
  alert: 'alert',
};

storiesOf('Atoms', module)
  .add('Buttons', () => (
    <Grid fluid={true} bgColor={true}>
      <H2>Button</H2>
      <Row mb={true}>
        <Col xs={12}>
          <Button
            onClick={handleClick}
            btnkind={select('Type', buttonType, 'primary')}
            outlined={boolean('outlined', false)}
          >
            {text('Text', 'Button label')}
          </Button>
        </Col>
      </Row>
      <H2>Link Button</H2>
      <Row mb={true}>
        <Col xs={12}>
          <Button
            to='/'
            onClick={handleClick}
            btnkind={select('Type', buttonType, 'primary')}
            outlined={boolean('outlined', false)}
          >
            {text('Text', 'Button label')}
          </Button>
        </Col>
      </Row>
    </Grid>
));

const handleClick = () => console.log('click');
