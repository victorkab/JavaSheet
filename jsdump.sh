# Just a bash script to move the javascript file from src to tests in order to run them in an html page
# WARNING IT WILL ERASE FILE IN tests !
#!/bin/bash
#
if [ ! -d "tests/js" ]; then
    echo "Creating js directory"
    mkdir tests/js
fi
cp src/*.js tests/js
cp -R resources tests/resources