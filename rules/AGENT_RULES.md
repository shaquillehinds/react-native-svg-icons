# Agent Rules — `@shaquillehinds/react-native-svg-icons`

Rules for AI coding agents writing or modifying code that uses this package.
Read this before rendering any icon.

The failure mode with an icon library is inventing names. This set has 997 icons
per variant with irregular, sometimes misspelled names. A plausible guess is
usually wrong, and a wrong name does not throw — it logs and renders nothing.
Rule 1 exists to stop that.

---

## 0. Non-negotiables

1. **Never guess an icon name.** Verify it against the shipped type union before
   you write it. See Rule 1.
2. `type` is required and selects the name union. `filled` and `outline` are not
   fully interchangeable — 3 names differ between them.
3. Do not add `react-native-svg` `<Svg>` / `<Path>` around an icon. `SvgIcon`
   renders a complete SVG.
4. If a prop is not listed in this file, it does not exist.

---

## 1. Never guess an icon name

There is no `Search`, no `Delete`, no `Loading`, no `Bitcoin`, no `Home` outline
mismatch to rely on. Names come from a fixed generated union and include
misspellings that were baked in and must be reproduced exactly.

### Verify first

```sh
npx rnsi-icons search          # fuzzy search both variants
npx rnsi-icons search --type outline
npx rnsi-icons Trash --exact   # confirm one name
npx rnsi-icons --list > icons.txt
```

Without the CLI, grep the shipped union directly:

```sh
grep -oE "'[A-Za-z0-9]*Search[A-Za-z0-9]*'" \
  node_modules/@shaquillehinds/react-native-svg-icons/src/svgs/types.ts | sort -u
```

TypeScript will also reject an invalid name at compile time. Use that — do not
cast, do not widen to `string`, do not `as FilledIconName`. A type error here is
the system working.

### Names that do not exist, and what to use instead

These are the ones models reach for most:

| Guess                 | Reality                                                            |
| --------------------- | ------------------------------------------------------------------ |
| `Search`              | `SearchNormal`, `SearchNormal1`, `SearchStatus`, `SearchZoomIn`    |
| `Delete`              | `Trash`                                                            |
| `Loading` / `Spinner` | `Refresh`, `RotateRight`, `RotateLeft`                             |
| `Bitcoin`             | `BitcoinBtc`, `BitcoinCard`, `BitcoinConvert`                      |
| `Ethereum`            | grep — crypto icons use a `NameTicker` form (`AaveAave`, `ZelZel`) |
| `Warning`             | `Warning2` — there is no `Warning`                                 |
| `Info`                | `InfoCircle` or `Information`                                      |
| `Close`               | `CloseCircle` or `CloseSquare` — no bare `Close`                   |
| `Check` / `Checkmark` | `Check`, `TickCircle`, `TickSquare`                                |

### Misspellings that are load-bearing

These are the real, correct names. Spelling them properly breaks the build:

| Correct (use this)                                  | Natural but wrong |
| --------------------------------------------------- | ----------------- |
| `MinusCirlce`                                       | `MinusCircle`     |
| `UserCirlceAdd`                                     | `UserCircleAdd`   |
| `SendSqaure2`                                       | `SendSquare2`     |
| `MonitorMobbile`                                    | `MonitorMobile`   |
| `Battery3full`                                      | `Battery3Full`    |
| `BrifecaseCross`, `BrifecaseTick`, `BrifecaseTimer` | `Briefcase*`      |

Note `Briefcase` itself is spelled correctly while its compounds are not. Do not
normalise these. Do not "fix" one you encounter in existing code.

### Other naming quirks

- Numeric suffixes are variants, not sizes: `Home`, `Home1`, `Home2`,
  `HomeHashtag` are four different icons.
- A few names start lowercase or with a digit: `square`, `dcube`, `dRotate`,
  `dSquare`, `dCubeScan`, `4Support`.
- `4Support` is the registry key; its file is `FourSupport.tsx`. Use the key.

### Variant mismatches

994 of 997 names exist in both variants. These three do not — check before
swapping `type`:

