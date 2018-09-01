import * as React from 'react';
import { H2 } from '@app/components/atm.typography';
import { Button } from '@app/components/atm.button';
import { Grid } from '@app/components/obj.grid';
import { Separator } from '@app/components/obj.box';
import { Icon } from 'react-fa';

export class Home extends React.Component<any, any> {
  render() {
    return (
      <Grid>
        <Separator/>
        <H2>Home</H2>
        <Button btnkind='link' to={'/'}><Icon name='home'/> Link to Home</Button>
      </Grid>
    );
  }
}
