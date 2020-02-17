pipeline {
    agent any
    stages {
        stage('Build and Run') {
            steps {
                echo 'download app'
                sh 'cd app && ./download-demo-app.sh'
            }
        }
        stage('Stop') {
            steps {
                echo 'run '
                
            }
        }
    }
}
