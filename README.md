### Setting Up the Database and Installing Requirements (Windows OS)
1. Install MySQL on your computer

2. Run MySQL Configurator to set up localhost credentials

3. Create a new database named 'marketplace' by executing the following code:

CREATE DATABASE marketplace;


4. Copy the code in the 'schema.sql' file, and execute it in your local instance query inside MySQL

5. Inside the 'backend' folder, open the app.py file with your code editor

6. On line 15, change the section that reads: "root:rick0645" to your own computer's localhost credentials 

(root is usually the user and is likely going to stay the same, and the password is created by the user during the MySQL [Configutaror] installation proccess)

7. Open your computer's command prompt

8. Go to the 'backend' file and copy the directory

9. On the command prompt type: cd "past-your-directory" (example: cd C:\Users\Henrique\Desktop\skins-marketplace-root\backend)

10. Set up a virtual environment by running the following command: python -m venv venv

11. Start the virtual environment: venv\Scripts\activate

12. Install the requirements and extensions: pip install -r requirements.txt

13. Run the Flask application: python app.py

14. Go to the 'frontend' folder and open the file named 'homepage.html' with your browser

15. Inside MySQL run the following command if you wish to keep track of the current user database:

USE marketplace;

SELECT * FROM user;

