import Icon from '../Icon';

export default (text: string, isCenter?: boolean) => /* html */ `<table class="">
    <tr>
        <td style="width: 32px; height: 32px; vertical-align: top; ${isCenter ? 'vertical-align: middle;' : ''}">${Icon(
    isCenter ? 'vertical-align: middle;' : ''
)}</td>
        <td>${text}</td>
    </tr>
</table> `;
