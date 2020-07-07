// Dependencies
import React, { Component } from "react";
import "../Global/Css/itemMenu.css";
import data from "../../Data/menu.json";

class Itemenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      typefood: [],
      mealtime:''
    };
  
  }

  componentDidMount() {
    this.setState({typefood: data})
    console.log(data);

  }
  // Clicks en los items del menú
  handleClick = (e, meal) => {
  e.preventDefault();
  console.log(`> Se ha Seleccionado: `, meal);
  }

  render() {
    const lunchmenu = () => {
      this.setState({mealtime:'almuerzo'})
    }
    const breakfastmenu = () => {
      this.setState({mealtime:'desayuno'})
    }
    const mealt = this.state.mealtime
    console.log(mealt);
    return (
      <div className="Itemenu">
        <div className="contentbutton justify-content-center mb-2">
          <button type="button" className="btn btn-success mr-2" onClick={breakfastmenu}>
            <h2>Desayuno</h2>
          </button>
          <button type="button" className="btn btn-success" onClick={lunchmenu}>
            <h2>Almuerzo</h2>
          </button>
        </div>

        <div className="container w-75">
          
            {data.filter(item => item.type ===`${mealt}`).map(filtertype => (
              
              <>
              <Button onClick={e => this.handleClick(e, filtertype)} key={filtertype.objectID} 
              type="button" className="btn btn-light custom" variant = 'primary' onClick={() => this.setState({addModalShow:true})}>
              
                {filtertype.name}</Button>

                  <OptionsModal
                  show={this.state.addModalShow}
                  onHide={addModalClose} />
                
              <span className="badge badge-primary badge-pill">{filtertype.price}</span>
              </>

            ))}
          

        </div>
      </div>
    );
  }
}

export default Itemenu;
