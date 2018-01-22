module.exports = (state={
  toggleState:false,
  itemArray:[]
},action)=>{
  switch(action.type){
  case "toggle":
    if(state.toggleState == false)
    {
    return {
      toggleState:!state.toggleState,
      itemArray:state.itemArray.map((item)=>{
        item.status = 'submitted';
        return item
      })
    }
  }
  else {
    return {
      toggleState:!state.toggleState,
      itemArray:state.itemArray
    }
  }
  break;
  case "addItem":
    state.itemArray = action.itemArray
    return{
      toggleState:state.toggleState,
      itemArray:state.itemArray
    }
    break;
  case "remove":
  return{
    toggleState:state.toggleState,
    itemArray:state.itemArray.filter((item,index)=>{
      if(index !== action.index)
        return item
    })
  }
  break;
  }
  return state;
}
