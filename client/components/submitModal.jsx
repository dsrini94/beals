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
console.log('inside modal',this.props.successmsg);
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column width={2}/>
          <Grid.Column width={12}>
      <Modal basic open={this.state.open}>
                <Modal.Content>
                  <p>{this.props.successmsg}</p>
                </Modal.Content>
                <Modal.Actions>
                  <Button negative onClick={this.handleclose.bind(this)}>
                    Ok
                  </Button>

                </Modal.Actions>
              </Modal>
            </Grid.Column>
            <Grid.Column width={2}/>
            </Grid.Row>
            </Grid>
    );
  }
}
