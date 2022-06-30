import React from 'react';

import PageResponsiveImage from './examples/responsive-image';

function App() {
  return (
    <div>
      <div className="underline font-bold">hello</div>
      <div className="max-w-screen-xl">
        <PageResponsiveImage
          src="https://dummyimage.com/1600x900/000/fff"
          imgRatio={16 / 9}
        />
      </div>
    </div>
  );
}

export default App;
