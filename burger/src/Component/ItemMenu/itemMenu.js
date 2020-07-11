// Dependencies
import React, { Component } from "react";
import "../Global/Css/itemMenu.css";
import data from "../../Data/menu.json";
import {OptionsModal} from './OptionsModal'


class Itemenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      typefood: [],
      mealtime:'',
      addModalShow: false
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
  this.props.addItem(meal);
  
  }

  render() {
    const lunchmenu = () => {
      this.setState({mealtime:'almuerzo'})
    }
    const breakfastmenu = () => {
      this.setState({mealtime:'desayuno'})
    }
    const addModalClose = () => this.setState({addModalShow:false});

    const mealt = this.state.mealtime
    console.log(mealt);
    return (
      <div className="Itemenu">
        <div className="contentbutton justify-content-center mb-2">
          <button type="button" className="btnoptions" onClick={breakfastmenu}>
            <h2>Desayuno</h2>
          </button>
          <button type="button" className="btnoptions" onClick={lunchmenu}>
            <h2>Almuerzo</h2>
          </button>
        </div>

          <div className="d-flex flex-wrap justify-content-between">
            {data.filter(item => item.type ===`${mealt}`).map(filtertype => (

              <button onClick={e => this.handleClick(e, filtertype)} key={filtertype.objectID}
              type= 'button' className='btn btn-light custom d-flex flex-wrap justify-content-between'>

                <i onClick={() => this.setState({addModalShow:true})}
                  >{filtertype.name}</i>

                  <OptionsModal
                  show={this.state.addModalShow}
                  onHide={addModalClose} />

              <span className="badge badge-success badge-pill ml-2">{filtertype.price}</span>
              </button>
            ))}
            </div>
        </div>
    );
  }
}

export default Itemenu;
