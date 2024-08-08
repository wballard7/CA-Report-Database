Steps for this to run
- make a folder to contain pg db via docker volumes: mkdir -p $HOME/docker/volumes/postgres
- start a postgres dbms on your local docker environment with this command: 
    docker run --rm --name pg-docker -e POSTGRES_PASSWORD=docker -d -p 5432:5432 -v $HOME/docker/volumes/postgres:/var/lib/postgresql/data postgres
- update knexfile.js with pg dbms connection details