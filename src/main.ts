import {
  aws_ec2 as ec2,
  aws_ecs as ecs,
  aws_ecs_patterns as pattern,
} from 'aws-cdk-lib';
import { Construct } from 'constructs';

// create a BarProp interface for Bar
export interface BarProps {
  readonly vpc?: ec2.Vpc;
}


// create a Bar construct
export class Bar extends Construct {
  readonly vpc: ec2.IVpc;
  constructor(scope: Construct, id: string, props?: BarProps) {
    super(scope, id);

    this.vpc = props?.vpc ?? this.createVpc();
    // create a ALB Fargate service
    new pattern.ApplicationLoadBalancedFargateService(this, 'Service', {
      // vpc: ec2.Vpc.fromLookup(this, 'Vpc', { isDefault: true }),
      taskImageOptions: {
        image: ecs.ContainerImage.fromRegistry('nginx:latest'),
        containerPort: 80,
      },
    });
  }
  // private createVpc() function
  private createVpc(): ec2.Vpc {
    return new ec2.Vpc(this, 'Vpc', { natGateways: 1 });
  };
}