import React from 'react'
import {Icon,Grid, Image,Form,Dropdown,TextArea,Button,Card,Header,Label } from 'semantic-ui-react';

export default class Summary extends React.Component
{
  render()
  {
    return(
      <Grid padded>
        <Grid.Row>
          <Grid.Column width={16}>
            <Image src='./../../images/logo.jpg' />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width={16}>
          <Card fluid color='red'>
            <Card.Content>
              <Grid>
                <Grid.Row>
                  <Grid.Column width={8}>
                    <Header as='h4'><span className="fontStyle">Supplier:41394 Nike USA</span></Header>
                      <Header as='h5' style={{color:'#d83656'}}>Total Cost: $140</Header>
                      <Header as='h5' style={{color:'#d83656'}}>Total Qty: 2000</Header>
                      <Header as='h5' style={{color:'#d83656'}}>Item Count: 2</Header>
                  </Grid.Column>
                  <Grid.Column width={8}>
                    <Header as='h4'><span className="fontStyle">PO#:100045639</span></Header>
                      <Header as='h5' style={{color:'#d83656'}}>Status: PO Confirmed</Header>
                      <Header as='h5' style={{color:'#d83656'}}>Submit Date: 1-8-2017</Header>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Card.Content>
          </Card>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width={16}>
            <center><Button inverted circular icon size='massive' style={{backgroundColor:'#d83656'}}><Icon name="home" /></Button></center>
          </Grid.Column>
        </Grid.Row>

      </Grid>
    )
  }
}
