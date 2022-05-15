import Icon from '../Icon';

export default (text: string, isCenter?: boolean) => /* html */ `<table class="">
    <tr>
        <td style="width: 5.42mm; height: 5.42mm; vertical-align: top; ${
            isCenter ? 'vertical-align: middle;' : ''
        }">${Icon(`${isCenter ? 'vertical-align: middle;' : ''} width: 5.42mm; height: 5.42mm;`)}</td>
        <td>${text}</td>
    </tr>
</table> `;
