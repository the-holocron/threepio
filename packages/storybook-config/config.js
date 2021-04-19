import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';
import { jsxDecorator } from 'storybook-addon-jsx';
import { addDecorator, addParameters, configure } from '@storybook/react';
import options from './options';
import '../../../src/index.scss';
const req = require.context('../../../src/', true, /__stories__\/.*\.js$/);

function loadStories () {
	req.keys().forEach(filename => req(filename));
}

addParameters({ options });
addDecorator(withKnobs);
addDecorator(withA11y);
addDecorator(jsxDecorator);

configure(loadStories, module);
