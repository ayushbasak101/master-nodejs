#  npm Notes

##  What is npm?

* **npm** stands for **Node Package Manager**.
* It is the default package manager for **Node.js**.
* Used to manage **dependencies**, **scripts**, and **project configurations**.

---

##  Common Commands

### Install packages

```bash
npm install <package-name>
# or shorthand
npm i <package-name>
```
We have installed Express ( in package.json `)
### Save as dev dependency

```bash
npm i <package-name> --save-dev
```

###  Install all dependencies from package.json

```bash
npm install
```

###  Uninstall a package

```bash
npm uninstall <package-name>
```

---

##  Key Files and Folders

### `package.json`

* Metadata about the project.
* Lists dependencies, scripts, version, etc.

### `package-lock.json`

* Records the exact version of every installed package.
* Ensures consistent installs across environments.

### `node_modules/`

* Contains all installed packages.
* Should be added to `.gitignore`.

---

##  Scripts

Define custom scripts in `package.json`:

```json
"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js",
  "test": "jest"
}
```

Run a script:

```bash
npm run dev
```

---

##  Global vs Local Packages

* **Local**: Installed in `node_modules/` and used in the current project.
* **Global**: Installed system-wide.

```bash
npm install -g <package-name>
```

---

##  Useful Commands

| Command                   | Description                        |
| ------------------------- | ---------------------------------- |
| `npm init`                | Create a new `package.json` file   |
| `npm update`              | Update installed packages          |
| `npm outdated`            | Check outdated packages            |
| `npm list`                | List installed packages            |
| `npm audit`               | Check for security vulnerabilities |
| `npm cache clean --force` | Clear npm cache (if needed)        |

---

##  .npmrc & Ignore

* Use `.npmrc` to customize npm config.
* Add `node_modules/` to `.gitignore`.

---
##  Understanding `^5.1.0` in package.json

###  Meaning
`^5.1.0` allows npm to install:
- The exact version `5.1.0`, **or**
- Any **newer minor or patch version**, like `5.2.0`, `5.3.1`, etc.
- But **not** `6.0.0` or above.
---
###  Why?
- The `^` symbol allows **non-breaking changes** based on [Semantic Versioning (semver)](https://semver.org/).
- It keeps your project **up to date** without accidentally introducing breaking changes.
---
###  Examples
| Specified | Allowed Versions         | Disallowed Versions |
|----------|--------------------------|----------------------|
| `^5.1.0` | `5.1.1`, `5.2.0`, `5.9.9` | `6.0.0`, `6.1.0`     |

---
###  Tip
Use `^` when you want minor/patch upgrades but want to avoid breaking changes from major version updates.
---