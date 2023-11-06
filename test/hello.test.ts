import {
  assertions,
  App, Stack,
} from 'aws-cdk-lib';
import { Bar } from '../src';

test('match snapshot', () => {
  const app = new App();
  const stack = new Stack(app, 'BarStack');
  new Bar(stack, 'Bar');
  const template = assertions.Template.fromStack(stack);
  expect(template).toMatchSnapshot();
});

// make sure the stack has the required AWS resources
test('stack has resources', () => {
  const app = new App();
  const stack = new Stack(app, 'BarStack');
  new Bar(stack, 'Bar');
  const template = assertions.Template.fromStack(stack);
  // we have at least one ALB
  template.hasResourceProperties('AWS::ElasticLoadBalancingV2::LoadBalancer', {
    Type: 'application',
  });
});