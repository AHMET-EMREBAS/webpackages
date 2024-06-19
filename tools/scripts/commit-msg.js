#!/usr/bin/env node

const fs = require('fs');

const commitMsg = process.argv[2];

if (commitMsg.length < 5) {
  console.error(`Commit message should be longer than 5 characters`);
  process.exit(1);
}
