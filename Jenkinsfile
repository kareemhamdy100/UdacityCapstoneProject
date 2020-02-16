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
     stage('Test') {
      steps {
        sh 'docker exec -it udacitycapstone npm test'
      }
    }
  
  

  }
}

