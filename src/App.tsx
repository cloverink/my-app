import React from 'react';

import { ResponsiveImage } from './components';

function App() {
  return (
    <div>
      <div className="underline font-bold">hello</div>
      <div className="max-w-xs">
        <ResponsiveImage src="https://dummyimage.com/500x500/000/fff" />
      </div>
    </div>
  );
}

export default App;
