pipeline {
  agent any
  stages {
      stage('Docker-lint') {
      steps {
        sh '/home/ubuntu/.linuxbrew/bin/hadolint Dockerfile'
      }
    }

    stage('Build-test') {
      steps {
        sh './run_docker.sh'
      }
    }

  }
}

