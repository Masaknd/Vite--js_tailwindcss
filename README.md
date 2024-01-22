# Vite boilerplate for Vanilla.js with TailwindCSS

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) &nbsp; ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) &nbsp; ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)<br />

## Description

Use Tailwind style framework on your products and save css file under "tailwindcss" folder.
Save main JS files to "main" under js folder. For some features, make new js files under "library folder".

## Getting Started

Clone files to your direction

### Dependencies

- pnpm need to be installed<br>
  To use npm or yarn, change "pnpm" in package.json > scripts to "npm".

### Installing

node modules installation <br>
$pnpm install

### Executing program

"dev": development mode

```
$ pnpm dev
```

"build": build mode

```
$ pnpm build
```

## Help

No specification

```

```

## Authors

Masaknd:
[@Masaknd_dsgn](https://twitter.com/Masaknd_dsgn)

## Version History

- bug detected
  Problem: inconsistency of the result of running dev mode and build
  details: background: url() images paths are not transpile correctly when running build mode

  Solution: Define the image paths by internal style css in the HTML file

- See [commit change]() or See [release history]()

## License

## Acknowledgments

Inspiration, code snippets, etc.
