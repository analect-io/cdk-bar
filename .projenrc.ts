import { awscdk } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Colum McCoole',
  authorAddress: 'colum.mccoole@analect.com',
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.0.0',
  name: 'cdk-bar',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/analect-io/cdk-bar.git',
  githubOptions: {
    mergify: false,
  },
  devDeps: [
    'aws-cdk',
    'ts-node',
  ],
  publishToPypi: {
    distName: 'cdk-bar',
    module: 'cdk_bar',
  },
  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});

const common_exclude = ['cdk.out', 'cdk.context.json'];

project.npmignore!.exclude(...common_exclude);
project.gitignore.exclude(...common_exclude);

project.synth();