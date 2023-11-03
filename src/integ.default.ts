import {
  App, Stack,
} from 'aws-cdk-lib';

import { Bar } from './main';

const app = new App();

const stack = new Stack(app, 'BarStack');

new Bar(stack, 'Bar');