| `filled` only           | `outline` only          |
| ----------------------- | ----------------------- |
| `ArrowPointCircleup`    | `ArrowPointCircleUp`    |
| `ArrowPointCircleRight` | `ArrowPointCircleright` |
| `FlashCircle`           | `FlashCircle2`          |

Code that flips `type` on a variable name (a focused tab bar icon, for instance)
must use a name outside this list.

---

## 2. Basic usage

```tsx
import { SvgIcon } from '@shaquillehinds/react-native-svg-icons';

<SvgIcon type="filled" name="Heart" size={24} color="#FF0000" />
<SvgIcon type="outline" name="SearchNormal" size={20} color="#8E8E93" />
```

`type` and `name` are required. `size` defaults to 24, `color` defaults to
`#292D32` (a near-black grey — **not** pure black; set `color` explicitly if you
need `#000`).

### Size is normalised

`size` is passed through `normalize()` from `@shaquillehinds/react-native-essentials`,
which scales to device dimensions. `size={24}` is a design-scale value, not a
guaranteed 24 physical points. Do not compensate by hand, and do not compute an
icon size from `Dimensions` — pass the design value.

### `filled` vs `outline` are structurally different

- **filled** — one path, coloured with `fill`. No stroke.
- **outline** — usually several paths, coloured with `stroke` at
  `strokeWidth="1.5"`, with `fill="none"` on the SVG.

This matters when overriding: `pathProps={{ fill: 'red' }}` does nothing to an
outline icon, and `pathProps={{ stroke: 'red' }}` does nothing to a filled one.
Prefer `color`, which targets the right attribute automatically.

---

## 3. Props

| Prop        | Type                           | Default     | Notes                                                 |
| ----------- | ------------------------------ | ----------- | ----------------------------------------------------- |
| `type`      | `'filled' \| 'outline'`        | required    | Selects the `name` union                              |
| `name`      | `IconNameByType[T]`            | required    | Verify it — see Rule 1                                |
| `size`      | `number`                       | `24`        | Normalised; sets width and height                     |
| `color`     | `string`                       | `'#292D32'` | `fill` on filled, `stroke` on outline                 |
| `svgProps`  | `SvgProps`                     | –           | Spread onto `<Svg>`, after `width`/`height`/`viewBox` |
| `pathProps` | `PathProps`                    | –           | Spread onto **every** `<Path>`, after `color`         |
| `animate`   | `AnimateSVGPathComponentProps` | –           | See Rule 4                                            |

Two ordering facts that decide behaviour:

- `pathProps` is spread **after** the colour attribute, so it wins over `color`.
- `svgProps` is spread after `width`/`height`/`viewBox`, so `svgProps={{ width: 40 }}`
  overrides `size`. Use `size`; do not set dimensions through `svgProps`.
- `pathProps` applies to _every_ path in the icon. On a multi-path outline icon
  you cannot style one path differently through this API.

### Type-safe wrappers

```tsx
import type {
  SvgIconProps,
  SvgIconType,
} from '@shaquillehinds/react-native-svg-icons';

function Icon<T extends SvgIconType>(props: SvgIconProps<T>) {
  return <SvgIcon {...props} />;
}
```

Keep the generic. Writing `props: SvgIconProps` collapses the union and lets an
outline-only name through on `type="filled"`.

### Typing icon arrays

```tsx
import type { OutlineIconName } from '@shaquillehinds/react-native-svg-icons';

const icons: OutlineIconName[] = [
  'House',
  'Airplane',
  'Bookmark',
  'RepeatCircle',
];
```

Always annotate. An unannotated array widens to `string[]` and every name in it
stops being checked — which is exactly how invented names reach production.

---

## 4. Animation

Two modes, set by `animate.mode`. They do not share a config shape; do not mix
their keys.

### `AnimatedPathProps` — declarative

Use this by default.

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
      { name: 'strokeDashoffset', from: 72, to: [18, 36] },
    ],
  }}
