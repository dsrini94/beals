import React from 'react';
import { Button, Image, List,Icon,Radio,Modal } from 'semantic-ui-react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import removeItem from './../../redux/actions/removeItem.js'

class POList extends React.Component
{
  constructor()
  {
    super();
    this.state={open:true,index:0}
  }
  render()
  {
    return(
      <div>
          <List verticalAlign='middle'>
            {this.props.dataState.itemArray.map((item,key)=>{
              return(
                <List.Item style={{marginBottom:'5px'}} key={key}>
                  <List.Content floated='right'>
                    <Button icon circular inverted style={{backgroundColor:'#b70b2d'}} onClick={()=>this.props.handleremoveItem(key)}><Icon name="close" /></Button>
                  </List.Content>
                  <Image avatar src='https://i.vimeocdn.com/portrait/6462071_300x300' style={{borderRadius:'50px'}}/>
                  <List.Content>
                  <List.Header>
                  <List divided horizontal>
                    <List.Item >{item.itemNumber}</List.Item>
                    <List.Item >Cost : {item.cost}</List.Item>
                    <List.Item >Quantity : {item.quantity}</List.Item>
                  </List>
                  </List.Header>
                  <List.Description>{item.supplier}</List.Description>
                  </List.Content>
                </List.Item>
              )
            })}

          </List>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {dataState: state.poReducer}
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    handleremoveItem: removeItem,
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(POList);
