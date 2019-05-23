# OrderCRM

React Native implementation of the Order-assignment.

# Launching simulators

I implemented and tested the application mainly on iOS, on an iPhone X. That being said, it does work on Android so you can run it there too. I tested the final application on
an Android Emulator, Google Pixel 2, on Android API 28.

## First time setup

I used Yarn while developing, so there is a Yarn Lockfile available. Clone the project from github and install all recquired packages:

```
$ yarn install
```

If the installation prompts you to chose a version of Jest, you can chose the most recent version `24.8.0`

## Launch the iOS simulator

For iOS you need to have Xcode and an iOS simulator installed. Otherwise the script wont be able to launch a simulator.

There are yarn scripts available for quickly launching the application. For starting the simulator and the application, simply run:

```
$ yarn run ios
```

First time setup will take a while, but once that's done you can enable hot reloading by shaking the device (cmd + d) and enabling 'Hot Reload'.

You can can also enable remote debugging from the developer tools (cmd + d), to see console log outputs in a browser.

## Launch the Android Simulator

Likewise for Android, you can run

```
$ yarn run android
```

if you want to bring up the developer tools on android you can run

```
$ yarn shake-android
```

# Tests

The application comes with a couple of tests, mainly:

- Unit tests; for specific functions such as formatting of data or calculations.
- Integration tests; for components and scenes. These rely on the snapshots in "**tests**/**snapshots**"

There is, again, a yarn script available for testing:

```
$ yarn test
```

# Extra info

This project is implemented using TypeScript because I believe it helps to filter out bugs early on, gives us intellisense in the project which is super.

So overall this decision speeds up the development process.
It also helps with the readability and maintainability of the code, and cross team development.
