pipeline {
    agent any

    tools {
        nodejs "nodejs"
    }

    stages {
        stage('Install dependencies'){
            steps {
                sh 'npm install'
            }
        }
        stage('Test'){
            steps {
                sh 'npm test'
            }
        }
        stage('Build docker'){
          steps {
                sh "docker build -t node-app-image ."
                sh "docker tag node-app-image:latest justasbr/node-app-repo:latest"
          }
        stage("Push docker"){
           steps {
                sh "docker push justasbr/node-app-repo:latest"
          }
        }
    }
  }
}
