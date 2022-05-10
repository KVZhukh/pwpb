import Mustache from 'mustache';

import './styles.scss';
import template from './template.html';

export default () => {
    console.log('12361235');
    return Mustache.render(template, { title: 'dsfsdfsdfsdf' });
};
