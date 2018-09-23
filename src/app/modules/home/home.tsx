import * as React from 'react';
import { H2 } from '@app/components/atm.typography';
import { Button } from '@app/components/atm.button';
import { Grid } from '@app/components/obj.grid';
import { Separator } from '@app/components/obj.box';
import { Icon } from 'react-fa';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

export class Home extends React.Component<any, any> {
  render() {
    const FEED_QUERY = gql`
      {
        feed {
          links {
            id
            createdAt
            url
            description
          }
        }
      }
    `;

    return (
      <Grid>
        <Separator/>
        <H2>Home</H2>
        <Button btnkind='link' to={'/'}><Icon name='home'/> Link to Home</Button>
        <Query query={FEED_QUERY}>
          {({ loading, error, data }) => {
            if (loading) {
              return <div>Loading</div>;
            }
            if (error) {
              return <div>Error</div>;
            }

            return data.feed.links.map(link =>
              <Button key={link.id} btnkind='link' to={link.url}>{link.description}</Button>,
            );
          }}
        </Query>
      </Grid>
    );
  }
}
