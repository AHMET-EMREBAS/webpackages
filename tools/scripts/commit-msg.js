#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const commitMsgFile = process.argv[2];
const commitMsg = fs.readFileSync(commitMsgFile, 'utf8').trim();

// Define your commit message validation rules
const commitMsgPrefix = 'TASK';

if (!commitMsg.startsWith(commitMsgPrefix)) {
  console.error(`Invalid commit message. Must start with '${commitMsgPrefix}'`);
  process.exit(1); // Exit with a non-zero code to indicate failure
} else {
  console.log('Commit message validation passed.');
}
