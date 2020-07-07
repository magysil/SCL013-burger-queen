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
        <div className="contentbutton">
          <button type="button" className="btnoptions" onClick={breakfastmenu}>
            <h2>Desayuno</h2>
          </button>
          <button type="button" className="btnoptions" onClick={lunchmenu}>
            <h2>Almuerzo</h2>
          </button>
        </div>
        <div className="d-flex flex-wrap justify-content-between ">
              {data.filter(item => item.type ===`${mealt}`).map(filtertype => (
              <button onClick={e => this.handleClick(e, filtertype)} key={filtertype.objectID}
              type="button" className="btn btn-light custom">
              {filtertype.name}
              <span className="badge badge-primary badge-pill ml-2">{filtertype.price}</span>
              </button>))}
        </div>
      </div>
    );
  }
}

export default Itemenu;
