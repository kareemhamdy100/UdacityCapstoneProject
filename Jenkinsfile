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
            sh  '''
                    docker tag blueudacitycapstone kareem5020/blueudacitycapstone
                    docker push kareem5020/blueudacitycapstone
                  '''

              sh  '''
                    docker tag greenudacitycapstone kareem5020/greenudacitycapstone
                    docker push kareem5020/greenudacitycapstone
                  '''
        }
      }
    }
     stage('update-configFile') {
      steps {
        withAWS(credentials: 'udacity_capstone'){
         sh '''
                aws eks --region us-east-1 update-kubeconfig --name udacityCapstoneProject
                 kubectl get svc
            '''
        }
       
      }
    }
  }
}

