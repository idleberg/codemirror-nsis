# codemirror-nsis

[![npm](https://flat.badgen.net/npm/license/codemirror-nsis)](https://www.npmjs.org/package/codemirror-nsis)
[![npm](https://flat.badgen.net/npm/v/codemirror-nsis)](https://www.npmjs.org/package/codemirror-nsis)
[![CI](https://img.shields.io/github/actions/workflow/status/idleberg/codemirror-nsis/default.yml?style=flat-square)](https://github.com/idleberg/codemirror-nsis/actions)


A mode for [NSIS](https://nsis.sourceforge.io/) to use with [CodeMirror](https://codemirror.net/), the versatile text editor implemented in JavaScript for the browser.

[Demo Time](https://idleberg.github.io/codemirror-nsis/) 🙌

## Installation

Use your preferred [Node](https://nodejs.org) package manager to install the mode

```sh
$ yarn add codemirror-nsis || npm install codemirror-nsis
```

Alternatively, you can clone this repository

```sh
$ git clone https://github.com/idleberg/codemirror-nsis
```

## Usage

Example usage on website

```html
<!DOCTYPE html>
<html>
<head>
  <!-- Import CodeMirror styles -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/codemirror@5/lib/codemirror.min.css">
<head>
</head>
<body>
  <!-- Add Textarea -->
  <textarea id="editor"></textarea>

  <!-- Import CodeMirror library -->
  <script defer src="https://cdn.jsdelivr.net/npm/codemirror@5/lib/codemirror.min.js"></script>

  <!-- Import NSIS mode -->
  <script defer type="module" src="https://cdn.jsdelivr.net/npm/codemirror-nsis@latest/dist/codemirror-nsis.mjs"></script>

  <!-- Initialize CodeMirror -->
  <script type="text/javascript">
    const editor = document.getElementById('editor');
    const options = {
      lineNumbers: true,
      mode: 'nsis'
    };

    CodeMirror.fromTextArea(editor, options);
  </script>
</body>
</html>
```

**Note**: If you want to load CodeMirror from a CDN, make sure to specify a specific version for better performance – the example above doesn't to keep it simple.

## License

Released under [The MIT License](http://opensource.org/licenses/MIT)
