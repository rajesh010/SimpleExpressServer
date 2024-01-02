pipeline {
    agent any

    options {
        buildDiscarder(logRotator(artifactDaysToKeepStr: '', artifactNumToKeepStr: '', daysToKeepStr: '', numToKeepStr: '10'))
    }

    stages {
        stage('Checkout') {
            steps {
                // Check out the code from the GitHub repository
                checkout scm
            }
        }

        stage('Build and Deploy') {
            steps {
                // Run docker-compose up
                script {
                    // sh 'docker-compose up -d'
                    sh 'whoami && id && groups && docker-compose up -d'
                }
            }
        }
    }

    post {
        success {
            echo 'Pipeline succeeded! Deployment complete.'
        }
        failure {
            echo 'Pipeline failed! Deployment aborted.'
        }
    }
}
