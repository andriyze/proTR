pipeline {
    agent any
    stages {
        stage('Build and Run') {
            steps {
                echo 'start docker compose'
                export ENV=dockercompose
                docker-compose -p project1 up -d --build
                docker-compose -p project1 exec prt npm run protractor-docker
            }
        }
        stage('Stop') {
            steps {
                echo 'Stop docker compose'
                docker-compose -p project1 down
            }
        }
    }
}
