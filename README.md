# 0x0-frontend

## Require
- Latest node v18
- Latest [npm]([https://yarnpkg.com/getting-started/install](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm))

## Setup
- run `npm i` in root folder

## Local Dev
- run `npm run dev` in root folder.

## Deploying to environments:

### Setup:
1) Install the `aws-cli` tool
2) Get an admin to create an AWS IAM user for you and give you credentials
2) Setup your IAM user with aws-cli inside `~/.aws/credentials`

### Build:
1) Navigate to `packages/app` or `packages/landing` folder.
2) Ensure `REACT_APP_API_BASE_URL` is set correctly in `.env` for the environment you want to deploy to:
    - prod: `https://api.0x0.com`
    - test: `https://api-test.0x0.com`

3) To build the 0x0 app for an environment, run the following inside `packages/app`:
    - prod: run `yarn build:mainnet`
    - test: run `yarn build:fuji`

    To build for the 0x0 homepage, for either environment: run `yarn build` in `packages/landing`

4) Within each package folder you need to deploy, run : `aws s3 sync build/ s3://BUCKET_NAME --delete`
5) After syncing the build folder with the corresponding s3 bucket in (2), run aws `cloudfront create-invalidation --distribution-id DIST_ID --paths "/*"` to tell the cdn to re-sync with the s3 bucket

### Deploy

### AWS BUCKET_NAMEs:

- `0x0-app-test`
- `0x0-homepage-test`
- `0x0-app`
- `0x0-homepage`

### AWS DIST_IDs:

- `EST6A33FOX2KM`   ➡️ 0x0 App site (test)
- `E2RDKTN39H2LWY`  ➡️ 0x0 Homepage site (test)
- `E21DUNWZRYF1MZ`  ➡️ 0x0 App site (prod)
- `E3C8CQEFTD470H`  ➡️ 0x0 Homepage site (prod)

ALWAYS MAKE 100% SURE YOU ARE DEPLOYING TO THE CORRECT BUCKET out of the 4
