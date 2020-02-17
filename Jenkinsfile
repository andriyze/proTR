pipeline {
    agent any
    stages {
      stage('Build and Run') {
            steps {
                echo 'clone test app'
                echo 'start docker compose'
                sh 'whoami'
                sh 'export ENV=dockercompose'
                sh 'docker-compose -p project1 up -d --build'
                echo 'start docker compose'
                sh 'docker-compose -p project1 exec prt npm run protractor-docker'
            }
      }
      stage('Stop') {
          steps {
              echo 'Stop docker compose'
              sh 'docker-compose -p project1 down'
          }
      }
    }
}
