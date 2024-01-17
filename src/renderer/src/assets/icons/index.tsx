import Icon, { CustomIconComponentProps } from "@ant-design/icons/lib/components/Icon";
import Ding from "./svg/Ding";
import Maximize from "./svg/Minimize"
import Minimize from "./svg/Maximize";
import Close from "./svg/Close"
const DingIcon = (props: Partial<CustomIconComponentProps>) => (
    <Icon component={Ding} {...props} />
);

const MaximizeIcon = (props: Partial<CustomIconComponentProps>) => (
    <Icon component={Maximize} {...props} />
);

const MinimizeIcon = (props: Partial<CustomIconComponentProps>) => (
    <Icon component={Minimize} {...props} />
);

const CloseIcon = (props: Partial<CustomIconComponentProps>) => (
    <Icon component={Close} {...props} />
);



export { DingIcon, MaximizeIcon, MinimizeIcon, CloseIcon }