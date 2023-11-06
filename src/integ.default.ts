import {
  App, Stack,
  aws_ec2 as ec2,
} from 'aws-cdk-lib';

import { Bar } from './main';

const app = new App();

const env = { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION };

const stack = new Stack(app, 'BarStack', { env });

// import default vpc
const vpc = ec2.Vpc.fromLookup(stack, 'Vpc', { isDefault: true });

new Bar(stack, 'Bar', { vpc: vpc });
