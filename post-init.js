#!/usr/bin/env node

const copyIosPersonalAccountConfig = async () => {};
const generateAndroidDebugKeystore = async () => {};

const main = async () => {
  await Promise.all([
    copyIosPersonalAccountConfig(),
    generateAndroidDebugKeystore(),
  ]);
};

// Promise is handled by caller.
// noinspection JSIgnoredPromiseFromCall
main();
