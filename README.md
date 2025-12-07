#

A comprehensive, type-safe SVG icon library for React Native with 997+ icons in both filled and outline variants.

## Features

- 🎨 **997+ Icons** - Extensive collection covering UI elements, social media, crypto, arrows, shapes, and more
- 🔒 **Fully Type-Safe** - TypeScript-first with auto-generated types ensuring icon names are validated at compile time
- 🎭 **Dual Variants** - Every icon available in both `filled` and `outline` styles
- ⚡ **Performance Optimized** - Tree-shakeable with efficient SVG rendering via `react-native-svg`
- 🎨 **Highly Customizable** - Control size, color, and pass custom SVG/Path props
- 🔧 **Zero Configuration** - Works out of the box with sensible defaults

## Installation

```bash
npm install @shaquillehinds/react-native-svg-icons react-native-svg
```

or

```bash
yarn add @shaquillehinds/react-native-svg-icons react-native-svg
```

**Note:** This package requires `react-native-svg` as a peer dependency.

### iOS Setup

For iOS, you'll need to install pods:

```bash
cd ios && pod install
```

## Usage

### Basic Usage

```tsx
import { SvgIcon } from '@shaquillehinds/react-native-svg-icons';

function MyComponent() {
  return <SvgIcon type="filled" name="Heart" size={24} color="#FF0000" />;
}
```

### With Outline Variant

```tsx
<SvgIcon type="outline" name="Heart" size={24} color="#000000" />
```

### Custom SVG Props

```tsx
<SvgIcon
  type="filled"
  name="Star"
  size={32}
  color="#FFD700"
  svgProps={{
    opacity: 0.8,
    style: { marginRight: 8 },
  }}
/>
```

### Custom Path Props

```tsx
<SvgIcon
  type="outline"
  name="User"
  size={28}
  color="#333"
  pathProps={{
    strokeWidth: 2,
    strokeLinecap: 'round',
  }}
/>
```

## API Reference

### `<SvgIcon />`

The main component for rendering icons.

#### Props

| Prop        | Type                                | Default     | Description                                      |
| ----------- | ----------------------------------- | ----------- | ------------------------------------------------ |
| `type`      | `'filled' \| 'outline'`             | Required    | The icon variant to render                       |
| `name`      | `FilledIconName \| OutlineIconName` | Required    | The name of the icon (type-safe based on `type`) |
| `size`      | `number`                            | `24`        | The size of the icon in pixels                   |
| `color`     | `string`                            | `'#000000'` | The color of the icon                            |
| `svgProps`  | `SvgProps`                          | `undefined` | Additional props to pass to the SVG component    |
| `pathProps` | `PathProps`                         | `undefined` | Additional props to pass to the Path component   |

### Type Exports

```tsx
import type {
  FilledIconName, // Union type of all filled icon names
  OutlineIconName, // Union type of all outline icon names
  IconName, // Union of both filled and outline names
  SvgIconType, // 'filled' | 'outline'
  SvgIconProps, // Component props type
} from '@shaquillehinds/react-native-svg-icons';
```

## Available Icons

This library includes 997+ icons across various categories:

### Categories

- **UI Elements**: Add, Remove, Edit, Delete, Search, Filter, Menu, Close, etc.
- **Arrows & Navigation**: Arrow variations in all directions, chevrons, points, swaps
- **Social Media**: Facebook, Twitter, Instagram, YouTube, LinkedIn, etc.
- **Crypto**: Bitcoin, Ethereum, various altcoin logos
- **Shapes**: Circles, squares, triangles, hexagons, etc.
- **Media**: Play, Pause, Stop, Record, Camera, Video, Music
- **Communication**: Message, Call, Email, Notification, Chat
- **Files & Folders**: Document, Folder, Archive, Cloud, Download, Upload
- **Commerce**: Shopping bag, cart, wallet, card, tag
- **User & Profile**: User, Profile, Avatar, Account, Team
- **Time & Calendar**: Clock, Calendar, Timer, Alarm
- **Location**: Map, Location, GPS, Compass, Globe
- **Weather**: Sun, Moon, Cloud, Rain, Storm
- **Security**: Lock, Unlock, Shield, Key, Eye, Scan
- **Devices**: Mobile, Tablet, Desktop, Laptop, Watch
- **And many more...**

### Example Icon Names

