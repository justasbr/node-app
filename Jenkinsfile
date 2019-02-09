pipeline {
    agent any 

    stages {
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
