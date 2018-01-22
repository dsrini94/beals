import React from 'react';
import { Radio,Grid, Image,Form,Dropdown,TextArea,Button,Icon,Segment } from 'semantic-ui-react';


import {Link} from 'react-router-dom';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import POList from './../components/poList.jsx';

import handleDataToggle from './../../redux/actions/dataToggle.js'
import Submitmodal from './../components/submitModal.jsx';

class CreatePO extends React.Component {

  constructor() {
    super();
    this.state = {
      supplier:'Nike',
      options: [
        {
          key: 'nike',
          text: 'Nike',
          value: 'Nike'
        }, {
          key: 'adidas',
          text: 'Adidas',
          value: 'Adidas'
        }, {
          key: 'puma',
          text: 'Puma',
          value: 'Puma'
        }, {
          key: 'ucb',
          text: 'United color of benetton',
          value: 'United color of benetton'
        }, {
          key: 'redtape',
          text: 'Red Tape',
          value: 'Red Tape'
        }
      ],
      submitmsg:false
    }
  }

  handleSuplier(e,{value})
  {
    this.setState({supplier:value})
  }
submitmodal(){
  console.log('hiiiiiiiiii');
  this.setState({submitmsg:true})
  var msg = this.props.dataState.toggleState ? 'Your data has been submitted successfully' : 'Your PO is saved and it will be submitted once your internet connectivity is switched on'
  this.setState({successmsg:msg})
}
  render() {
    console.log(this.props.dataState);
    console.log('inside ceate po ', this.state.successmsg);
    return (<div>
      {this.state.submitmsg ? <Submitmodal successmsg={this.state.successmsg}/> : null}
      <Grid padded>
        <Grid.Row>
          <Grid.Column width={16}>
            <Image as={Link} to='/' src='./../../images/logo.jpg'/>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width={16}>
            <Form>
              <Form.Field>
                <label style={{
                    color: '#d83656',
                    fontSize: '18px',
                    fontWeight: 'bold'
                  }}>
                  <span className="fontStyle">Supplier</span>
                </label>
                <Dropdown placeholder='Select Suppliers' fluid  selection options={this.state.options} onChange={this.handleSuplier.bind(this)}/>
              </Form.Field>
              <Form.Field>
                <label style={{
                    color: '#d83656',
                    fontSize: '18px',
                    fontWeight: 'bold'
                  }}>
                  <span className="fontStyle">Enter PO</span>
                </label>
                <input placeholder='PO'/>
              </Form.Field>
              <Form.Field>
                <label style={{
                    color: '#d83656',
                    fontSize: '18px',
                    fontWeight: 'bold'
                  }}>
                  <span className="fontStyle">PO Notes</span>
                </label>
                <TextArea placeholder='Tell us more' style={{
                    minHeight: 100
                  }}/>
              </Form.Field>
            </Form>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={12}/>
          <Grid.Column width={4}>
            <Button as={Link} to={'/addItem/'+this.state.supplier} icon circular inverted style={{
                backgroundColor: '#d83656'
              }} >
              <Icon name='plus'/>
            </Button>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <POList/>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row style={{
            marginTop: '100px'
          }}>
          <Grid.Column width={16}>
            <Radio toggle label='Data' checked={this.props.dataState.toggleState} style={{
                color: '#7af442',
                marginBottom: '15px'
              }} onChange={this.props.handleDataToggle}/>
            <Button fluid inverted style={{
                backgroundColor: '#b70b2d',
                borderRadius: '15px'
              }} onClick={this.submitmodal.bind(this)}>
              Submit PO
            </Button>
            <Button fluid color='yellow' style={{
                borderRadius: '15px',
                marginTop: '5px'
              }}>
              Delete PO
            </Button>
          </Grid.Column>
        </Grid.Row>

      </Grid>
    </div>);
  }
}

function mapStateToProps(state) {
  return {dataState: state.poReducer}
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    handleDataToggle: handleDataToggle,
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(CreatePO);
