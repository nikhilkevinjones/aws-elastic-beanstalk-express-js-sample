# AWS Elastic Beanstalk Node.js Sample App

This repository contains a sample Node.js web application built using [Express](https://expressjs.com/), meant to be used as part of the AWS DevOps Learning Path.

## Security

See [CONTRIBUTING](CONTRIBUTING.md#security-issue-notifications) for more information.

## License

This library is licensed under the MIT-0 License. See the LICENSE file.

# Create A Continuous Delivery Pipeline
The project involves setting up a Git repo, deploy a sample web app, and create a continuous delivery pipeline.

Services used:
AWS Elastic Beanstalk, AWS CodeBuild, and AWS CodePipeline

The Architecture of the Web App: 
![arch](https://github.com/nikhilkevinjones/aws-elastic-beanstalk-express-js-sample/blob/main/Architecture.png)

The result:

A fully functional continuous delivery pipeline is hosted on AWS. Also I have used AWS CodePipeline to add a review stage with manual approval to our continuous delivery pipeline. Now, the code changes will have to be reviewed and approved before they are deployed to AWS Elastic Beanstalk.

![result](https://github.com/nikhilkevinjones/aws-elastic-beanstalk-express-js-sample/blob/main/Screenshot%202024-05-03%20231913.png)
