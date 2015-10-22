/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

// Uncomment the following lines to use the react test utilities
// import TestUtils from 'react-addons-test-utils';
import createComponent from 'helpers/shallowRenderHelper';

import GamesPageComponent from 'components/game/GamesPageComponent.js';

describe('GamesPageComponent', () => {
    let component;

    beforeEach(() => {
      component = createComponent(GamesPageComponent);
    });

    it('should have its component name as default className', () => {
      expect(component.props.className).to.equal('gamespage-component');
    });
});
