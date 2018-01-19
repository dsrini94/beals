import React from 'react';
import { Radio,Grid, Image,Form,Dropdown,TextArea,Button } from 'semantic-ui-react';

import POList from './../components/poList.jsx';

export default class CreatePO extends React.Component {

  constructor()
  {
    super();
    this.state = {
      options:[
   { key: 'nike', text: 'Nike', value: 'Nike' },
   { key: 'adidas', text: 'Adidas', value: 'Adidas' },
   { key: 'puma', text: 'Puma', value: 'Puma' },
   { key: 'ucb', text: 'United color of benetton', value: 'United color of benetton' },
   { key: 'redtape', text: 'Red Tape', value: 'Red Tape' },

 ]
    }
  }

   render() {
      return (
         <div>
            <Grid padded>
              <Grid.Row>
                <Grid.Column width={16}>
                  <Image src='./../../images/logo.jpg' />
                </Grid.Column>
              </Grid.Row>

              <Grid.Row>
                <Grid.Column width={16}>
                <Form>
                    <Form.Field>
                      <label style={{color:'#d83656',fontSize:'18px',fontWeight: 'bold'}}><span className="fontStyle">Supplier</span></label>
                      <Dropdown placeholder='Select Suppliers' fluid multiple selection options={this.state.options} />
                    </Form.Field>
                    <Form.Field>
                      <label style={{color:'#d83656',fontSize:'18px',fontWeight: 'bold'}}><span className="fontStyle">Enter PO</span></label>
                      <input placeholder='PO' />
                    </Form.Field>
                    <Form.Field>
                      <label style={{color:'#d83656',fontSize:'18px',fontWeight: 'bold'}}><span className="fontStyle">PO Notes</span></label>
                      <TextArea placeholder='Tell us more' style={{ minHeight: 100 }} />
                    </Form.Field>
                  </Form>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row>
                <Grid.Column>
                  <POList />
                </Grid.Column>
              </Grid.Row>

              <Grid.Row style={{marginTop:'100px'}}>
                <Grid.Column width={16}>
                <Radio toggle label='Data' style={{color:'#b70b2d',marginBottom:'15px'}}/>
                  <Button fluid inverted style={{backgroundColor:'#b70b2d',borderRadius:'15px'}}>
                    Submit PO
                  </Button>
                  <Button fluid color='yellow' style={{borderRadius:'15px',marginTop:'5px'}}>
                    Delete PO
                  </Button>
                </Grid.Column>
              </Grid.Row>

            </Grid>
         </div>
      );
   }
}