```tsx
// UI Elements
('Add',
  'AddCircle',
  'AddSquare',
  'Remove',
  'Edit',
  'Delete',
  'Search',
  'Filter');

// Arrows
('ArrowUp',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowChevronUp',
  'ArrowCircleDown');

// Social Media
('Facebook', 'Instagram', 'Twitter', 'Youtube', 'Linkedin', 'Tiktok');

// Crypto
('Bitcoin', 'Ethereum', 'Binance', 'Cardano', 'Polygon', 'Solana');

// Media
('Play',
  'Pause',
  'Stop',
  'Record',
  'VolumeUp',
  'VolumeDown',
  'Camera',
  'Video');

// Communication
('Message',
  'Messages',
  'Call',
  'Calling',
  'Sms',
  'Notification',
  'NotificationBing');

// Files
('Document', 'Folder', 'FolderOpen', 'Archive', 'CloudAdd', 'CloudDownload');

// Commerce
('Bag',
  'ShoppingBag',
  'ShoppingCart',
  'Wallet',
  'Card',
  'Tag',
  'TicketDiscount');

// User
('User', 'Profile', 'ProfileCircle', 'People', 'UserAdd', 'UserRemove');

// Time
('Clock', 'Calendar', 'Timer', 'Alarm', 'Watch', 'TimeCircle');

// Location
('Location', 'Map', 'Gps', 'DirectionRight', 'GlobalSearch', 'RouteSquare');

// Security
('Lock', 'Unlock', 'Shield', 'ShieldTick', 'Eye', 'EyeSlash', 'Scan', 'Key');
```

## TypeScript Support

This library is built with TypeScript and provides full type safety. Icon names are validated based on the selected type:

```tsx
// ✅ Valid - 'Heart' exists in filled icons
<SvgIcon type="filled" name="Heart" />

// ✅ Valid - 'Heart' exists in outline icons
<SvgIcon type="outline" name="Heart" />

// ❌ TypeScript Error - 'InvalidIcon' doesn't exist
<SvgIcon type="filled" name="InvalidIcon" />

// Type-safe with generics
function IconWrapper<T extends SvgIconType>(props: SvgIconProps<T>) {
  return <SvgIcon {...props} />;
}
```

## Examples

### Creating an Icon Button

```tsx
import { TouchableOpacity } from 'react-native';
import { SvgIcon } from '@shaquillehinds/react-native-svg-icons';

function IconButton({ onPress }: { onPress: () => void }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <SvgIcon type="filled" name="Heart" size={24} color="#FF0000" />
    </TouchableOpacity>
  );
}
```

### Tab Bar Icons

```tsx
import { SvgIcon } from '@shaquillehinds/react-native-svg-icons';

function TabBarIcon({
  focused,
  name,
}: {
  focused: boolean;
  name: 'Home' | 'Search' | 'Profile';
}) {
  return (
    <SvgIcon
      type={focused ? 'filled' : 'outline'}
      name={name}
      size={24}
      color={focused ? '#007AFF' : '#8E8E93'}
    />
  );
}
```

### Dynamic Icon List

```tsx
import { View } from 'react-native';
import { SvgIcon } from '@shaquillehinds/react-native-svg-icons';
import type { FilledIconName } from '@shaquillehinds/react-native-svg-icons';

function IconGrid() {
  const icons: FilledIconName[] = ['Heart', 'Star', 'User', 'Setting', 'Home'];

  return (
    <View style={{ flexDirection: 'row', gap: 16 }}>
      {icons.map((icon) => (
        <SvgIcon key={icon} type="filled" name={icon} size={32} color="#000" />
      ))}
    </View>
  );
}
```

### Animated Icons

```tsx
import { Animated } from 'react-native';
import { SvgIcon } from '@shaquillehinds/react-native-svg-icons';

function AnimatedIcon() {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const handlePress = () => {
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 1.2,
        duration: 150,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
      <SvgIcon type="filled" name="Heart" size={32} color="#FF0000" />
    </Animated.View>
  );
}
```

## Performance Tips

1. **Avoid Inline Styles**: Define styles outside of render functions
2. **Memoize Icon Components**: Use `React.memo` for frequently re-rendered icons
3. **Use Appropriate Sizes**: Stick to common sizes (16, 20, 24, 32, 48) for better caching
4. **Tree Shaking**: Only imported icons are included in your bundle

```tsx
import { memo } from 'react';
import { SvgIcon } from '@shaquillehinds/react-native-svg-icons';

const MemoizedIcon = memo(SvgIcon);

// Use MemoizedIcon for better performance
<MemoizedIcon type="filled" name="Heart" size={24} color="#FF0000" />;
```

## Troubleshooting

### Icons not displaying

1. Ensure `react-native-svg` is properly installed and linked
2. For iOS, run `pod install` in the ios directory
3. Rebuild your app after installation

### TypeScript errors with icon names

1. Ensure you're using the correct icon name (check the available icons list)
2. Verify the icon exists for the specified type (`filled` or `outline`)
3. Update your TypeScript version if you see unexpected errors

### Size or color not applying

1. Verify you're passing valid numeric values for `size`
2. Ensure color values are valid CSS color strings
3. Check if parent components are overriding styles

## Contributing

Contributions are welcome! Please ensure:

- Icons follow the existing naming convention
- Both filled and outline variants are provided
- Types are auto-generated using the provided scripts
- Examples are updated if adding new categories

## License

MIT

## Credits

Icons curated and optimized for React Native. Built with TypeScript, VueSax and `react-native-svg`.

---

**Made with ❤️ for the React Native community**
