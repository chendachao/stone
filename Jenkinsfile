pipeline {
    agent { docker { image 'node:6.3' } }
    stages {
        stage('build') {
            steps {
                sh 'npm --version'
                sh 'echo "Hello World"'
                sh '''
                      echo "Multiline shell steps works too"
                      ls -lah
                      npm i
                      npm run build
                   '''
            }
        }
    }
}
