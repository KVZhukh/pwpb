import TextWithIcon from '../TextWithIcon';

export default () => /* html */ `
            <div class="voucher-template__footer">
            <table class="mb-24">
                <tr>
                    <td class="voucher-template__footer-col">
                        <a href="" class="voucher-template__footer-link">
                            ${TextWithIcon('@rosakhutor', true)}
                        </a>
                    </td>
                    <td class="voucher-template__footer-col">
                        <a href="" class="voucher-template__footer-link">
                            ${TextWithIcon('@rosakhutor', true)}
                        </a>
                    </td>
                    <td class="voucher-template__footer-col">
                        <a href="" class="voucher-template__footer-link voucher-template__footer-link--app">
                            ${TextWithIcon(`<span>Скачать из</span>Google Play`, true)}
                        </a>
                    </td>
                    <td class="voucher-template__footer-col">
                        <a href="" class="voucher-template__footer-link voucher-template__footer-link--app">
                            ${TextWithIcon(`<span>Доступно в </span>App Store`, true)}
                        </a>
                    </td>
                </tr>
            </table>
            <p class="text-md">
                8-800-5000-555 / onlinesales@rosakhutor.com / <a href="">rosakhutor.com</a><br/> 354392 Россия, Краснодарский край, г. Сочи, пос. Эсто-Садок, ул. Олимпийская 35, Горный курорт Роза Хутор
            </p>
        </div>
`;
