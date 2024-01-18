/// <reference types="vite/client" />
declare global {
  namespace JSX {
    interface IntrinsicAttributes {
      hoverText?: string;
    }
  }
}

interface ButtonOptionProps {
  isMac: boolean;
  fullScreen?: boolean;
}

export default { ButtonOptionProps };
