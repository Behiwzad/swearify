## Swearify

Complete swear filter package which support most languages and more than **1000 words** .

## Requirements

As of version 2, requires you either have an environment that understands ES2016 and beyond or a transpiler like Babel.

## Installation

    npm install swearify --save

## Usage

```js
const filter= require('swearify');

console.log(filter.findAndFilter(
'Lorem ipsum dolor fUck amet, consectetur xxx elit, sed do жопа tempor incididunt fuck ut sex et dolore magna aliqua, lorem دیوس dolor sit amet, consectetur بیناموس elit, sed do eiusmod tempor incididunt ut b*tch et dolore ковровщик aliqua 🖕', // your sentence to filter
'▩', // placeholder
['en',  'fa',  'ru'], // filter in which languages
['sex'], // allowed swears
[], // add your own words
))
```

## Output

{
**found:** true,
**selected_languages:** [ 'en', 'fa', 'ru' ],
**bad_words:** [ 'ковровщик', 'بیناموس', 'b*tch', 'fuck', 'دیوس', 'жопа', 'sex', 'xxx', 'xx', '🖕'],
**filtered_sentense:**
'Lorem ipsum dolor ▩▩▩▩ amet, consectetur ▩▩▩ elit, sed do ▩▩▩▩ tempor incididunt ▩▩▩▩ ut <ins>sex</ins> et dolore
magna aliqua, lorem ▩▩▩▩ dolor sit amet, consectetur ▩▩▩▩▩▩▩ elit, sed do eiusmod tempor incididunt ut b\*▩▩▩▩▩ et dolore ▩▩▩▩▩▩▩▩▩ aliqua ▩▩',
**allowed_words:** [ 'sex' ]
}

## Supported Languages

