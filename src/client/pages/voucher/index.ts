import PageWrapper from '../../components/PageWrapper';
import TextWithIcon from '../../components/TextWithIcon';
import VoucherStay from '../../components/VoucherStay';
import WalkingTicket from '../../components/WalkingTicket';
import './styles.scss';

const PageOne = /* html */ `<h1 class="voucher-template__h1 voucher-template__h1--mb">
Благодарим за заказ, <br />Олеся Александровна!
</h1>
<h2 class="voucher-template__h2">Кто сделал заказ</h2>
<table class="voucher-template__order">
<tr>
    <td class="col-2">
        <dl class="voucher-template__list">
            <dd class="voucher-template__list-value voucher-template__list-value--mb">
                ${TextWithIcon('Эверстова Олеся Александровна')}
            </dd>
            <dd class="voucher-template__list-value voucher-template__list-value--mb">
                ${TextWithIcon('+7 (915) 342-24-74')}
            </dd>
            <dd class="voucher-template__list-value voucher-template__list-value--mb">
                ${TextWithIcon('Everstova_OA@rosakhutor.com')}
            </dd>
        </dl>
    </td>
    <td class="col-2">
        <dl class="voucher-template__list">
            <dt class="voucher-template__list-name">Дата заказа</dt>
            <dd class="voucher-template__list-value voucher-template__list-value--mb">
                ${TextWithIcon('24.01.2022')}
            </dd>
            <dt class="voucher-template__list-name">Номер заказа</dt>
            <dd class="voucher-template__list-value voucher-template__list-value--mb">
                ${TextWithIcon('PREPROD23697')}
            </dd>
        </dl>
    </td>
</tr>
</table>`;

const PageTwo = /* html */ `<h1 class="voucher-template__h1 voucher-template__h1--mb">
Благодарим за заказ, <br />Олеся Александровна!
</h1>
<h2 class="voucher-template__h2">Кто сделал заказ</h2>
<table class="voucher-template__order">
            <tr>
                <td class="col-3">
                    <dl class="voucher-template__list">
                        <dd class="voucher-template__list-value voucher-template__list-value--mb">
                            ${TextWithIcon('Эверстова Олеся Александровна')}
                        </dd>
                        <dd class="voucher-template__list-value voucher-template__list-value--mb">
                            ${TextWithIcon('+7 (915) 342-24-74')}
                        </dd>
                        <dd class="voucher-template__list-value voucher-template__list-value--mb">
                            ${TextWithIcon('Everstova_OA@rosakhutor.com')}
                        </dd>
                    </dl>
                </td>
                <td class="col-3">
                    <dl class="voucher-template__list">
                        <dt class="voucher-template__list-name">Дата заказа</dt>
                        <dd class="voucher-template__list-value voucher-template__list-value--mb">
                            ${TextWithIcon('24.01.2022')}
                        </dd>
                        <dt class="voucher-template__list-name">Номер заказа</dt>
                        <dd class="voucher-template__list-value voucher-template__list-value--mb">
                            ${TextWithIcon('PREPROD23697')}
                        </dd>
                    </dl>
                </td>
                <td>
                    <img src="" alt="" style="width: 165px; height: 165px;">
                </td>
            </tr>
        </table>`;

const PageThree = /* html */ `
        <h1 class="voucher-template__h1">Отель Park Inn by Radisson Rosa<br/>Khutor 4* <span>Стандарт</span></h1>

<table>
    <tr>
        <td class="col-2">
            ${VoucherStay()}
        </td>
        <td class="col-2">
            <dl class="voucher-template__list">
                <dd class="voucher-template__list-value voucher-template__list-value--mb">
                    ${TextWithIcon(
                        'Краснодарский край, г. Сочи, Адлерский район, Красная Поляна, пос. Эсто-Садок, набережная Лаванда, д. 4'
                    )}
                </dd>
                <dd class="voucher-template__list-value voucher-template__list-value--mb">
                    ${TextWithIcon('+7 (8622) 431 380')}
                </dd>
            </dl>
        </td>
    </tr>
</table>
<br />
<h2 class="voucher-template__h2 voucher-template__h2--mb">Кто заселяется</h2>

<table>
    <tr>
        <td class="col-2 col-2--64">
            <ul>
                <li class="mb-24">
                    <p class="text-md text-md--bold">Римский-Корсаков Николай Петрович</p>
                    <p class="text-md">01.02.2022</p>
                </li>
                <li class="mb-24">
                    <p class="text-md text-md--bold">Петров Семен Петрович</p>
                    <p class="text-md">01.01.1988</p>
                </li>
                <li>
                    <p class="text-md text-md--bold">Римский-Корсаков Николай Петрович</p>
                    <p class="text-md">01.02.2022</p>
                </li>
            </ul>
        </td>
        <td class="col-2 col-2--64">
            <ul>
                <li class="mb-16">
                    <p class="text-lg text-lg--bold">Всего гостей — 3</p>
                    <p class="text-md">Основных мест — 2<br/>Доп. мест — 1</p>
                </li>
                <li>
                    <p class="text-md mb-8">${TextWithIcon('Взрослый — 2', true)}</p>
                    <p class="text-md">${TextWithIcon('Детский — 1', true)}</p>
                </li>
            </ul>
        </td>
    </tr>
</table>

<br/>
<h2 class="voucher-template__h2 voucher-template__h2--mb">Детали бронирования</h2>
<table class="mb-64">
    <tr>
        <td class="col-2 col-2--64">
            <dl class="voucher-template-booking mb-24">
                <dt class="voucher-template-booking__name">
                    Тип питания
                </dt>
                <dd class="voucher-template-booking__value">
                    ${TextWithIcon('Завтрак, ужин', true)}
                </dt>
                <dt class="voucher-template-booking__name">
                    Условия отмены брони
                </dt>
                <dd class="voucher-template-booking__value">
                    ${TextWithIcon('Отмена брони со штрафом ', true)}
                </dt>
                <dt class="voucher-template-booking__name">
                    Ваши пожелания
                </dt>
                <dd class="voucher-template-booking__value">
                    ${TextWithIcon('Двухспальная кровать', true)}
                </dt>
                <dd class="voucher-template-booking__value">
                    ${TextWithIcon('Примерное время заезда 15:30 - 16:00', true)}
                </dt>
            </dl>
            <p>Я хочу, что бы меня довез транфер до аэропорта при выезде 25.02 14:00</p>
        </td>
        <td class="col-2 col-2--64">
            <p class="text-md">
                Тариф с питанием<br/>В стоимость включены услуги:<br/>
                - Бесплатный Wi-Fi на всей территории гостиницы<br/>
                - НДС 20%<br/><br/>
                Для гарантии брони требуется предоплата в размере стоимости проживания. Отмена бронирования без штрафа не возможна<br/><br/>
                Дополнительно к стоимости номера взимается курортный сбор. Размер курортного сбора на территории г. Сочи с одного физического лица, достигшего 18 лет, проживающего в объекте размещения более 24 часов, составляет 50 рублей в сутки.
            </p>
        </td>
    </tr>
</table>`;

