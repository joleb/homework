# Getting started
## Setting up the environment
Check this link out : [https://docs.expo.dev/get-started/set-up-your-environment](https://docs.expo.dev/get-started/set-up-your-environment/?platform=ios&device=physical&mode=development-build&buildEnv=local)
## Installation
```bash
yarn
```
## Running the app
```bash
yarn run ios
```
## Running tests
```bash
yarn test
```
## Running lint
```bash
yarn lint
```
## Running e2e tests
First install maestro: [Maestro](https://maestro.mobile.dev/getting-started/installing-maestro)
and add your credentials here `.env.local` like this:
```bash
EXPO_PUBLIC_EMAIL=username@email.com
EXPO_PUBLIC_PASSWORD=veryverystrongpassword
```
Dont worry, this file is in the `.gitignore` so your credentials will not be pushed to the repository.

Then run the following command:
```bash
maestro e2e/general.yaml
```