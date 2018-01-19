import React from 'react';
import ReactDOM from 'react-dom';
import Homepage from './client/components/homePage.jsx';
import Additem from './client/components/addItem.jsx';
import CreatePO from './client/views/createPO.jsx';
import Summary from './client/views/summary.jsx';
import Popage from './client/components/poList.jsx';
import {HashRouter, Route, Link} from 'react-router-dom';

ReactDOM.render(
<HashRouter>
<div>
  <Route exact path='/' component={Homepage}/>
  <Route  path='/createPO' component={CreatePO}/>
  <Route  path='/addItem' component={Additem}/>
  <Route  path='/summary' component={Summary}/>

</div>
</HashRouter>
  , document.getElementById('app'));
