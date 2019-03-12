#!/bin/bash
cd ap-dapp/
npm run docker:remove
cd ../ap/
npm run docker:remove
cd ../clauses
npm run docker:remove
cd ../clin
npm run docker:remove
cd ../evaluationcriteria
npm run docker:remove
cd ../forms
npm run docker:remove
cd ../funding
npm run docker:remove
cd ../igce
npm run docker:remove
cd ../requisitionrequestform
npm run docker:remove
cd ../sections
npm run docker:remove
cd ../slin
npm run docker:remove
cd ../sow
npm run docker:remove
cd ../ap-dapp
npm run docker:build
cd ../ap
npm run docker:build
cd ../clauses
npm run docker:build
cd ../clin
npm run docker:build
cd ../evaluationcriteria
npm run docker:build
cd ../forms
npm run docker:build
cd ../funding
npm run docker:build
cd ../igce
npm run docker:build
cd ../requisitionrequestform
npm run docker:build
cd ../sections
npm run docker:build
cd ../slin
npm run docker:build
cd ../sow
npm run docker:build
cd ../ap-dapp
npm run docker:run
cd ../ap
npm run docker:run
cd ../clauses
npm run docker:run
cd ../clin
npm run docker:run
cd ../evaluationcriteria
npm run docker:run
cd ../forms
npm run docker:run
cd ../funding
npm run docker:run
cd ../igce
npm run docker:run
cd ../requisitionrequestform
npm run docker:run
cd ../sections
npm run docker:run
cd ../slin
npm run docker:run
cd ../sow
npm run docker:run

