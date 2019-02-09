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
            script {
              docker.withTool('docker') {
                  def customImage = docker.build("node-app-image:${env.BUILD_ID}")
                  customImage.inside {
			sh 'npm install && npm test'
		  }
              }
            }
          }
        }
    }
}
