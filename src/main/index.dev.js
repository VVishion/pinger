/**
 * This file is used specifically and only for development. It installs
 * `electron-debug` & `vue-devtools`. There shouldn't be any need to
 *  modify this file, but it can be used to extend your development
 *  environment.
 */

/* eslint-disable */

// Install `electron-debug` with `devtron`
require('electron-debug')(/*{ showDevTools: true }*/)
// open DevTools only if site is loaded to prevent error
// https://github.com/electron/electron/issues/12438
// https://github.com/mrfelton/zap-desktop/commit/68dabe2c677b55aa493a0de8732641bf1d3c90a2

// Install `vue-devtools`
const { app } = require('electron');
app.on('ready', () => {
  let installExtension = require('electron-devtools-installer')
  installExtension.default(installExtension.VUEJS_DEVTOOLS)
    .then(() => {})
    .catch(err => {
      console.log('Unable to install `vue-devtools`: \n', err)
    })
})

// Require `main` process to boot app
const { getMainWindow } = require('./index')

// open DevTools only if site is loaded to prevent error
// show it now
app.on('ready', () => {
  const mainWindow = getMainWindow();
  mainWindow.webContents.once('dom-ready', () => {
    mainWindow.openDevTools()
  })
});
