import React, {useState} from 'react';
import Browser from './Browser';

export default function AppView() {
  const base = 'https://captchapays.com';
  const [state, setState] = useState({
    link: base,
  });

  const updateState = data => setState({...state, ...data});

  return <Browser base={base} state={state} updateState={updateState} />;
}