| language   | code | country                                                                               | words number |
| ---------- | ---- | ------------------------------------------------------------------------------------- | ------------ |
| Belarusian | be   | <img height="40" width="50" src="https://flagicons.lipis.dev/flags/4x3/by.svg" />     | 135          |
| Bulgarian  | bg   | <img height="40" width="50" src="https://flagicons.lipis.dev/flags/4x3/bg.svg" />     | 135          |
| Catalan    | ca   | <img height="40" width="50" src="https://flagicons.lipis.dev/flags/4x3/es-ct.svg" />  | 132          |
| Welsh      | cy   | <img height="40" width="50" src="https://flagicons.lipis.dev/flags/4x3/gb-wls.svg" /> | 144          |
| Danish     | da   | <img height="40" width="50" src="https://flagicons.lipis.dev/flags/4x3/dk.svg" />     | 139          |
| German     | de   | <img height="40" width="50" src="https://flagicons.lipis.dev/flags/4x3/de.svg" />     | 133          |
| Greek      | el   | <img height="40" width="50" src="https://flagicons.lipis.dev/flags/4x3/gr.svg" />     | 131          |
| English    | en   | <img height="40" width="50" src="https://flagicons.lipis.dev/flags/4x3/us.svg" />     | 2863         |
| Spanish    | es   | <img height="40" width="50" src="https://flagicons.lipis.dev/flags/4x3/ea.svg" />     | 125          |
| Estonian   | et   | <img height="40" width="50" src="https://flagicons.lipis.dev/flags/4x3/ee.svg" />     | 133          |
| Basque     | eu   | <img height="40" width="50" src="https://flagicons.lipis.dev/flags/4x3/ea.svg" />     | 143          |
| Persian    | fa   | <img height="40" width="50" src="https://flagicons.lipis.dev/flags/4x3/ir.svg" />     | 271          |
| Finnish    | fi   | <img height="40" width="50" src="https://flagicons.lipis.dev/flags/4x3/fi.svg" />     | 133          |
| French     | fr   | <img height="40" width="50" src="https://flagicons.lipis.dev/flags/4x3/fr.svg" />     | 126          |
| Gaelic     | gd   | <img height="40" width="50" src="https://flagicons.lipis.dev/flags/4x3/gb-sct.svg" /> | 137          |
| Galician   | gl   | <img height="40" width="50" src="https://flagicons.lipis.dev/flags/4x3/es-ga.svg" />  | 134          |
| Hindi      | hi   | <img height="40" width="50" src="https://flagicons.lipis.dev/flags/4x3/in.svg" />     | 137          |
| Croatian   | hr   | <img height="40" width="50" src="https://flagicons.lipis.dev/flags/4x3/ba.svg" />     | 135          |
| Hungarian  | hu   | <img height="40" width="50" src="https://flagicons.lipis.dev/flags/4x3/hu.svg" />     | 134          |
| Armenian   | hy   | <img height="40" width="50" src="https://flagicons.lipis.dev/flags/4x3/am.svg" />     | 137          |
| Indonesian | id   | <img height="40" width="50" src="https://flagicons.lipis.dev/flags/4x3/id.svg" />     | 115          |
| Icelandic  | is   | <img height="40" width="50" src="https://flagicons.lipis.dev/flags/4x3/is.svg" />     | 131          |
| Italian    | it   | <img height="40" width="50" src="https://flagicons.lipis.dev/flags/4x3/it.svg" />     | 131          |
| Japanese   | ja   | <img height="40" width="50" src="https://flagicons.lipis.dev/flags/4x3/jp.svg" />     | 122          |
| Kannada    | kn   | <img height="40" width="50" src="https://flagicons.lipis.dev/flags/4x3/in.svg" />     | 140          |
| Korean     | ko   | <img height="40" width="50" src="https://flagicons.lipis.dev/flags/4x3/kr.svg" />     | 119          |
| Latin      | la   | <img height="40" width="50" src="https://flagicons.lipis.dev/flags/4x3/eu.svg" />     | 145          |
| Lithuanian | lt   | <img height="40" width="50" src="https://flagicons.lipis.dev/flags/4x3/lt.svg" />     | 130          |
| Latvian    | lv   | <img height="40" width="50" src="https://flagicons.lipis.dev/flags/4x3/lv.svg" />     | 136          |
| Macedonian | mk   | <img height="40" width="50" src="https://flagicons.lipis.dev/flags/4x3/mk.svg" />     | 130          |
| Malayalam  | ml   | <img height="40" width="50" src="https://flagicons.lipis.dev/flags/4x3/in.svg" />    | 134          |
| Mongolian  | mn   | <img height="40" width="50" src="https://flagicons.lipis.dev/flags/4x3/mn.svg" />     | 140          |
| Marathi    | mr   | <img height="40" width="50" src="https://flagicons.lipis.dev/flags/4x3/in.svg" />     | 136          |
| Malay      | ms   | <img height="40" width="50" src="https://flagicons.lipis.dev/flags/4x3/bn.svg" />     | 137          |
| Maltese    | mt   | <img height="40" width="50" src="https://flagicons.lipis.dev/flags/4x3/mt.svg" />     | 141          |
| Dutch      | nl   | <img height="40" width="50" src="https://flagicons.lipis.dev/flags/4x3/be.svg" />     | 138          |
| Polish     | pl   | <img height="40" width="50" src="https://flagicons.lipis.dev/flags/4x3/pl.svg" />     | 133          |
| Portuguese | pt   | <img height="40" width="50" src="https://flagicons.lipis.dev/flags/4x3/br.svg" />     | 132          |
| Romanian   | ro   | <img height="40" width="50" src="https://flagicons.lipis.dev/flags/4x3/ro.svg" />     | 139          |
| Russian    | ru   | <img height="40" width="50" src="https://flagicons.lipis.dev/flags/4x3/ru.svg" />     | 139          |
| Slovak     | sk   | <img height="40" width="50" src="https://flagicons.lipis.dev/flags/4x3/sk.svg" />     | 140          |
| Slovenian  | sl   | <img height="40" width="50" src="https://flagicons.lipis.dev/flags/4x3/si.svg" />     | 130          |
| Albanian   | sq   | <img height="40" width="50" src="https://flagicons.lipis.dev/flags/4x3/al.svg" />     | 139          |
| Serbian    | sr   | <img height="40" width="50" src="https://flagicons.lipis.dev/flags/4x3/rs.svg" />     | 142          |
| Swedish    | sv   | <img height="40" width="50" src="https://flagicons.lipis.dev/flags/4x3/se.svg" />     | 135          |
| Telugu     | te   | <img height="40" width="50" src="https://flagicons.lipis.dev/flags/4x3/in.svg" />     | 144          |
| Thai       | th   | <img height="40" width="50" src="https://flagicons.lipis.dev/flags/4x3/th.svg" />     | 138          |
| Turkish    | tr   | <img height="40" width="50" src="https://flagicons.lipis.dev/flags/4x3/tr.svg" />     | 132          |
| Ukrainian  | uk   | <img height="40" width="50" src="https://flagicons.lipis.dev/flags/4x3/ua.svg" />     | 136          |
| Uzbek      | uz   | <img height="40" width="50" src="https://flagicons.lipis.dev/flags/4x3/uz.svg" />     | 141          |
| Vietnamese | vi   | <img height="40" width="50" src="https://flagicons.lipis.dev/flags/4x3/vn.svg" />     | 115          |
| Zulu       | zu   | <img height="40" width="50" src="https://flagicons.lipis.dev/flags/4x3/za.svg" />     | 140          |
