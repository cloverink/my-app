import React from 'react';

import PageResponsiveImage from './examples/responsive-image';

function App() {
  return (
    <>
      <div className="underline font-bold">hello my-app</div>
      <div className="max-w-screen-xl">
        {Array(1)
          .fill(1)
          .map((el, i) => {
            const imgsrc = `https://picsum.photos/1600/900?text=${i + 1}`;
            return (
              <PageResponsiveImage key={i} src={imgsrc} imgRatio={16 / 9} />
            );
          })}
        {Array(1)
          .fill(1)
          .map((el, i) => {
            const imgsrc = `https://picsum.photos/600/400?text=${i + 1}`;
            return (
              <PageResponsiveImage key={i} src={imgsrc} imgRatio={3 / 2} />
            );
          })}
      </div>
    </>
  );
}

export default App;
