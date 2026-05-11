# react-native-svg-icons

A comprehensive, type-safe SVG icon library for React Native with 997+ icons in both filled and outline variants.

<p align="center">
<img src="https://raw.githubusercontent.com/shaquillehinds/react-native-svg-icons/master/assets/svgicons.gif" alt="example" height="500"/>
</p>

## Features

- 🎨 **997+ Icons** - Extensive collection covering UI elements, social media, crypto, arrows, shapes, and more
- 🔒 **Fully Type-Safe** - TypeScript-first with auto-generated types ensuring icon names are validated at compile time
- 🎭 **Dual Variants** - Every icon available in both `filled` and `outline` styles
- ⚡ **Performance Optimized** - Tree-shakeable with efficient SVG rendering via `react-native-svg`
- 🎨 **Highly Customizable** - Control size, color, and pass custom SVG/Path props
- ✨ **Built-in Animations** - Powerful animation support with two modes: interpolation-based and property-based animations
- 🔧 **Zero Configuration** - Works out of the box with sensible defaults

## Installation

```bash
npm install @shaquillehinds/react-native-svg-icons react-native-svg @shaquillehinds/react-native-essentials
```

or

```bash
yarn add @shaquillehinds/react-native-svg-icons react-native-svg @shaquillehinds/react-native-essentials
```

**Note:** This package requires `react-native-svg` and `@shaquillehinds/react-native-essentials` as peer dependencies.

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
| `animate`   | `AnimateSVGPathComponentProps`      | `undefined` | Animation configuration (see Animation section)  |

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

## Animation

The `animate` prop provides powerful, built-in animation capabilities for your icons. There are two animation modes available:

### Animation Modes

#### 1. InterpolatePathProps Mode

This mode gives you fine-grained control by providing an `Animated.Value` that you can interpolate to create complex animations. Perfect for custom animations where you need full control over the interpolation.

**Key Features:**

- Direct access to the animated value for interpolation
- Support for multiple animation stages
- Full control over timing, spring animations, and easing

**Props:**

- `mode`: `"InterpolatePathProps"`
- `animationConfig`: Single or array of animation configs (timing/spring)
- `pathProps`: Function that receives the animated value and returns path properties
- `autoStart`: Auto-start animation on mount (default: false)
- `returnToStart`: Return to initial state after animation (default: false)
- `loop`: Number of times to loop (-1 for infinite, default: 0)

**Example - Color and Stroke Animation:**

```tsx
<SvgIcon
  name="FingerScan"
  type="outline"
  size={100}
  animate={{
    mode: 'InterpolatePathProps',
    autoStart: true,
    loop: -1,
    returnToStart: true,
    pathProps: (value, { inputRange }) => ({
      strokeLinejoin: 'miter',
      stroke: value.interpolate({
        inputRange,
        outputRange: ['red', 'green'],
      }),
      strokeDashoffset: value.interpolate({
        inputRange,
        outputRange: [36, 0],
      }),
      strokeDasharray: '35, 35',
    }),
    animationConfig: [
      {
        type: 'timing',
        duration: 1000,
        useNativeDriver: true,
      },
    ],
  }}
/>
```

**Example - Multi-stage Animation:**

```tsx
<SvgIcon
  name="Heart"
  type="filled"
  size={80}
  animate={{
    mode: 'InterpolatePathProps',
    autoStart: true,
    loop: -1,
    pathProps: (value, { inputRange }) => ({
      fill: value.interpolate({
        inputRange,
        outputRange: ['#FF0000', '#FF69B4', '#FF1493', '#FF0000'],
      }),
      opacity: value.interpolate({
        inputRange,
        outputRange: [0.5, 1, 0.8, 0.5],
      }),
    }),
    animationConfig: [
      { type: 'timing', duration: 500, useNativeDriver: false },
      { type: 'timing', duration: 500, useNativeDriver: false },
      { type: 'timing', duration: 500, useNativeDriver: false },
    ],
  }}
/>
```

#### 2. AnimatedPathProps Mode

This mode provides a simpler, declarative API where you specify which properties to animate and their values. The library handles the interpolation for you.

**Key Features:**

- Declarative API - just specify from/to values
- Animate multiple properties simultaneously or in sequence
- Support for numeric and string values (colors, dash arrays, etc.)

**Props:**

- `mode`: `"AnimatedPathProps"`
- `config`: Animation configuration (timing/spring)
- `animatedPathProps`: Array of properties to animate
- `isSequence`: Animate properties in sequence vs parallel (default: false)
- `autoStart`: Auto-start animation on mount (default: false)
- `returnToStart`: Return to initial state after animation (default: false)
- `loop`: Number of times to loop (-1 for infinite, default: 0)

**Example - Parallel Animation:**

