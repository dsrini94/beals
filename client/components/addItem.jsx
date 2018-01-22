import React, {Component} from 'react';
import { Tab, Grid, Form, Button, Menu, Image, Icon,Dropdown,Input,Label} from "semantic-ui-react";

import SwipeableViews from 'react-swipeable-views';
import {HashRouter, Route, Link} from 'react-router-dom';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import addItemReducer from './../../redux/actions/newItem.js';
<<<<<<< HEAD
import addNewTempItem from './../../redux/actions/addNewTempItem.js'

=======
>>>>>>> 3777df441181ede64c3b5702ea195dfa0931a685
var array = [];

class Additem extends Component {
  constructor() {
    super();
this.state={
    cost:0,
    quantity:0,
    item:'',
    itemArray:[],
    activeItem:'New Item',
    index:0,
    options: [
      {
        key: 'shoes',
        text: 'Shoes',
        value: 'Shoes'
      }, {
        key: 'tshirt',
        text: 'T-Shirts',
        value: 'T-Shirts'
      }, {
        key: 'slippers',
        text: 'Slippers',
        value: 'Slippers'
      }, {
        key: 'tackPants',
        text: 'Track Pants',
        value: 'Track Pants'
      }, {
        key: 'bags',
        text: 'Bags',
        value: 'Bags'
      }
    ]
}
  }

handleProducts(e,{value})
{
  this.setState({item:value});
  if(value == 'T-Shirts' || value == 'Slippers')
    this.setState({cost:70})
  else
  if(value == 'Track Pants' || value == 'Bags')
    this.setState({cost:100})
  else
  this.setState({cost:150})
}

handleItemClick(e,{name}){
  if(name=='New Item')
  this.setState({index:0,activeItem:name})
}

handleQuantity(e)
{
  this.setState({quantity:e.target.value})
}

handleAddItem()
{
  var item = {
    supplier:this.props.match.params.supplier,
    itemNumber:this.state.item,
    cost:this.state.cost,
    quantity:this.state.quantity,
    totalCost:this.state.quantity*this.state.cost
  }
  this.props.addNewItem(item)

}

 render() {
   const { activeItem } = this.state
    return (
      <Grid padded>
          <Grid.Row/>
        <Grid.Row><Grid.Column width={16}><Image as={Link} to='/' src='./../../images/logo.jpg'/>
      </Grid.Column></Grid.Row>
        <Grid.Row>
          <Grid.Column width={1}/>
          <Grid.Column width={14}>
            <Menu pointing secondary>
          <Menu.Item name='New Item' active={activeItem === 'New Item'} onClick={this.handleItemClick.bind(this)} />
        </Menu>
        <SwipeableViews index={this.state.index} disabled>
    <div>
      <Form>
      <Form.Field>
      <label style={{color:'#B71236'}}>Item Number</label>
      <Dropdown placeholder='Item Number' fluid  selection options={this.state.options} onChange={this.handleProducts.bind(this)}/>
          </Form.Field>
           <Form.Field>
             <label style={{color:'#B71236'}}>Item Description</label>
             <input placeholder='Item Description' />
           </Form.Field>
         <Form.Field>
             <label style={{color:'#B71236'}}>Unit Cost</label>
             <Label>${this.state.cost}</Label>
           </Form.Field>
          <Form.Field>
            <label style={{color:'#B71236'}}>Quantity</label>
            <input placeholder='Quantity' onChange={this.handleQuantity.bind(this)}/>
           </Form.Field>
           <Button fluid type='submit' positive style={{color:'white',borderRadius: '15px',marginTop:'20%'}} onClick={this.handleItem.bind(this)}>Add Item</Button>
           <Link to={'/createPO/'+this.props.match.params.poId}><Button negative fluid type='submit' inverted style={{borderRadius: '15px',marginTop:'2%'}}>Cancel</Button>

        </Link></Form>
    </div>

  </SwipeableViews>
        </Grid.Column>
        <Grid.Column width={1}/>
        </Grid.Row>
</Grid>
    );
  }
}

function mapStateToProps(state) {
  return {dataState: state.poReducer}
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    addItemReducer: addItemReducer,
    addNewItem:addNewTempItem
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Additem);
