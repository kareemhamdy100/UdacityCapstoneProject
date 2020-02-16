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
         hadolint Dockerfile
      }
    }

  }
}