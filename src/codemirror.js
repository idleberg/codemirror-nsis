/*! codemirror-nsis | MIT License | github.com/idleberg/codemirror-nsis */

import { name, states, mime } from './nsis';

CodeMirror.defineSimpleMode(name, states);
CodeMirror.defineMIME(mime.type, mime.spec);
