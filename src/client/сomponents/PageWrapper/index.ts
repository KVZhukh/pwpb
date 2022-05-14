import Footer from '../Footer';
import Header from '../Header';
import './styles.scss';

export default (children: string) => /* html */ `
<div class="page-wrapper">
    ${Header()}
    ${children}
    ${Footer()}
</div>
`;
