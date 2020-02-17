pipeline {
    agent any
    stages {
        stage('Download app') {
            steps {
                echo 'download app'
                sh 'rm -rf protractor'
                sh 'cd app && ./download-demo-app.sh'
            }
        }
        stage('Run app') {
            steps {
                echo 'run'
                sh 'cd protractor && npm i && npm start &'
            }
        }
        stage('Run tests') {
            steps {
                echo 'e2e'
                sh 'cd tests && npm i && npm start'
            }
        }
    }
}
