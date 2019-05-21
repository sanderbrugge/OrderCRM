/**
 * Imported this npm package without a declaration file, so I made my own.
 */
declare module "react-native-raw-bottom-sheet" {
  interface RBSheetTypeProps {
    animationType?: "none" | "slide" | "fade";
    height?: number;
    minClosingHeight?: number;
    duration?: number;
    closeOnSwipeDown?: boolean;
    closeOnPressMask?: boolean;
    customStyles?: {};
    onClose?: () => void;
    children?: React.ReactNode;
  }

  export default class RBSheet extends React.Component<RBSheetTypeProps, any> {
    constructor();
    open(): void;
    close(): void;
  }
}
