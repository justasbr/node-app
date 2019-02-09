pipeline {
    agent any 

    stages {
        stage('build'){
            steps {
                sh 'npm install'
            }
        }
        stage('Test'){
            steps {
                sh 'npm test'
            }
        }
        stage('Start') {
            steps {
                sh 'npm start'
            }
        }
    }
}
