import React, {Component} from 'react';
import { Tab, Grid, Form, Button, Menu, Image, Icon} from "semantic-ui-react";
import Deletemodal from './deleteModal.jsx';
import SwipeableViews from 'react-swipeable-views';
import {HashRouter, Route, Link} from 'react-router-dom';
export default class Additem extends Component {
  constructor() {
    super();
this.state={
    delete:false,
    activeItem:'New Item',
    index:0
}
  }
deleteItem(){
  this.setState({delete:true})
}
handleItemClick(e,{name}){
  if(name=='New Item')
  this.setState({index:0,activeItem:name})
  else
  this.setState({index:1,activeItem:name})

}
 render() {
   const { activeItem } = this.state
    return (
      <Grid padded>
          {this.state.delete ? <Deletemodal /> : null}
          <Grid.Row/>
        <Grid.Row><Grid.Column width={16}><Image as={Link} to='/' src='./../../images/logo.jpg'/>
      </Grid.Column></Grid.Row>
        <Grid.Row>
          <Grid.Column width={1}/>
          <Grid.Column width={14}>
            <Menu pointing secondary>
          <Menu.Item name='New Item' active={activeItem === 'New Item'} onClick={this.handleItemClick.bind(this)} />
          <Menu.Item name='Existing Item' active={activeItem === 'Existing Item'} onClick={this.handleItemClick.bind(this)} />
        </Menu>
        <SwipeableViews index={this.state.index} disabled>
    <div>
      <Form>
      <Form.Field>
      <label style={{color:'#B71236'}}>Item Number</label>
             <input/>
          </Form.Field>
           <Form.Field>
             <label style={{color:'#B71236'}}>Item Description</label>
             <input placeholder='Last Name' />
           </Form.Field>
         <Form.Field>
             <label style={{color:'#B71236'}}>Unit Cost</label>
            <input placeholder='Last Name' />
           </Form.Field>
          <Form.Field>
            <label style={{color:'#B71236'}}>Quantity</label>
            <input placeholder='Last Name' />
           </Form.Field>
           <Button fluid type='submit' positive style={{color:'white',borderRadius: '15px',marginTop:'20%'}}>Add Item</Button>
           <Link to='/createPO'><Button negative fluid type='submit' inverted style={{borderRadius: '15px',marginTop:'2%'}}>Cancel</Button>

        </Link></Form>
    </div>
    <div>
      <Form>
        <Form.Field>
          <label style={{color:'#B71236'}}>Item Number</label>
          <input/>
        </Form.Field>
        <Form.Field>
          <label style={{color:'#B71236'}}>Item Description</label>
          <input placeholder='Last Name' />
        </Form.Field>
        <Form.Field>
          <label style={{color:'#B71236'}}>Unit Cost</label>
          <input placeholder='Last Name' />
        </Form.Field>
        <Form.Field>
          <label style={{color:'#B71236'}}>Quantity</label>
          <input placeholder='Last Name' />
        </Form.Field>
        <Button fluid type='submit' style={{backgroundColor:'#B71236',color:'white',borderRadius: '15px',marginTop:'20%'}}>Add Item</Button>
        <br/>
        <Button fluid type='submit' style={{backgroundColor:'yellow',color:'white',borderRadius: '15px'}} onClick={this.deleteItem.bind(this)}>Delete Item</Button>
      </Form>
    </div>

  </SwipeableViews>
        </Grid.Column>
        <Grid.Column width={1}/>
        </Grid.Row>
</Grid>
    );
  }
}
