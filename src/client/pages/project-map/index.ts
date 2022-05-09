import Mustache from 'mustache';

import './styles.scss';
import template from './template.html';

export default () => {
    return Mustache.render(template, { title: 16 });
    // return template1;
};
