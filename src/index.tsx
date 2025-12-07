import { iconRegistry } from './svgs/registry';
import type { IconNameByType } from './svgs/types';

export type { FilledIconName, IconName, OutlineIconName } from './svgs/types';

export type SvgIconType = 'filled' | 'outline';
export type SvgIcon = { size?: number; color?: string };

// Type-safe props - icon name is validated based on type
export type SvgIconProps<T extends SvgIconType = SvgIconType> = SvgIcon & {
  type: T;
  name: IconNameByType[T];
};

export function SvgIcon<T extends SvgIconType>({
  type,
  name,
  size,
  color,
}: SvgIconProps<T>) {
  const icons = iconRegistry[type];
  if (!icons) {
    console.error($lf(23), `Icons not found: ${type}`);
    return null;
  }
  const Icon = icons[name as keyof typeof icons] as
    | React.FC<SvgIcon>
    | undefined;

  if (!Icon) {
    console.error($lf(31), `Icon not found: ${type}/${name}`);
    return null;
  }

  return <Icon size={size} color={color} />;
}

export default SvgIcon;

function $lf(n: number) {
  return '$lf|components/src/index.tsx:' + n + ' >';
  // Automatically injected by Log Location Injector vscode extension
}
