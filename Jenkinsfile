pipeline {
    agent any 

    tools {
        nodejs "nodejs"
        docker "docker"
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
        stage('Build docker image'){
            steps {
                sh 'docker build -t node-app .'
            }
        }
    }
}
