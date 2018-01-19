import React, {Component} from 'react';
import { Modal,Button,Grid} from "semantic-ui-react";

export default class Deletemodal extends Component {
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
                  <Button positive>Yes</Button>
                </Modal.Actions>
              </Modal>
            </Grid.Column>
            <Grid.Column width={2}/>
            </Grid.Row>
            </Grid>
    );
  }
}
