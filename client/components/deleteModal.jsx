import React, {Component} from 'react';
import { Modal,Button,Grid} from "semantic-ui-react";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import removeItem from './../../redux/actions/removeItem.js'
class Deletemodal extends Component {
  constructor() {
    super();
    this.state={
      open:true
    }
  }

handleclose(){
  console.log('open',this.state.open);
  this.setState({ open: false })
}
 render() {

    return (
      <Grid>
        <Grid.Row>
          <Grid.Column width={2}/>
          <Grid.Column width={12}>
      <Modal basic open={this.state.open}>
                <Modal.Header>
                  Delete Your Account
                </Modal.Header>
                <Modal.Content>
                  <p>Are you sure you want to delete this item</p>
                </Modal.Content>
                <Modal.Actions>
                  <Button negative onClick={this.handleclose.bind(this)}>
                    No
                  </Button>
                  <Button positive onClick={this.props.handleremoveItem(this.props.index)}>Yes</Button>
                </Modal.Actions>
              </Modal>
            </Grid.Column>
            <Grid.Column width={2}/>
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
    handleremoveItem: removeItem,
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Deletemodal);
