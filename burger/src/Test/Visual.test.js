import React from 'react';
import { shallow } from 'enzyme';

import Home from '../Component/Home/index';
import Timer from '../Component/Cocina/index';
import Page404 from '../Component/Page404/page404';
import Total from '../Component/ItemMenu/Total';
import Meseros from '../Component/Meseros/index';
import Cocina from '../Component/Cocina/index';
import Entregas from '../Component/Entregas/index';

describe('Component Home', () => {
    const home = shallow(<Home />);
    test('Component Home exists', () => {
    expect(home.exists()).toBeTruthy();
    })
})

describe('Component Timer', () => {
    const timer = shallow(<Timer />);
    test('Component Timer exists', () => {
    expect(timer.exists()).toBeTruthy();
    })
})

describe('Component page404', () => {
    const pageFourZeroFour = shallow(<Page404 />);
    test('Component page404 exists', () => {
    expect(pageFourZeroFour.exists()).toBeTruthy();
    })
})

describe('Component Total', () => {
    const total = shallow(<Total />);
    test('Renderize total text title above input box', () => {
        expect(total.find('.h2Total').text()).toEqual('TOTAL');
    })
})

it('Component Meseros', () => {
    const wrap = shallow(<Meseros />);

    expect(
        wrap.containsMatchingElement(
            <h2>Menus del Día</h2>

        )
      ).toBeTruthy()
})

it('Component Meseros renders title page text', () => {
    const menus = shallow(<Meseros />);

    expect(
        menus.containsMatchingElement(
            <h2>Menus del Día</h2>

        )
      ).toBeTruthy()
})

it('Component Cocina renders title page text', () => {
    const pedidos = shallow(<Cocina />);

    expect(
        pedidos.containsMatchingElement(
            <h2>Pedidos</h2>

        )
      ).toBeTruthy()
})

it('Component Entregas renders title page text', () => {
    const entregas = shallow(<Entregas />);

    expect(
        entregas.containsMatchingElement(
            <h2>Entregas</h2>

        )
      ).toBeTruthy()
})