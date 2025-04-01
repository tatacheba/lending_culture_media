# lending_culture_media

Тестовое задание компании Culture Media (Зебедашвили Георгий Гияевич)

Необходимо реализовать правки в лендинге. Ниже указаны скриншоты с некоторыми пояснениями для реализации задачи.

1. Изменить «15 minut temu» на динамически изменяющиеся даты. Чтобы каждый день автоматически подставлялась сегодняшняя дата(вчерашняя, позавчерашняя и тд.)
   Скрипт через который можно реализовать динамические подставление даты - будет приложен в архиве(Инструкция как пользоваться скриптом будет в самом низу данного документа)

2. Заменить этот блок с текстом(скриншот ниже) на форму отправки данных(имя и номера телефона). Форму необходимо сверстать, пример/референс есть также на скриншоте ниже, также вы можете сверстать свою форму «более подходящую» под этот лендинг.
   Обратите внимание, что текст на форме должен соответствовать языку на ленде(в данном случае польском)

На форме необходимо: 1. Реализовать рабочий таймер(скрипт таймера будет лежать в архиве). (Инструкция по работе со скриптами в самом низу данного документа) 2. Добавить фотографию необходимого продукта(будет лежать в архиве название product.png) 3. Изменить цену на 59€(цена со скидкой) - 105€(цена без скидки) 4. Необходимо подключить, обработчик формы отправки заказа «api.php», в атрибуте action тега <form>(данный файл будет приложен в архиве) 5. Реализовать валидацию номера телефона, которая позволит пользователю вводить только цифры и символы «+ ( ) - » 6. Сделать поле имя и номер телефона обязательными и также установить максимальную длину данных полей 32 символа

3. Изменить все даты которые встречаются в тексте на лендинге на скрипт, чтобы они были динамические(скрипт таймера будет лежать в архиве). (Инструкция по работе со скриптами в самом низу данного документа).
   Пример виден на скришоте

4. Удалить правое информационное меню(На скришоте ниже отмечено что удалить)

4.1 В этом элементе заменить фото на фото продукта(будет лежать в архиве название product.png)

5. Заменить во всех тегах <a> все значения атрибута href на «#».
   Также необходимо реализовать «якорные ссылки» через скрипт. Скрипт будет приложен в архиве , инструкция по использованию скрипта будет в конце данного документа.

ИНСТРУКЦИЯ ПО СКРИПТАМ

1. scroll_to_form.js - скрипт для «якорных ссылок»(для скрола к форме заказа)

Скрипт очищает атрибут href и удаляет target и onclick со всех тегов <a>. По нажатию на ссылку производится плавный скролл до формы. Если необходимо настроить иное место до которого будет прокручиваться страница, то к тегу <script> требуется добавить атрибут form_id в котором указать id элемента.

Пример подключения скрипта:

<script src="js/scroll_to_form.js"></script>

Добавьте класс ignore-scroll к ссылке, чтобы скрипт к ней не применился

2. dtime_nums.js

Скрипт для вывода актуальных дат на лендинг. Обратите внимание, скрипт необходимо подключить в начале документа между тегами <head></head>
Функция dtime_nums в качестве параметров принимает количество дней которые требуется отнять или прибавить к текущей дате (0 - сегодня, 1 - завтра, -2 - позавчера и т.д.). Чтобы вывести дату, вставьте код в нужное место как на примере ниже.

Пример использования скрипта:

<script>dtime_nums(0)</script>

3. simple_timer.js

Простой скрипт для вывода таймера. Обратите внимание, скрипт должен располагаться после мест где будет выводиться таймер, например перед закрывающим тегом </body>.

Если в элементе, класс которого передан первым параметром, присутствуют элементы с классами "minutes" и "seconds", то скрипт распределит минуты, секунды и часы (класс "hours") по ним, иначе заменит всё содержимое элемента на таймер.

Пример использования таймера:
<span class="simple_timer">
<span class="hours">00</span>
:
<span class="minutes">00</span>
:
<span class="seconds">00</span>
</span>
