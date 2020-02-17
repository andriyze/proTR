pipeline {
    agent any
    stages {
        stage('Build and Run') {
            steps {
                echo 'start docker compose'
                export ENV=dockercompose
                sh 'docker-compose -p project1 up -d --build'
                sh 'docker-compose -p project1 exec prt npm run protractor-docker'
            }
        }
        stage('Stop docker') {
            steps {
                echo 'Stop docker compose'
                sh 'docker-compose -p project1 down'
            }
        }
    }
}
