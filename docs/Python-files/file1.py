#JAI SIA RAMA
#here i have added the driver path and actual connection URL to code 

import pandas as pd
from datetime import datetime
from airflow.decorators import dag, task
from airflow.models import Variable
from airflow.operators.python import PythonOperator
from airflow.contrib.operators import SSASOperator
from cdata.ssas import SSASConnection

# Declare DAG
@dag(dag_id='update_ssas_cube',
     #start_date=datetime(2023, 1, 1),
     #schedule_interval='0 0 * * *', #daily at midnight
     catchup=False)
def update_ssas_cube():
    
    # Define task to update SSAS cube
    @task()
    def update_cube():
        # Set driver path
        #driver_path = '/path/to/cdata.jdbc.ssas.jar'  #driver path for the JDBC driver used to connect to SQL Server Analysis Services (SSAS)
        
        # Set database name and cube name
        dev_database = Variable.get('dev_database_name')  #development database in SSAS.
        cube_name = Variable.get('cube_name')  # name of the cube that you want to process and deploy
        
        # Set connection URL
        # Instantiate the SSASOperator with appropriate parameters
        update_cube_task = SSASOperator(
            task_id='update_cube_task',
            server='your_ssas_server',  # Replace with the name or IP address of your SSAS server
            database=dev_database,
            cube=cube_name,
            command='ProcessFull',
            driver_path='/path/to/ssas/driver',  # Replace with the actual driver path
            connection_url='jdbc:ssas:RTK=5246...;User=myuseraccount;Password=mypassword;URL=http://localhost/OLAP/msmdpump.dll;',  # Replace with the actual connection URL
            dag=dag,
        )                            
       # connection_url = 'jdbc:ssas:RTK=5246...;User=myuseraccount;Password=mypassword;URL=http://localhost/OLAP/msmdpump.dll;'
        # actual connection URL for your SSAS instance. This URL should include the necessary authentication information, such as username, password, and server URL.
       
        # Establish connection to SSAS
        conn = SSASConnection(driver_path=driver_path, connection_url=connection_url)
        
        # Process and deploy the cube
        conn.process_database(dev_database)
        conn.deploy_cube(dev_database, cube_name)
        
    # Task to update SSAS cube
    update_task = PythonOperator(
        task_id='update_ssas_cube',
        python_callable=update_cube,
        provide_context=True
    )
    
    # Define task dependencies
    preceding_tasks = ['task1', 'task2', 'task3']  # Replace with the actual task IDs
    
    for task_id in preceding_tasks:
        dag >> task_id >> update_task
    
# Create the DAG object
dag = update_ssas_cube()
