pipeline {
  agent any
  stages {
    stage('Docker-lint') {
      steps {
        sh ' sudo hadolint Dockerfile'
      }
    }

  }
}