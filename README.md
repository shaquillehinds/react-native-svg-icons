# @shaquillehinds/react-native-svg-icons

A type-safe SVG icon set for React Native. 997 icons in each of two variants —
`filled` and `outline` — with icon names validated at compile time and built-in
path animation.

---

## Contents

- [Installation](#installation)
- [Quick start](#quick-start)
- [Finding icon names](#finding-icon-names)
- [Props](#props)
- [Filled vs outline](#filled-vs-outline)
- [TypeScript](#typescript)
- [Animation](#animation)
- [Bundle size](#bundle-size)
- [Recipes](#recipes)
- [Troubleshooting](#troubleshooting)
- [AI agent rules](#ai-agent-rules)

---

## Installation

```bash
npm install @shaquillehinds/react-native-svg-icons react-native-svg @shaquillehinds/react-native-essentials
```

`react-native-svg` and `@shaquillehinds/react-native-essentials` are peer
dependencies.

iOS:

```bash
cd ios && pod install
```

---

## Quick start

```tsx
import { SvgIcon } from '@shaquillehinds/react-native-svg-icons';

function MyComponent() {
  return (
    <>
      <SvgIcon type="filled" name="Heart" size={24} color="#FF0000" />
      <SvgIcon type="outline" name="SearchNormal" size={20} color="#8E8E93" />
    </>
  );
}
```

`type` and `name` are required. `type` also selects which name union `name` is
checked against, so an outline-only name on `type="filled"` is a compile error.

---

## Finding icon names

Names are irregular. Some concepts have no obvious name (`Search` does not exist;
`SearchNormal` does), some families carry misspellings that are part of the real
name, and a handful of names start with a lowercase letter or a digit. Look names
up rather than guessing.

### CLI

```sh
npx rnsi-icons search                  # fuzzy match across both variants
npx rnsi-icons arrow --type outline    # restrict to one variant
npx rnsi-icons Trash --exact           # confirm a single name
npx rnsi-icons --diff                  # names missing from one variant
npx rnsi-icons --list --shared         # every name present in both
npx rnsi-icons search --json           # machine-readable
```

`--limit N` caps output (default 40; `--limit 0` for everything).

### Editor

`name` is a string-literal union, so autocomplete lists valid names inline and
TypeScript rejects anything else. Do not silence that with a cast.

### Names people expect that do not exist

| Expected             | Actual                                         |
| -------------------- | ---------------------------------------------- |
| `Search`             | `SearchNormal`, `SearchStatus`, `SearchZoomIn` |
| `Delete`             | `Trash`                                        |
| `Loading`, `Spinner` | `Refresh`, `RotateLeft`, `RotateRight`         |
| `Warning`            | `Warning2`                                     |
| `Info`               | `InfoCircle`, `Information`                    |
| `Close`              | `CloseCircle`, `CloseSquare`                   |
| `Bitcoin`            | `BitcoinBtc`, `BitcoinCard`, `BitcoinConvert`  |

### Misspellings that are part of the name

These are the correct spellings as shipped. The "corrected" version will not
compile:

`MinusCirlce` · `UserCirlceAdd` · `SendSqaure2` · `MonitorMobbile` ·
`Battery3full` · `BrifecaseCross` · `BrifecaseTick` · `BrifecaseTimer`

`Briefcase` on its own is spelled normally; only its compounds are not.

### Other conventions

- Numeric suffixes mark variants, not sizes — `Home`, `Home1`, `Home2` and
  `HomeHashtag` are four distinct icons.
- A few names begin lowercase or with a digit: `square`, `dcube`, `dRotate`,
  `dSquare`, `dCubeScan`, `4Support`.
- `4Support` is the name to pass, even though its source file is `FourSupport.tsx`.

### Variant coverage

994 names exist in both variants. Three do not:

| `filled` only           | `outline` only          |
| ----------------------- | ----------------------- |
| `ArrowPointCircleup`    | `ArrowPointCircleUp`    |
| `ArrowPointCircleRight` | `ArrowPointCircleright` |
| `FlashCircle`           | `FlashCircle2`          |

Anything that switches `type` on a fixed name — a focused tab icon, a
pressed-state toggle — should avoid these six.

---

## Props

| Prop        | Type                           | Default     | Description                                      |
| ----------- | ------------------------------ | ----------- | ------------------------------------------------ |
| `type`      | `'filled' \| 'outline'`        | required    | Variant, and the union `name` is checked against |
| `name`      | `IconNameByType[T]`            | required    | Icon name                                        |
| `size`      | `number`                       | `24`        | Width and height, normalised for the device      |
| `color`     | `string`                       | `'#292D32'` | `fill` on filled icons, `stroke` on outline      |
| `svgProps`  | `SvgProps`                     | –           | Spread onto the `<Svg>` element                  |
| `pathProps` | `PathProps`                    | –           | Spread onto every `<Path>` in the icon           |
| `animate`   | `AnimateSVGPathComponentProps` | –           | See [Animation](#animation)                      |

Three details worth knowing before you reach for `svgProps` or `pathProps`:

- **`size` is normalised.** It runs through `normalize()` from
  `@shaquillehinds/react-native-essentials`, which scales against device
  dimensions. Treat `size` as a design-scale value rather than exact points, and
  don't compute it from `Dimensions` yourself.
- **`pathProps` overrides `color`.** It is spread after the fill/stroke
  attribute. Same for `svgProps` and `size` — `svgProps={{ width: 40 }}` wins.
  Prefer `color` and `size`.
- **`pathProps` hits every path.** Outline icons are usually several paths. There
  is no per-path styling through this API.

The default colour is `#292D32`, a near-black grey. If you need true black, pass
`color="#000"` explicitly.

---

## Filled vs outline

The two variants are drawn differently, which changes what you can override and
animate.

|              | `filled` | `outline`       |
| ------------ | -------- | --------------- |
| Paths        | One      | Usually several |
| Coloured via | `fill`   | `stroke`        |
| Stroke width | –        | `1.5`           |
| SVG `fill`   | `none`   | `none`          |

Consequences:

- `pathProps={{ fill: 'red' }}` does nothing to an outline icon.
- `pathProps={{ stroke: 'red' }}` does nothing to a filled icon.
- Stroke and dash animations only make sense on `outline`; fill animations on
  `filled`.
- Adjust outline weight with `pathProps={{ strokeWidth: 2 }}`.

`color` targets the right attribute for the variant automatically — prefer it.

---

## TypeScript

```tsx
import type {
  FilledIconName, // union of all filled names
  OutlineIconName, // union of all outline names
  IconName, // both
  SvgIconType, // 'filled' | 'outline'
  SvgIconProps, // component props, generic over type
  SvgIcon as SvgIconBaseProps,
} from '@shaquillehinds/react-native-svg-icons';
```

### Annotate icon arrays

```tsx
const icons: OutlineIconName[] = [
  'House',
  'Airplane',
  'Bookmark',
  'RepeatCircle',
];
```

Without the annotation the array widens to `string[]` and every name in it stops
being checked — the most common way an invalid name reaches runtime.

### Keep the generic in wrappers

```tsx
function Icon<T extends SvgIconType>(props: SvgIconProps<T>) {
  return <SvgIcon {...props} />;
}
```

Writing `props: SvgIconProps` collapses the union and lets an outline-only name
pass on `type="filled"`.

---

## Animation

Every icon accepts an `animate` prop. Two modes, with different config shapes.

Shared options, both modes:

| Option          | Type                                            | Default  | Description                       |
| --------------- | ----------------------------------------------- | -------- | --------------------------------- |
| `mode`          | `'AnimatedPathProps' \| 'InterpolatePathProps'` | required | Selects the shape below           |
| `autoStart`     | `boolean`                                       | `false`  | Start on mount                    |
| `loop`          | `number`                                        | `0`      | `-1` for infinite                 |
| `returnToStart` | `boolean`                                       | `false`  | Reverse back to the initial state |
| `ref`           | `AnimateSVGComponentValueRef`                   | –        | Imperative control                |

### `AnimatedPathProps` — declarative

Specify what to animate and its values; interpolation is handled for you. Start
here.

```tsx
<SvgIcon
  type="outline"
  name="Scanning"
  size={100}
  animate={{
    mode: 'AnimatedPathProps',
    autoStart: true,
    loop: -1,
    returnToStart: true,
    isSequence: false,
    config: { type: 'timing', duration: 2000, useNativeDriver: false },
    animatedPathProps: [
      { name: 'stroke', from: 'red', to: ['green', 'blue'] },
      { name: 'strokeDasharray', from: '18, 18', to: ['36, 36', '18, 18'] },
      { name: 'strokeDashoffset', from: 72, to: [18, 36] },
    ],
  }}
/>
```

| Option              | Type                    | Description                                        |
| ------------------- | ----------------------- | -------------------------------------------------- |
| `config`            | timing or spring config | Single config for the whole animation              |
| `animatedPathProps` | `{ name, from, to }[]`  | Properties to animate; `to` is an array of stages  |
| `isSequence`        | `boolean`               | Run properties in sequence rather than in parallel |

### `InterpolatePathProps` — manual

Gives you the `Animated.Value` to interpolate yourself. Use when the declarative
form can't express what you need.

```tsx
<SvgIcon
  type="outline"
  name="FingerScan"
  size={100}
  animate={{
    mode: 'InterpolatePathProps',
    autoStart: true,
    loop: -1,
    returnToStart: true,
    pathProps: (value, { inputRange }) => ({
      strokeLinejoin: 'miter',
      stroke: value.interpolate({ inputRange, outputRange: ['red', 'green'] }),
      strokeDashoffset: value.interpolate({ inputRange, outputRange: [36, 0] }),
      strokeDasharray: '35, 35',
    }),
    animationConfig: [
      { type: 'timing', duration: 1000, useNativeDriver: false },
    ],
  }}
/>
```

| Option            | Type                                   | Description                                                  |
| ----------------- | -------------------------------------- | ------------------------------------------------------------ |
| `animationConfig` | config or config array                 | One entry per stage; `inputRange` is derived from the length |
| `pathProps`       | `(value, { inputRange }) => PathProps` | Returns path props from the animated value                   |

Note `animate.pathProps` (a function) is distinct from the top-level `pathProps`
prop (a static object). Both can be present; the top-level object is applied
first and the animated result merged over it.

### Config shapes

```tsx
{ type: 'timing', duration: 1000, delay: 0, easing: Easing.linear, useNativeDriver: false }
{ type: 'spring', tension: 40, friction: 7, speed: 12, bounciness: 8, useNativeDriver: false }
```

### `useNativeDriver`

Use `false` for `stroke`, `fill`, `opacity` and dash properties — which covers
most icon animation. `true` is only valid for transform-based animation. The
native driver cannot animate SVG path attributes, and getting this wrong fails
silently on one platform and throws on the other.

### Animation applies to every path

Multi-path outline icons animate in lockstep. There is no per-path targeting
through this API.

### Imperative control

```tsx
import { useRef } from 'react';
import type { AnimateSVGComponentValueRef } from '@shaquillehinds/react-native-essentials';

function ControlledIcon() {
  const ref = useRef<AnimateSVGComponentValueRef>(null);

  return (
    <>
      <SvgIcon
        type="filled"
        name="Play"
        size={60}
        animate={{
          ref,
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
      <Button title="Start" onPress={() => ref.current?.start()} />
      <Button title="Stop" onPress={() => ref.current?.stop()} />
      <Button title="Reset" onPress={() => ref.current?.reset()} />
      <Button title="Reverse" onPress={() => ref.current?.reverse()} />
    </>
  );
}
```

The ref type is exported from `@shaquillehinds/react-native-essentials`.

---

## Bundle size

`SvgIcon` resolves names through a registry that statically imports all 1,994 icon
modules. Importing `SvgIcon` anywhere brings the full set into the bundle —
unused icons are not tree-shaken away.

In practice the icons are small path strings and the cost is modest, but plan for
it rather than assuming per-icon shaking. There are currently no per-icon entry
points; the package exports `SvgIcon` and the name types.

---

## Recipes

### Icon button

```tsx
<TouchableOpacity onPress={onPress}>
  <SvgIcon type="filled" name="Heart" size={24} color="#FF0000" />
</TouchableOpacity>
```

### Tab bar

```tsx
function TabBarIcon({ focused, name }: { focused: boolean; name: IconName }) {
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

Only safe for names present in both variants.

### Icon grid

```tsx
import type { FilledIconName } from '@shaquillehinds/react-native-svg-icons';

const icons: FilledIconName[] = ['Heart', 'Star', 'User', 'Setting', 'Home'];

<View style={{ flexDirection: 'row', gap: 16 }}>
  {icons.map((icon) => (
    <SvgIcon key={icon} type="filled" name={icon} size={32} color="#000" />
  ))}
</View>;
```

### Pulse

```tsx
<SvgIcon
  type="filled"
  name="Notification"
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

### Draw-on stroke

```tsx
<SvgIcon
  type="outline"
  name="TickCircle"
  size={64}
  animate={{
    mode: 'AnimatedPathProps',
    autoStart: true,
    config: { type: 'timing', duration: 800, useNativeDriver: false },
    animatedPathProps: [{ name: 'strokeDashoffset', from: 100, to: [0] }],
  }}
/>
```

Pair with `pathProps={{ strokeDasharray: '100, 100' }}` to set the dash pattern.

---

## Troubleshooting

**Nothing renders where an icon should be.** Almost always a bad name. An unknown
`type` or `name` logs through `console.error` and returns `null` — it does not
throw. Check the console, then verify with `npx rnsi-icons <fragment>`.

**TypeScript rejects a name that looks right.** Check the misspelling list, and
check whether the name exists in the variant you passed to `type`
(`npx rnsi-icons --diff`).

**Icon renders at the wrong size.** `size` is normalised for the device, so it
won't match physical points exactly. Also check nothing is passing `width` or
`height` through `svgProps`, which overrides it.

**`color` has no effect.** Something in `pathProps` is overriding it — it is
spread last. Also check you aren't setting `fill` on an outline icon or `stroke`
on a filled one.

**Animation doesn't run.** `autoStart` defaults to `false`. If it is set, check
`useNativeDriver` is `false` for colour, stroke, opacity and dash animation.

**Animation config is ignored.** The two modes use different keys —
`AnimatedPathProps` takes `config` and `animatedPathProps`, `InterpolatePathProps`
takes `animationConfig` and a `pathProps` function. Mixing them silently drops
the unrecognised half.

**Icons missing entirely after install.** Confirm `react-native-svg` is linked,
run `pod install` on iOS, and rebuild — a Metro reload is not enough for a new
native dependency.

---

## AI agent rules

The package ships a rules file written for AI coding agents (Claude Code, Cursor,
Codex, Copilot, etc.) at `rules/AGENT_RULES.md`. It tells an agent to verify every
icon name against the shipped type union instead of guessing one, spells out the
misspelled names and variant mismatches it would otherwise "correct", and
documents both animation modes so it cannot mix their config keys. Point your
agent at it with any of the following.

**Copy it into your project (recommended)**

```sh
npx rnsi-rules            # writes ./AGENTS.md
npx rnsi-rules cursor     # writes ./.cursor/rules/react-native-svg-icons.mdc (alwaysApply)
npx rnsi-rules claude     # writes ./.claude/rules/react-native-svg-icons.md
npx rnsi-rules codex      # writes ./.codex/rules/react-native-svg-icons.md
npx rnsi-rules copilot    # writes ./.github/instructions/react-native-svg-icons.instructions.md
npx rnsi-rules windsurf   # writes ./.windsurf/rules/react-native-svg-icons.md
npx rnsi-rules docs/ai/svg-icons.md   # custom path
```

Add `--force` to overwrite an existing file. `--print` writes the rules to stdout
instead of to disk. Re-run after upgrading the package to pick up rule changes.

**Reference it without copying (Claude Code)**

`CLAUDE.md` supports `@path` imports, so a single line keeps the rules in sync with
the installed version:

```md
# CLAUDE.md

@node_modules/@shaquillehinds/react-native-svg-icons/rules/AGENT_RULES.md
```

**Reference it from a generic `AGENTS.md`**

```md
Before using any icon, read and follow
node_modules/@shaquillehinds/react-native-svg-icons/rules/AGENT_RULES.md.
Never guess an icon name — verify it with `npx rnsi-icons <query>`.
```

---

## License

MIT
