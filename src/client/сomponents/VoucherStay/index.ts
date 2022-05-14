import './styles.scss';

export default () => /* html */ `
    <table class="voucher-template-stay">
        <tr>
            <td class="voucher-template-stay__col">
                <p class="voucher-template-stay__title">Время заезда</p>
                <p class="voucher-template-stay__date">01.02.2022</p>
                <p class="voucher-template-stay__time">13:00 - 14:00</p>
            </td>
            <td class="voucher-template-stay__col voucher-template-stay__col--center">
                <p class="voucher-template-stay__period">24 ночи</p>
            </td>
            <td class="voucher-template-stay__col">
                <p class="voucher-template-stay__title">Время выезда</p>
                <p class="voucher-template-stay__date">25.02.2022</p>
                <p class="voucher-template-stay__time">13:00 - 14:00</p>
            </td>
        </tr>
    </table>
`;
