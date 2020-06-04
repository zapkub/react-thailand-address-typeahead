# react-thailand-address-typeahead (jQuery free)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

This project fork from 
[jquery.Thailand.js](https://github.com/earthchie/jquery.Thailand.js)

## Demo
[Example with storybook](http://zapkub.github.io/react-thailand-address)


## Requirement
- react

## Installation
```
$ npm install react react-thailand-address-typeahead
```

## Usage

```js
import AddressFormTypeahead from 'react-thailand-address-typeahead';

export default () => (
    <div>
        <AddressFormTypeahead
         onAddressSelected={(addressObject) => console.log(addressObject)} 
         districtLabel={'ตำบล'} 
         amphoeLabel={'อำเภอ'}
         provinceLabel={'จังหวัด'}
         zipcodeLabel={'รหัสไปรษณีย์'}
        />
    </div>
)
```

> NOTE: For component styles you can include or use loader `./dist/styles.css` to your app or implement by yourself [styles](./dist/styles.css)

For futher more see [Example](./example/index.js)

## Performance for Perf nerd

| ไฟล์ | ขนาดไฟล์ |
| --- | ---:|
| without data.json | 69 KB 
| webpack with babili with data.json | 550 KB |
| webpack with babili with data.json gzip | **86 KB** |

## Todo
- MORE UNIT TEST
- custom styles example
- improve performance and reduce bundle size
- `data.json` lazy loading
- server-side implementation example
- using without React example
- using with google map example

## Development
- Clone this project
- run `npm install`
- start development via storybook `npm run storybook`
- navigate to `localhost:9001`

## Testing
- `npm test`

## Contribute
- open for any pullrequest
- Commitizen prefer !! 😎

## Original fork and idea 

[earthchie](https://github.com/earthchie/) - Project Owner, Original fork
(you should treat him a beer 😎🍺)
## License
- Original : WTFPL 2.0 http://www.wtfpl.net/
- Also MIT (formally)
