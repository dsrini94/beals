import React from 'react';
import { Button, Image, List,Icon,Radio } from 'semantic-ui-react';

export default class POList extends React.Component
{
  constructor()
  {
    super();
  }
  render()
  {
    return(
      <div>
          <List verticalAlign='middle'>
            <List.Item style={{marginBottom:'5px'}}>
              <List.Content floated='right'>
                <Button icon circular inverted style={{backgroundColor:'#b70b2d'}}><Icon name="chevron right" /></Button>
              </List.Content>
              <Image avatar src='https://i.vimeocdn.com/portrait/6462071_300x300' style={{borderRadius:'50px'}}/>
              <List.Content>
              <List.Header>
              <List divided horizontal>
                <List.Item >New Item</List.Item>
                <List.Item >Cost</List.Item>
                <List.Item >Qty</List.Item>
              </List>
              </List.Header>
              <List.Description>Adidas</List.Description>
              </List.Content>
            </List.Item>
            <List.Item style={{marginBottom:'5px'}}>
              <List.Content floated='right'>
                <Button icon circular inverted style={{backgroundColor:'#b70b2d'}}><Icon name="chevron right" /></Button>
              </List.Content>
              <Image avatar src='https://i.vimeocdn.com/portrait/6462071_300x300' style={{borderRadius:'50px'}}/>
              <List.Content>
              <List.Header>
              <List divided horizontal>
                <List.Item >New Item</List.Item>
                <List.Item >Cost</List.Item>
                <List.Item >Qty</List.Item>
              </List>
              </List.Header>
              <List.Description>Adidas</List.Description>
              </List.Content>
            </List.Item>
            <List.Item style={{marginBottom:'5px'}}>
              <List.Content floated='right'>
                <Button icon circular inverted style={{backgroundColor:'#b70b2d'}}><Icon name="chevron right" /></Button>
              </List.Content>
              <Image avatar src='https://i.vimeocdn.com/portrait/6462071_300x300' style={{borderRadius:'50px'}}/>
              <List.Content>
              <List.Header>
              <List divided horizontal>
                <List.Item >New Item</List.Item>
                <List.Item >Cost</List.Item>
                <List.Item >Qty</List.Item>
              </List>
              </List.Header>
              <List.Description>Adidas</List.Description>
              </List.Content>
            </List.Item>
            <List.Item style={{marginBottom:'5px'}}>
              <List.Content floated='right'>
                <Button icon circular inverted style={{backgroundColor:'#b70b2d'}}><Icon name="chevron right" /></Button>
              </List.Content>
              <Image avatar src='https://i.vimeocdn.com/portrait/6462071_300x300' style={{borderRadius:'50px'}}/>
              <List.Content>
              <List.Header>
              <List divided horizontal>
                <List.Item >New Item</List.Item>
                <List.Item >Cost</List.Item>
                <List.Item >Qty</List.Item>
              </List>
              </List.Header>
              <List.Description>Adidas</List.Description>
              </List.Content>
            </List.Item>
          </List>
      </div>
    );
  }
}
