pipeline {
  agent any
  stages {
      stage('Docker-lint') {
      steps {
        sh '/home/ubuntu/.linuxbrew/bin/hadolint ./BlueBuild/Dockerfile'
        sh '/home/ubuntu/.linuxbrew/bin/hadolint ./GreenBuild/Dockerfile'
      }
    }
    stage('Build') {
      steps {
        sh 'docker build -t blueudacitycapstone ./BlueBuild'
        sh 'docker build -t greenudacitycapstone ./GreenBuild'
      }
    }
    stage('test') {
      steps {
        sh  'docker run blueudacitycapstone npm run test'
        sh  'docker run greenudacitycapstone npm run test'
      }
    }
    stage('push-docker-images') {
      steps {
        withDockerRegistry([credentialsId: "dockerHup", url:""]){
              sh  './BlueBuild/docker_upload.sh'
              sh  './GreenBuild/docker_upload.sh'
        }
      }
    }
  }
}

