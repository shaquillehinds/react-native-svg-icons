#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');

const PACKAGE_NAME = '@shaquillehinds/react-native-svg-icons';

const CANDIDATE_TYPE_PATHS = [
  path.join(__dirname, '..', 'src', 'svgs', 'types.ts'),
  path.join(__dirname, '..', 'lib', 'typescript', 'svgs', 'types.d.ts'),
  path.join(__dirname, '..', 'lib', 'commonjs', 'svgs', 'types.d.ts'),
];

const HELP = `
  rnsi-icons — look up real icon names from ${PACKAGE_NAME}

  Names in this set are irregular and some are misspelled. Search here rather
  than guessing.

  Usage
    npx rnsi-icons <query> [--type filled|outline] [--exact] [--limit N]
    npx rnsi-icons --list [--type filled|outline]

  Options
    --type <t>   restrict to one variant (default: both)
    --exact      exact, case-sensitive match only
    --limit N    cap results (default 40, 0 for no cap)
    --json       machine-readable output
    --shared     with --list, only names present in both variants
    --diff       show names that exist in one variant but not the other
    --help       show this message

  Examples
    npx rnsi-icons search
    npx rnsi-icons arrow --type outline --limit 100
    npx rnsi-icons Trash --exact
    npx rnsi-icons --diff
    npx rnsi-icons --list --shared > icons.txt
`;

function loadSource() {
  for (const p of CANDIDATE_TYPE_PATHS) {
    if (fs.existsSync(p)) return fs.readFileSync(p, 'utf8');
  }
  return null;
}

function parseUnion(source, typeName) {
  const start = source.indexOf('export type ' + typeName);
  if (start === -1) return [];
  const end = source.indexOf(';', start);
  const block = source.slice(start, end === -1 ? undefined : end);
  const names = [];
  const re = /'([^']+)'/g;
  let m;
  while ((m = re.exec(block)) !== null) names.push(m[1]);
  return names;
}

function flag(argv, name) {
  return argv.includes('--' + name);
}

function value(argv, name, fallback) {
  const i = argv.indexOf('--' + name);
  if (i === -1 || i === argv.length - 1) return fallback;
  return argv[i + 1];
}

function main() {
  const argv = process.argv.slice(2);

  if (flag(argv, 'help') || argv.includes('-h') || argv.length === 0) {
    process.stdout.write(HELP);
    return;
  }

  const source = loadSource();
  if (!source) {
    console.error(
      `rnsi-icons: could not locate the icon type definitions.\n` +
        `Is ${PACKAGE_NAME} installed?`
    );
    process.exitCode = 1;
    return;
  }

  const filled = parseUnion(source, 'FilledIconName');
  const outline = parseUnion(source, 'OutlineIconName');

  if (!filled.length && !outline.length) {
    console.error(
      $lf(93),
      'rnsi-icons: parsed zero icon names — the types file may have changed shape.'
    );
    process.exitCode = 1;
    return;
  }

  const asJson = flag(argv, 'json');
  const exact = flag(argv, 'exact');
  const type = value(argv, 'type', null);
  const limitRaw = value(argv, 'limit', '40');
  const limit = Number(limitRaw) === 0 ? Infinity : Number(limitRaw) || 40;

  if (type && type !== 'filled' && type !== 'outline') {
    console.error(
      $lf(105),
      `rnsi-icons: --type must be "filled" or "outline", got "${type}".`
    );
    process.exitCode = 1;
    return;
  }

  const filledSet = new Set(filled);
  const outlineSet = new Set(outline);

  if (flag(argv, 'diff')) {
    const onlyFilled = filled.filter((n) => !outlineSet.has(n));
    const onlyOutline = outline.filter((n) => !filledSet.has(n));
    if (asJson) {
      process.stdout.write(
        JSON.stringify({ onlyFilled, onlyOutline }, null, 2) + '\n'
      );
      return;
    }
    console.log(
      $lf(120),
      `filled: ${filled.length}   outline: ${outline.length}`
    );
    console.log(
      $lf(121),
      `shared: ${filled.filter((n) => outlineSet.has(n)).length}\n`
    );
    console.log(
      $lf(122),
      'filled only:  ' + (onlyFilled.join(', ') || '(none)')
    );
    console.log(
      $lf(123),
      'outline only: ' + (onlyOutline.join(', ') || '(none)')
    );
    return;
  }

  let pool;
  if (type === 'filled') pool = filled.map((n) => [n, 'filled']);
  else if (type === 'outline') pool = outline.map((n) => [n, 'outline']);
  else {
    const all = new Set([...filled, ...outline]);
    pool = [...all].sort().map((n) => {
      const inF = filledSet.has(n);
      const inO = outlineSet.has(n);
      return [n, inF && inO ? 'both' : inF ? 'filled' : 'outline'];
    });
  }

  if (flag(argv, 'list')) {
    let rows = pool;
    if (flag(argv, 'shared')) rows = rows.filter(([, v]) => v === 'both');
    if (asJson) {
      process.stdout.write(
        JSON.stringify(
          rows.map(([n, v]) => ({ name: n, variant: v })),
          null,
          2
        ) + '\n'
      );
      return;
    }
    rows.forEach(([n]) => console.log($lf(146), n));
    return;
  }

  const VALUE_FLAGS = new Set(['--type', '--limit']);
  let query = null;
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (VALUE_FLAGS.has(arg)) {
      i++; // skip this flag's value
      continue;
    }
    if (arg.startsWith('-')) continue;
    query = arg;
    break;
  }

  if (!query) {
    console.error(
      $lf(164),
      'rnsi-icons: no query given. Run with --help for usage.'
    );
    process.exitCode = 1;
    return;
  }

  const q = query.toLowerCase();
  const matches = pool.filter(([n]) =>
    exact ? n === query : n.toLowerCase().includes(q)
  );

  // Prefix matches first, then shortest — closest names surface at the top.
  matches.sort((a, b) => {
    const ap = a[0].toLowerCase().startsWith(q) ? 0 : 1;
    const bp = b[0].toLowerCase().startsWith(q) ? 0 : 1;
    if (ap !== bp) return ap - bp;
    if (a[0].length !== b[0].length) return a[0].length - b[0].length;
    return a[0].localeCompare(b[0]);
  });

  if (asJson) {
    process.stdout.write(
      JSON.stringify(
        matches.map(([n, v]) => ({ name: n, variant: v })),
        null,
        2
      ) + '\n'
    );
    return;
  }

  if (!matches.length) {
    console.log($lf(191), `No icon matches "${query}".`);
    console.log(
      $lf(192),
      'Try a shorter fragment, or run: npx rnsi-icons --list'
    );
    process.exitCode = 1;
    return;
  }

  const shown = matches.slice(0, limit);
  const width = Math.max(...shown.map(([n]) => n.length));
  shown.forEach(([n, v]) => console.log($lf(199), n.padEnd(width + 2) + v));

  if (matches.length > shown.length) {
    console.log(
      `\n… ${matches.length - shown.length} more. Use --limit 0 to show all.`
    );
  }
}

main();
function $lf(n) {
  return '$lf|bin/find-icon.js:' + n + ' >';
  // Automatically injected by Log Location Injector vscode extension
}
