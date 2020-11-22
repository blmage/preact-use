import { useEffect, useState } from 'preact/hooks';

export interface Layout {
  left: boolean;
  middle: boolean;
  right: boolean;
  back: boolean;
  forward: boolean;
}

const layouts = new Array(31);

function getLayout(key) {
  if (!layouts[key]) {
    layouts[key] = Object.freeze({
      left: Boolean(key & 1),
      middle: Boolean(key & 4),
      right: Boolean(key & 2),
      back: Boolean(key & 8),
      forward: Boolean(key & 16),
    });
  }

  return layouts[key];
}

export default () => {
  const [mouseButtons, setMouseButtons] = useState<Layout>(getLayout(0));

  useEffect(() => {
    const updateMouseButtons = event => setMouseButtons(getLayout(event.mouseButtons));

    document.addEventListener('mousedown', updateMouseButtons);
    document.addEventListener('mouseup', updateMouseButtons);

    return () => {
      document.removeEventListener('mousedown', updateMouseButtons);
      document.removeEventListener('mouseup', updateMouseButtons);
    };
  });

  return mouseButtons;
};
