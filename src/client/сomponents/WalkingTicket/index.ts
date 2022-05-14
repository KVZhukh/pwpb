import './styles.scss';

export default (className = '') => /* html */ `
    <table class="walking-ticket ${className}">
        <tr>
            <td class="walking-ticket__col">
                <p class="walking-ticket__title">Прогулочный билет «Путь к вершинам Моя Россия»</p>
                <div class="walking-ticket__time">
                    <p class="walking-ticket__time-title">Период действия</p>
                    <table>
                        <tr>
                            <td class="walking-ticket__time-date">01.02.2022</td>
                            <td class="walking-ticket__time-period">26 суток</td>
                            <td class="walking-ticket__time-date">27.02.2022</td>
                        </tr>
                    </table>
                </div>
            </td>
            <td class="walking-ticket__col">
                <div class="walking-ticket__qr">
                    <img src="" alt="">
                </div>
            </td>
        </tr>
    </table>
`;