const pageFour = /* html */ `
<p class="text-md">
    Для заселения в отель необходимо иметь документы, удостоверяющие личность на всех заезжающих: взрослым – паспорт, детям – свидетельство о рождении. Необходимо предъявить банковскую платежную карту, по которой было произведено бронирование, и документ, удостоверяющий личность, при заезде в отель. При бронировании номера категории Стандарт по умолчанию бронируется номер с одной двуспальной кроватью. Если для проживания нужен номер с двумя раздельными кроватями, необходимо связаться с отелем напрямую.
</p>`;

const pageFive = /* html */ `
<h1 class="voucher-template__h1 voucher-template__h1--mb">
            Зимний день на Роза хутор
            &nbsp;&nbsp;<span>Гость 1</span>
        </h1>
        <ul class="mb-48">
            <li class="mb-32">${WalkingTicket()}</li>
            <li class="mb-32">${WalkingTicket()}</li>
            <li>${WalkingTicket()}</li>
        </ul>
        `;

const pageSix = /* html */ `
<h2 class="voucher-template__h2">Что важно знать</h2>
        <p class="text-md mb-24">Для заселения в отель необходимо иметь документы, удостоверяющие личность на всех заезжающих: взрослым – паспорт, детям – свидетельство о рождении. Необходимо предъявить банковскую платежную карту, по которой было произведено бронирование, и документ, удостоверяющий личность, при заезде в отель. При бронировании номера категории Стандарт по умолчанию бронируется номер с одной двуспальной кроватью. Если для проживания нужен номер с двумя раздельными кроватями, необходимо связаться с отелем напрямую.</p>
        <h3 class="voucher-template__h2">Что нужно иметь собой</h3>
        <p class="text-md mb-24">Для заселения в отель необходимо иметь документы, удостоверяющие личность на всех заезжающих: взрослым – паспорт, детям – свидетельство о рождении. Необходимо предъявить банковскую платежную карту, по которой было произведено бронирование, и документ, удостоверяющий личность, при заезде в отель. При бронировании номера категории Стандарт по умолчанию бронируется номер с одной двуспальной кроватью. Если для проживания нужен номер с двумя раздельными кроватями, необходимо связаться с отелем напрямую.</p>
        <h3 class="voucher-template__h2">Страховка</h3>
        <p class="text-md mb-24">Обезопасьте себя от несчастных случаев - оформите страховку в нашем онлайн-магазин <a href="/">shop.rosaski.com/insurance</a></p>`;

const pageSeven = /* html */ `
        <div class="voucher-template__refund">
            <h3 class="voucher-template__refund-title">${TextWithIcon('Возврат и отмена', true)}</h3>
            <p class="voucher-template__refund-text">В период: 08.04.21 - 15.12.21 возможна отмена за 14 дней до заезда.  При отмене менее 14 дней до заезда - штраф за 1 сутки.</p>
            <p class="voucher-template__refund-text">В период: 15.12.21 - 01.04.22  возможна отмена за 30 дней до заезда. При отмене менее 30 дней до заезда - штраф за весь период проживания.</p>
            <p class="voucher-template__refund-text">В случае отказа от оплаченных услуг необходимо запросить отмену заказа в Вашем личном кабинете на сайте онлайн-магазина. Возврат оплаченных сумм производится в соответствии с правилами оплат и отмены бронирования услуг комплекса: <a href="/">rosakhutor.com/rules</a></p>
        </div>`;
export default () => /* html */ `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
    </head>
    <body class="voucher-template">
        ${PageWrapper(PageOne)}
        ${PageWrapper(PageTwo)}
        ${PageWrapper(PageThree)}
        ${PageWrapper(pageFour)}
        ${PageWrapper(pageFive)}
        ${PageWrapper(pageSix)}
        ${PageWrapper(pageSeven)}
    </body>
</html> `;