/>
```

Keys: `config` (singular), `animatedPathProps`, `isSequence`.

### `InterpolatePathProps` — manual

Use when you need interpolation the declarative form cannot express.

```tsx
animate={{
  mode: 'InterpolatePathProps',
  autoStart: true,
  loop: -1,
  returnToStart: true,
  pathProps: (value, { inputRange }) => ({
    stroke: value.interpolate({ inputRange, outputRange: ['red', 'green'] }),
    strokeDasharray: '35, 35',
  }),
  animationConfig: [{ type: 'timing', duration: 1000, useNativeDriver: true }],
}}
```

Keys: `animationConfig` (array, one entry per stage), `pathProps` as a **function**.

Note `pathProps` means something different here from the top-level `pathProps`
prop. Inside `animate`, it is a function of the animated value. At the top level
it is a static object. Both can be present.

### Rules for both modes

- Shared keys: `autoStart` (default `false`), `loop` (`-1` for infinite,
  default `0`), `returnToStart` (default `false`), `ref`.
- `useNativeDriver: false` for anything animating `stroke`, `fill`, `opacity`, or
  dash properties — which is most icon animation. `true` only for transforms.
  Getting this wrong fails silently or throws at runtime depending on platform.
- The animation applies to **every path** in the icon. Multi-path outline icons
  animate in lockstep; there is no per-path control.
- Match the mode to the variant: stroke and dash animations need `type="outline"`,
  fill animations need `type="filled"`.

### Imperative control

```tsx
import type { AnimateSVGComponentValueRef } from '@shaquillehinds/react-native-essentials';

const ref = useRef<AnimateSVGComponentValueRef>(null);

<SvgIcon
  type="filled"
  name="Play"
  animate={{ ref, autoStart: false /* ... */ }}
/>;

ref.current?.start();
ref.current?.stop();
ref.current?.reset();
ref.current?.reverse();
```

The ref type comes from `@shaquillehinds/react-native-essentials`, not this package.

---

## 5. Bundle size

`SvgIcon` resolves names through a registry that statically imports all 1,994 icon
modules. Importing `SvgIcon` anywhere pulls the whole set into the bundle.

- Do not claim or assume tree shaking removes unused icons. It does not.
- Do not build a "lighter" wrapper that maps a few names to `SvgIcon` — the
  registry is already loaded.
- If a screen needs exactly one icon and bundle size is the concern, that is a
  package-level change (deep exports), not something to work around in app code.
  Raise it rather than inventing an import path that is not exported.

The package exports `SvgIcon` (named and default) and the name types. There are no
per-icon entry points.

---

## 6. Missing icons fail quietly

An unknown `type` or `name` logs via `console.error` and returns `null`. Nothing
throws, nothing renders, layout collapses where the icon should be.

So a blank space where an icon should be is almost always a bad name, not a
styling problem. Check the name before adjusting layout.

---

## 7. Common patterns

### Tab bar

```tsx
function TabIcon({ focused, name }: { focused: boolean; name: IconName }) {
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

Only safe for names present in both variants — see the mismatch table in Rule 1.

### Icon button

```tsx
<TouchableOpacity onPress={onPress}>
  <SvgIcon type="filled" name="Heart" size={24} color="#FF0000" />
</TouchableOpacity>
```

Do not wrap in an extra `<View>` for sizing; `size` handles it.

---

## 8. Review checklist

- [ ] Every icon name verified against the type union, not guessed
- [ ] Misspelled names reproduced exactly (`MinusCirlce`, `SendSqaure2`, …)
- [ ] Icon name arrays annotated with `FilledIconName` / `OutlineIconName`
- [ ] No `as` cast or `string` widening on a `name`
- [ ] Names that flip between variants checked against the 3 mismatches
- [ ] `color` used rather than `pathProps` fill/stroke overrides
- [ ] `size` used rather than `svgProps` width/height
- [ ] `useNativeDriver: false` for colour, stroke, opacity and dash animation
- [ ] Animation mode keys not mixed (`config` vs `animationConfig`)
- [ ] Stroke animations on `outline`, fill animations on `filled`
- [ ] No claim that unused icons are tree-shaken away
