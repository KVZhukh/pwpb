import Footer from '../../partials/Footer';
import Header from '../../partials/Header';
// import '../../partials/Footer/styles.scss';
// import '../../partials/Header/styles.scss';
import './styles.scss';

export default (children: string) => /* html */ `
<div class="page-wrapper">
    ${Header()}
    <div class="page-wrapper__body">
        ${children}
    </div>
    ${Footer()}
</div>
`;
