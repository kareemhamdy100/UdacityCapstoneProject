pipeline {
    agent any
    stages {
         stage('Docker-lint') {
            steps {
                sh 'hadolint Dockerfile'
            }
        }
       
    }
}