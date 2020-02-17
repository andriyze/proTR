pipeline {
    agent any
    stages {
        stage('Download app') {
            steps {
                echo 'download app'
                sh 'rm -rf app/protractor'
                sh 'cd app && ./download-demo-app.sh'
            }
        }
        stage('Run app') {
            steps {
                echo 'run'
                nodejs(nodeJSInstallationName: 'Node 6.x') {
                    sh 'cd app/protractor && npm i && npm start &'
                } 
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
