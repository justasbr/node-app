pipeline {
    agent any 

    tools {nodejs "nodejs"}

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
