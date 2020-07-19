import React from 'react';
import { shallow } from 'enzyme';

import Meseros from '../Component/Meseros/index';

it('Component Meseros client state', () => {
    const cliente = shallow(<Meseros />);

    expect(cliente.state('client')).toEqual("");
})

it('Component Meseros table state', () => {
    const mesa = shallow(<Meseros />);

    expect(mesa.state('table')).toEqual("");
})

it('Component Meseros order state', () => {
    const orden = shallow(<Meseros />);

    expect(orden.state('order')).toEqual([]);
})


