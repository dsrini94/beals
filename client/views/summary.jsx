import React from 'react'
import {Icon,Grid, Image,Form,Dropdown,TextArea,Button,Card,Header,Label } from 'semantic-ui-react';

import {HashRouter, Route, Link} from 'react-router-dom';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class Summary extends React.Component
{
  render()
  {
    return(
      <Grid padded>
        <Grid.Row>
          <Grid.Column width={16}>
            <Image as={Link} to='/' src='./../../images/logo.jpg' />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width={16}>
          {this.props.dataState.itemArray.map((item,key)=>{
            return(
              <Card fluid color='red' key={key}>
                <Card.Content>
                  <Grid>
                    <Grid.Row>
                      <Grid.Column width={8}>
                        <Header as='h4'><span className="fontStyle">Supplier:{item.supplier}</span></Header>
                          <Header as='h5' style={{color:'#d83656'}}>Total Cost: ${item.totalCost}</Header>
                          <Header as='h5' style={{color:'#d83656'}}>Total Qty: {item.quantity}</Header>
                          <Header as='h5' style={{color:'#d83656'}}>Item Count: 2</Header>
                      </Grid.Column>
                      <Grid.Column width={8}>
                        <Header as='h4'><span className="fontStyle">PO#:100045639</span></Header>
                          <Header as='h5' style={{color:'#d83656'}}>Status: PO {item.status}</Header>
                          <Header as='h5' style={{color:'#d83656'}}>Submit Date: 1-8-2017</Header>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                </Card.Content>
              </Card>
            )
          })}

          </Grid.Column>
        </Grid.Row>


      </Grid>
    )
  }
}

function mapStateToProps(state) {
  return {dataState: state.poReducer}
}

export default connect(mapStateToProps, null)(Summary);
