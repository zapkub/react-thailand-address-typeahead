import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { withState } from 'recompose';
import AddressForm from '../src/index';

import '../src/styles.css';

storiesOf('Component', module)
  .add('montage', () => (
    <div style={{ width: 350 }}>
      <AddressForm onAddressSelected={action('onSelectedAdress')} />
      <code>{'<AddressForm onAddressSelected={action(\'onSelectedAdress\')} />'}</code>
    </div>
  ))
  .add('handle result', () => {
    const WithStateComponent = withState('result', 'setResult', null)(({ result, setResult }) => (
      <div style={{ width: 350 }}>
        <div>
          selected : {result ? `${result.p} ${result.a} ${result.d} ${result.z}` : null}
        </div>
        <AddressForm onAddressSelected={address => setResult(address)} />
      </div>
    ));
    return (<div>
      <WithStateComponent />
      <code>
        {`
         <div style={{ width: 350 }}>
          <div>
            selected : {result ? \`\${result.p} \${result.a} \${result.d} \${result.z}\` : null}
          </div>
          <AddressForm onAddressSelected={address => setResult(address)} />
        </div>
        `}
      </code>
    </div>);
  })
  .add('custom render result', () => (
    <div style={{ width: 400 }}>
      <AddressForm
        renderResult={data => <b>{`Hi ${data.p}:${data.d} ${data.a}`}</b>}
        onAddressSelected={action('onSelectedAdress')}
      />
    </div>
  ))
  .add('set value', () => (
    <div style={{ width: 350 }}>
      <AddressForm
        values={{
          a: 'คลองสาน',
          d: 'คลองต้นไทร',
          p: 'กรุงเทพมหานคร',
          z: '10600',
        }}
        onAddressSelected={action('onSelectedAdress')}
      />
      <code>
        {`
          <AddressForm
            values={{
              a: 'คลองสาน',
              d: 'คลองต้นไทร',
              p: 'กรุงเทพมหานคร',
              z: '10600',
            }}
            onAddressSelected={action('onSelectedAdress')}
          />
        `}
      </code>
    </div>
  ))

