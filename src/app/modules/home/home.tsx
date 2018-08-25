import * as React from 'react';
import { H2 } from '@app/components/atm.typography';
import { Button } from '@app/components/atm.button';
import { Grid } from '@app/components/obj.grid';
import { Separator } from '@app/components/obj.box';

export class Home extends React.Component<any, any> {
  render() {
    return (
      <Grid bgColor={true}>
        <Separator/>
        <H2>Home</H2>
        <Button btnkind='link' to={'/'}>Link</Button>
      </Grid>
    );
  }

}
