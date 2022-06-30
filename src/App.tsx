import React from 'react';

import PageResponsiveImage from './examples/responsive-image';

function App() {
  return (
    <>
      <div className="underline font-bold">hello</div>

      <div className="max-w-screen-xl">
        {Array(100)
          .fill(1)
          .map((el, i) => {
            const imgsrc = `https://picsum.photos/1600/900?text=${i + 1}`;
            return (
              <PageResponsiveImage key={i} src={imgsrc} imgRatio={1 / 1} />
            );
          })}
      </div>
    </>
  );
}

export default App;
