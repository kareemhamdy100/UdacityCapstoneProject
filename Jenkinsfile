pipeline {
  agent any
  stages {
      stage('Docker-lint') {
      steps {
        sh '/home/ubuntu/.linuxbrew/bin/hadolint Dockerfile'
      }
    }

    stage('Build') {
      steps {
        sh './run_docker.sh'
      }
    }

    stage('test') {
      steps {
        sh  ' docker run udacitycapstone npm run test'
      }
    }

  }
}

