import Icon, {
  CustomIconComponentProps,
} from "@ant-design/icons/lib/components/Icon";
import Ding from "./svg/Ding";
import Maximize from "./svg/Minimize";
import Minimize from "./svg/Maximize";
import Close from "./svg/Close";
import Minimizetion from "./svg/Minimizetion";
import Images from "./svg/Images";
import FolderOpen from "./svg/FolderOpen";
import Folder from "./svg/Folder";
import History from "./svg/History";
import Heart from "./svg/Heart";
import Box from "./svg/Box";
const DingIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={Ding} {...props} />
);

const MinimizeIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={Minimize} {...props} />
);

const MaximizeIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={Maximize} {...props} />
);

const CloseIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={Close} {...props} />
);

const MinimizetionIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={Minimizetion} {...props} />
);

const ImagesIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={Images} {...props} />
);

const FolderOpenIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={FolderOpen} {...props} />
);

const FolderIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={Folder} {...props} />
);

const HistoryIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={History} {...props} />
);

const HeartIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={Heart} {...props} />
);

const BoxIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={Box} {...props} />
);

export {
  DingIcon,
  MaximizeIcon,
  MinimizeIcon,
  CloseIcon,
  MinimizetionIcon,
  ImagesIcon,
  FolderOpenIcon,
  FolderIcon,
  HistoryIcon,
  HeartIcon,
  BoxIcon,
};
