### Setting Up the Database and Installing Requirements (Windows OS)
1. Install MySQL and Python on your computer

MySQL Download Link -> https://dev.mysql.com/downloads/installer/

For Python, open your computer's command prompt and enter the following lines:

	1. Download the Python installer: curl -o python-installer.exe https://www.python.org/ftp/python/3.12.2/python-3.12.2-amd64.exe

	2. Run the installer: python-installer.exe 

	Important: During installation, select "Add Python to PATH" before proceeding.
	You can run this command once done to confirm the installation is complete: python --version

	

2. Run MySQL Configurator to set up localhost credentials

3. Create a new database named 'marketplace' by executing the following code:

CREATE DATABASE marketplace;


4. Copy the code in the 'schema.sql' file, and execute it in your local instance query inside MySQL, to create a "user" table

5. Inside the 'backend' folder, open the app.py file with your code editor

6. On line 15, change the section that reads: "root:rick0645" to your own computer's localhost credentials 

(root is usually the user and is likely going to stay the same, and the password is created by the user during the MySQL [Configutaror] installation process)

7. Open your computer's command prompt

8. Go to the 'backend' file and copy the directory

9. On the command prompt type: cd "paste-your-directory" (example: cd C:\Users\Henrique\Desktop\skins-marketplace-root\backend)

10. Set up a virtual environment by running the following command: python -m venv venv

11. Start the virtual environment: venv\Scripts\activate

12. Install the requirements and extensions: pip install -r requirements.txt

13. Run the Flask application: python app.py

14. Go to the 'frontend' folder and open the file named 'homepage.html' with your browser

15. (Optional) Inside MySQL run the following command if you wish to keep track of the current user database:

USE marketplace;

SELECT * FROM user;

16. To avoid any issues, make sure the MySQL localhost server is active and running by opening MySQL and checking the server status. If it is not running, initiate the local host and run the 'MySQL Configurator' to make sure it is active.
