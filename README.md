# Instructions for the Take-Home Assessment

This document contains instructions for completing the take-home assessment. Please follow these steps to successfully build, test, and deploy your NodeJS application using Docker and GitHub Actions.
> All services used in this take-home assessment should use free resources, so be sure to use the free tier of all tools listed in the Prerequisites section.

## Prerequisites

Before getting started, please make sure you have the following:

- A GitHub account and a PRIVATE repository to store your code: https://github.com/signup
> For your private GitHub repository, please add jbaker@veryableops.com as a collaborater - to view your submission. How to do that: https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-access-to-your-personal-repositories/inviting-collaborators-to-a-personal-repository
- Read through the GitHub Container Registry documentation: https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry
- A Railway account and a service to host your application: https://railway.app/
    - Create a Railway account
    - Create an empty Project + Empty service (Do not connect to GitHub from Railway)

## Steps

1. Clone the repository to your local machine.
2. Edit the Dockerfile to build your NodeJS application.
3. Edit the .github/workflows/main.yml file to:
    - Run the provided tests
    - Build the docker image
    - Push the docker image to Github Container Registry repository
    - Release the docker image on Railway using the Railway CLI https://docs.railway.app/develop/cli

## Submission

1. Push your changes to your `main` branch in your PRIVATE GitHub repository.
2. Send your links for the PRIVATE GitHub repository, GitHub Container repository, and Railway service in your response.