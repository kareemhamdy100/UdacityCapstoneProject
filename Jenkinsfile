pipeline {
  agent any
  stages {
       stage('Build') {
      steps {
        sh 'echo "hello world"'
      }
    }
    stage('Docker-lint') {
      steps {
        sh 'hadolint Dockerfile'
      }
    }

  }
}