```tsx
<SvgIcon
  name="Scanning"
  type="outline"
  size={100}
  animate={{
    mode: 'AnimatedPathProps',
    autoStart: true,
    loop: -1,
    returnToStart: true,
    config: {
      type: 'timing',
      duration: 2000,
      useNativeDriver: false,
    },
    animatedPathProps: [
      {
        name: 'stroke',
        from: 'red',
        to: ['green', 'blue'],
      },
      {
        name: 'strokeDasharray',
        from: '18, 18',
        to: ['36, 36', '18, 18'],
      },
      {
        name: 'strokeDashoffset',
        from: 72,
        to: [18, 36],
      },
    ],
  }}
/>
```

**Example - Sequential Animation:**

```tsx
<SvgIcon
  name="Star"
  type="filled"
  size={60}
  animate={{
    mode: 'AnimatedPathProps',
    isSequence: true,
    autoStart: true,
    loop: -1,
    config: {
      type: 'spring',
      tension: 40,
      friction: 7,
      useNativeDriver: false,
    },
    animatedPathProps: [
      {
        name: 'fill',
        from: '#FFD700',
        to: ['#FFA500', '#FFD700'],
      },
      {
        name: 'opacity',
        from: 1,
        to: [0.5, 1],
      },
    ],
  }}
/>
```

### Animation Configuration Types

Both modes support two types of animation configs:

#### Timing Animation

```tsx
{
  type: "timing",
  duration: 1000,
  delay?: 0,
  easing?: Easing.linear,
  useNativeDriver: true, // or false for color/transform animations
}
```

#### Spring Animation

```tsx
{
  type: "spring",
  tension?: 40,
  friction?: 7,
  speed?: 12,
  bounciness?: 8,
  useNativeDriver: true, // or false for color/transform animations
}
```

### Controlling Animations with Refs

You can control animations programmatically using refs:

```tsx
import { useRef } from 'react';
import type { AnimateSVGComponentValueRef } from '@shaquillehinds/react-native-essentials';

function ControlledIcon() {
  const animationRef = useRef<AnimateSVGComponentValueRef>(null);

  const handleStart = () => animationRef.current?.start();
  const handleStop = () => animationRef.current?.stop();
  const handleReset = () => animationRef.current?.reset();
  const handleReverse = () => animationRef.current?.reverse();

  return (
    <>
      <SvgIcon
        name="Play"
        type="filled"
        size={60}
        animate={{
          ref: animationRef,
          mode: 'InterpolatePathProps',
          autoStart: false,
          pathProps: (value) => ({
            fill: value.interpolate({
              inputRange: [0, 1],
              outputRange: ['#00FF00', '#FF0000'],
            }),
          }),
          animationConfig: {
            type: 'timing',
            duration: 1000,
            useNativeDriver: false,
          },
        }}
      />
      <Button title="Start" onPress={handleStart} />
      <Button title="Stop" onPress={handleStop} />
      <Button title="Reset" onPress={handleReset} />
      <Button title="Reverse" onPress={handleReverse} />
    </>
  );
}
```

### Common Animation Patterns

#### Pulsing Effect

```tsx
<SvgIcon
  name="Notification"
  type="filled"
  size={40}
  animate={{
    mode: 'AnimatedPathProps',
    autoStart: true,
    loop: -1,
    returnToStart: true,
    config: { type: 'timing', duration: 1000, useNativeDriver: false },
    animatedPathProps: [{ name: 'opacity', from: 1, to: [0.3, 1] }],
  }}
/>
```

#### Rotating Stroke Dash

```tsx
<SvgIcon
  name="Loading"
  type="outline"
  size={50}
  animate={{
    mode: 'AnimatedPathProps',
    autoStart: true,
    loop: -1,
    config: { type: 'timing', duration: 1500, useNativeDriver: false },
    animatedPathProps: [
      {
        name: 'strokeDashoffset',
        from: 0,
        to: [100],
      },
    ],
  }}
/>
```

#### Color Wave

```tsx
<SvgIcon
  name="Wave"
  type="outline"
  size={80}
  animate={{
    mode: 'InterpolatePathProps',
    autoStart: true,
    loop: -1,
    pathProps: (value) => ({
      stroke: value.interpolate({
        inputRange: [0, 0.33, 0.66, 1],
        outputRange: ['#FF0000', '#00FF00', '#0000FF', '#FF0000'],
      }),
    }),
    animationConfig: [
      { type: 'timing', duration: 3000, useNativeDriver: false },
    ],
  }}
/>
```

### Performance Notes

- Set `useNativeDriver: true` when animating transform properties for better performance
- Set `useNativeDriver: false` when animating colors, stroke properties, or opacity
- For complex animations, consider using `InterpolatePathProps` mode for better control
- Use `AnimatedPathProps` mode for simpler, declarative animations

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

See the [Animation](#animation) section for comprehensive examples of animating icons with the built-in `animate` prop.

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

Icons curated and optimized for React Native. Built with TypeScript and `react-native-svg`.

---

**Made with ❤️ for the React Native community**
